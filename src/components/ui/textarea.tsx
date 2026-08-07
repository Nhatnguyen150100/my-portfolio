import { cn } from '@/lib/utils';
import type * as React from 'react';

type TextareaProps = React.ComponentProps<'textarea'>;

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'flex min-h-24 w-full rounded-lg bg-surface-strong px-4 py-3 text-[16px] text-foreground',
        'placeholder:text-hint/70 resize-none',
        'border border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:border-accent-cyan/60',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
