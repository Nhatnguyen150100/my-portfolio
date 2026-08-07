import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import type * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60',
  {
    variants: {
      variant: {
        gradient:
          'bg-gradient-accent text-white shadow-[0_8px_24px_-8px_rgba(174,12,167,0.6)]',
        outline:
          'border border-border bg-transparent text-foreground hover:border-accent-cyan/60 hover:text-accent-cyan',
        ghost: 'bg-transparent text-muted hover:text-foreground',
      },
      size: {
        default: 'h-[45px] px-7 text-[18px]',
        sm: 'h-10 px-5 text-base',
        lg: 'h-12 px-8 text-lg',
      },
      effect: {
        none: '',
        lift: 'hover:-translate-y-0.5',
        zoom: 'hover:scale-[1.03]',
      },
    },
    defaultVariants: {
      variant: 'gradient',
      size: 'default',
      effect: 'lift',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  effect,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, effect }),
        'rounded-pill',
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
