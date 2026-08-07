import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { PROFILE } from '@/modules/home/data/portfolio';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <div className="hero-panel relative flex min-h-[calc(100dvh-1.5rem)] flex-col justify-center overflow-hidden rounded-[28px] px-6 pt-28 pb-16 sm:px-10 md:rounded-[40px] md:px-16 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-195 w-190 rounded-full opacity-45 blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, rgba(174,12,167,0.5) 0%, rgba(93,255,255,0.12) 55%, transparent 70%)',
          }}
        />

        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-y-0 right-0 z-0 w-full md:w-[62%]"
        />

        <div className="relative mx-auto grid w-full max-w-350 items-center gap-12 md:grid-cols-[1.15fr_1fr]">
          <div className="max-w-auto">
            <FadeIn>
              <h1 className="font-display text-[56px] font-bold leading-[1.05] text-foreground md:text-[80px] lg:text-[90px]">
                {PROFILE.firstName}
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-gradient font-display mt-1 text-[34px] font-semibold md:text-[50px]">
                {PROFILE.role}
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 text-[18px] leading-7.5 text-foreground/80">
                {PROFILE.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <Button asChild className="mt-9">
                <a href="#contact">Contact</a>
              </Button>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} y={0} className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[90px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(157,92,255,0.5) 0%, rgba(93,255,255,0.16) 48%, transparent 70%)',
              }}
            />
            <div className="relative mx-auto aspect-3/2 w-full max-w-170">
              <Image
                src={PROFILE.portrait}
                alt="Portrait of Nhat Nguyen"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
