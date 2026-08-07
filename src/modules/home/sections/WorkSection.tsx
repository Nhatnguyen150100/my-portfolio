import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProjectCard } from '@/modules/home/components/ProjectCard';
import { PROJECTS } from '@/modules/home/data/portfolio';

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden py-24"
    >
      {/* Ambient glow, offset to the left so the section feels less flat */}
      <div
        aria-hidden
        className="glow-blob pointer-events-none absolute -left-40 top-40 -z-10 h-140 w-140 rounded-full opacity-25 blur-[130px]"
      />
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="03 — Projects"
            title="Featured Projects"
            subtitle="A selection of personal projects I've designed and built to explore new ideas and technologies."
            align="left"
          />
        </FadeIn>

        <div className="mt-16 flex flex-col gap-20 md:gap-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
