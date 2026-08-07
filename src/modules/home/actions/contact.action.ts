'use server';

import { contactSchema } from '@/modules/home/schemas/contact.schema';
import { Resend } from 'resend';

export type ContactResult = { ok: true } | { ok: false; error: string };

// Where messages are delivered, and the verified sender address.
// Override via env in production; defaults keep local dev working.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'nhatnguyen150100@gmail.com';
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

/**
 * Handles a contact-form submission: validates input server-side, drops
 * obvious bot spam via a honeypot, and emails the message through Resend.
 *
 * Treated as an untrusted public endpoint — never trust the client payload.
 */
export async function sendContactMessage(
  input: unknown,
): Promise<ContactResult> {
  // Honeypot: real users never see or fill the `company` field. If it's set,
  // silently pretend success so bots don't learn they were filtered.
  if (
    input !== null &&
    typeof input === 'object' &&
    'company' in input &&
    typeof (input as { company?: unknown }).company === 'string' &&
    (input as { company: string }).company.trim() !== ''
  ) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'Please check the form and try again.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — cannot send contact email.');
    return { ok: false, error: 'Email service is not configured yet.' };
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend returned an error:', error);
      return {
        ok: false,
        error: 'Could not send your message. Please try again.',
      };
    }

    return { ok: true };
  } catch (err) {
    console.error('Contact action failed:', err);
    return {
      ok: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}
