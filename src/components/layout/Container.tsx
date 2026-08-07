import { cn } from '@/lib/utils';
import type * as React from 'react';

type ContainerProps = React.ComponentProps<'div'>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-300 px-6 md:px-10', className)}
      {...props}
    />
  );
}
