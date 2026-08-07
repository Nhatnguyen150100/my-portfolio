import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  /** Small gradient label shown above the title (e.g. "01 — About"). */
  eyebrow?: string;
  align?: 'center' | 'left';
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center'
          ? 'items-center text-center'
          : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-gradient text-sm font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-2 font-display text-[44px] font-semibold leading-tight text-foreground md:text-[52px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-[18px] text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
