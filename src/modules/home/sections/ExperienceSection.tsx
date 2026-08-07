import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  type TimelineItem,
} from '@/modules/home/data/portfolio';
import {
  Award,
  Briefcase,
  GraduationCap,
  type LucideIcon,
  MapPin,
} from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="resume"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden py-24"
    >
      {/* Ambient glow, offset to the right to balance the Work section's left glow */}
      <div
        aria-hidden
        className="glow-blob pointer-events-none absolute -right-40 top-24 -z-10 h-140 w-140 rounded-full opacity-20 blur-[130px]"
      />
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="02 — Résumé"
            title="Experience & Education"
            subtitle="My professional journey and academic background."
            align="left"
          />
        </FadeIn>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <TimelineColumn
            label="Experience"
            icon={Briefcase}
            items={EXPERIENCE}
            delay={0.05}
          />
          <div className="flex flex-col gap-12">
            <TimelineColumn
              label="Education"
              icon={GraduationCap}
              items={EDUCATION}
              delay={0.15}
            />
            <TimelineColumn
              label="Certifications"
              icon={Award}
              items={CERTIFICATIONS}
              delay={0.2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

type TimelineColumnProps = {
  label: string;
  icon: LucideIcon;
  items: TimelineItem[];
  delay?: number;
};

function TimelineColumn({
  label,
  icon: Icon,
  items,
  delay,
}: TimelineColumnProps) {
  return (
    <FadeIn delay={delay}>
      <div>
        <h3 className="flex items-center gap-2.5 font-display text-[22px] font-semibold text-foreground">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-accent">
            <Icon className="size-4 text-white" />
          </span>
          {label}
        </h3>

        <ol className="relative mt-6 border-l border-border pl-6">
          {items.map((item) => (
            <TimelineRow key={`${item.org}-${item.period}`} item={item} />
          ))}
        </ol>
      </div>
    </FadeIn>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  return (
    <li className="relative pb-9 last:pb-0">
      {/* Dot on the rail */}
      <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-gradient-accent ring-4 ring-background" />

      {item.period ? (
        <p className="text-gradient text-sm font-semibold">{item.period}</p>
      ) : null}
      <h4 className="mt-1 text-[18px] font-semibold text-foreground">
        {item.title}
      </h4>
      <p className="mt-0.5 text-[15px] text-muted">
        {item.org}
        {item.kind ? <span className="text-hint"> · {item.kind}</span> : null}
      </p>
      {item.location ? (
        <p className="mt-1 flex items-center gap-1 text-[13px] text-hint">
          <MapPin className="size-3.5" />
          {item.location}
        </p>
      ) : null}

      {item.description ? (
        <p className="mt-2 text-[14px] leading-6 text-hint">
          {item.description}
        </p>
      ) : null}

      {item.grade ? (
        <p className="mt-2 text-[13px] text-muted">
          <span className="text-hint">Grade:</span> {item.grade}
        </p>
      ) : null}

      {item.activities ? (
        <p className="mt-1 text-[13px] leading-6 text-hint">
          <span className="text-muted">Activities:</span> {item.activities}
        </p>
      ) : null}

      {item.tags && item.tags.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-surface-strong/40 px-2.5 py-0.5 text-[12px] text-hint"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
