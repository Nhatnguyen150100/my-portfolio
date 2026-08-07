import { FadeIn } from '@/components/ui/fade-in';
import { cn } from '@/lib/utils';
import type { Project } from '@/modules/home/data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
  /** When true, the image sits on the right (odd rows). */
  reversed?: boolean;
};

export function ProjectCard({ project, reversed }: ProjectCardProps) {
  return (
    <FadeIn>
      <div className="group grid items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Image */}
        <div
          className={cn(
            'relative aspect-[562/319] w-full overflow-hidden rounded-xl border border-border/60 transition-colors duration-300 group-hover:border-accent-cyan/40',
            reversed && 'md:order-2',
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* Bottom fade so the image sits into the dark canvas */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent"
          />
        </div>

        {/* Copy */}
        <div className={cn(reversed && 'md:order-1 md:text-right')}>
          <p className="text-gradient text-sm font-medium">{project.tag}</p>
          <h3 className="mt-2 font-display text-[26px] font-semibold text-foreground">
            {project.title}
          </h3>

          <div className="mt-4 rounded-xl bg-surface/70 p-5 backdrop-blur-sm">
            <p className="text-[15px] leading-[26px] text-muted">
              {project.description}
            </p>
          </div>

          {project.tech && project.tech.length > 0 ? (
            <ul
              className={cn(
                'mt-4 flex flex-wrap gap-2',
                reversed && 'md:justify-end',
              )}
            >
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface-strong/40 px-3 py-1 text-[13px] text-hint"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          <div className={cn('mt-5 flex gap-5', reversed && 'md:justify-end')}>
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground/90 transition-colors hover:text-accent-cyan"
              >
                Live Demo
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-muted transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
                Source Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
