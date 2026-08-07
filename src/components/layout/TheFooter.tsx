import { Container } from '@/components/layout/Container';
import { SOCIAL_LINKS } from '@/modules/home/data/portfolio';

export function TheFooter() {
  return (
    <footer className="border-t border-divider py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex gap-5">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent-cyan"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
