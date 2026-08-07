import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { ABOUT_TEXT } from '@/modules/home/data/portfolio';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-dvh flex-col justify-center bg-background-elevated py-24"
    >
      <hr className="divider-gradient absolute inset-x-0 top-0" />
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="01 — About" title="About Me" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-[18px] leading-7.5 text-muted">
            {ABOUT_TEXT}
          </p>
        </FadeIn>

        {/* Skills orbit illustration */}
        <FadeIn delay={0.15} y={0}>
          <div className="relative mx-auto mt-12 aspect-895/657 w-full max-w-235">
            <Image
              src="/images/best-skills.png"
              alt="Skills and technologies I work with"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 895px"
              className="object-contain"
            />
          </div>
        </FadeIn>
      </Container>
      <hr className="divider-gradient absolute inset-x-0 bottom-0" />
    </section>
  );
}
