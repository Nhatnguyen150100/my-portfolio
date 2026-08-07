'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendContactMessage } from '@/modules/home/actions/contact.action';
import {
  type ContactFormValues,
  contactSchema,
} from '@/modules/home/schemas/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Status = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle');
    setErrorMessage('');

    // Include the honeypot value so the server can filter bots.
    const honeypot =
      (document.getElementById('contact-company') as HTMLInputElement | null)
        ?.value ?? '';

    const result = await sendContactMessage({ ...values, company: honeypot });

    if (result.ok) {
      setStatus('success');
      reset();
    } else {
      setStatus('error');
      setErrorMessage(result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl bg-surface/60 p-6 backdrop-blur-sm md:p-8"
    >
      <div className="flex flex-col gap-5">
        <Field label="Name" error={errors.name?.message}>
          <Input placeholder="Jane Appleseed" {...register('name')} />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="jane@example.com"
            {...register('email')}
          />
        </Field>

        <Field label="Message" error={errors.message?.message}>
          <Textarea
            rows={4}
            placeholder="How can I help?"
            {...register('message')}
          />
        </Field>

        {/* Honeypot — hidden from users, only bots fill it. */}
        <input
          id="contact-company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <Button
          type="submit"
          size="sm"
          disabled={isSubmitting}
          className="mt-1"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </Button>

        {status === 'success' ? (
          <p className="text-sm text-accent-cyan">
            Thanks! Your message has been sent — I'll get back to you soon.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-red-400">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[16px] font-medium text-foreground">{label}</span>
      {children}
      {error ? <span className="text-sm text-red-400">{error}</span> : null}
    </label>
  );
}
