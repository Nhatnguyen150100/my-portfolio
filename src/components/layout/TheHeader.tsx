'use client';

import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/modules/home/data/portfolio';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TheHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape or when navigating to a section.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('hashchange', close);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', close);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <Container
        className={cn(
          'flex h-16 items-center justify-between transition-[margin] duration-300 md:justify-center',
          scrolled || open ? 'mt-0' : 'mt-4 md:mt-8',
        )}
      >
        <nav className="hidden items-center gap-8 md:flex md:gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile dropdown panel */}
      {open ? (
        <nav
          id="mobile-nav"
          className="animate-in fade-in slide-in-from-top-2 border-t border-divider bg-background/95 backdrop-blur-md duration-200 md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-[15px] font-medium tracking-[0.15em] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
