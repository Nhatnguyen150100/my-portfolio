import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/modules/home/components/ContactForm';
import { CONTACT_COPY, CONTACT_INFO } from '@/modules/home/data/portfolio';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh flex-col justify-center bg-background-elevated py-24"
    >
      <hr className="divider-gradient absolute inset-x-0 top-0" />
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="04 — Contact"
            title="Get In Touch"
            align="left"
          />
        </FadeIn>

        <div className="mt-14 grid items-start gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: message + details */}
          <FadeIn className="flex flex-col gap-8">
            <div>
              <h3 className="text-gradient font-display text-[32px] font-semibold">
                {CONTACT_COPY.heading}
              </h3>
              <p className="mt-4 max-w-md text-[17px] leading-7 text-muted">
                {CONTACT_COPY.body}
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {CONTACT_INFO.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    className="group flex items-center gap-4 text-foreground/90 transition-colors hover:text-foreground"
                    rel="noreferrer"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-accent">
                      <Icon className="size-4 text-white" />
                    </span>
                    <span className="text-[16px]">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
