'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import type * as React from 'react';
import { useEffect, useState } from 'react';

export type TypewriterSegment = {
  /** Text to type out. */
  text: string;
  /** Element to render the line as. Defaults to `p`. */
  as?: React.ElementType;
  /** Typography classes applied to the visible text. */
  className?: string;
  /** Layout classes (margins, positioning) applied to the wrapper. */
  wrapperClassName?: string;
  /** Milliseconds per character. Defaults to 40. */
  speed?: number;
  /** Pause in ms before this line starts typing. Defaults to 250. */
  startGap?: number;
};

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

function Caret() {
  return (
    <motion.span
      aria-hidden
      className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-full bg-foreground/70 align-baseline"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, times: [0, 0.5, 0.5, 1], ease: 'linear' }}
    />
  );
}

export function Typewriter({ segments }: { segments: TypewriterSegment[] }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (prefersReducedMotion) {
      setIndex(segments.length);
      return;
    }

    let cancelled = false;

    const run = async () => {
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        setIndex(i);
        setCount(0);
        await wait(seg.startGap ?? 250);
        if (cancelled) return;
        for (let c = 1; c <= seg.text.length; c++) {
          await wait(seg.speed ?? 40);
          if (cancelled) return;
          setCount(c);
        }
      }
      if (!cancelled) setIndex(segments.length);
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  return (
    <>
      {segments.map((seg, j) => {
        const Tag = (seg.as ?? 'p') as React.ElementType;
        const full = seg.text;
        const typedLength =
          prefersReducedMotion || j < index ? full.length : j === index ? count : 0;
        const showCaret = !prefersReducedMotion && j === index && index < segments.length;

        return (
          <Tag key={j} aria-label={full} className={cn('relative', seg.wrapperClassName)}>
            <span aria-hidden className={cn('invisible', seg.className)}>
              {full}
            </span>
            <span aria-hidden className={cn('absolute inset-0', seg.className)}>
              {full.slice(0, typedLength)}
              {showCaret && <Caret />}
            </span>
          </Tag>
        );
      })}
    </>
  );
}
