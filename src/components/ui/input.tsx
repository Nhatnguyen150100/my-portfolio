import { cn } from '@/lib/utils';
import type * as React from 'react';

type InputProps = React.ComponentProps<'input'>;

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full rounded-lg bg-surface-strong px-4 text-[16px] text-foreground',
        'placeholder:text-hint/70',
        'border border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:border-accent-cyan/60',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
