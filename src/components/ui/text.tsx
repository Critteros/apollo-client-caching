import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export type TextElements = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

export const textVariants = cva([], {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 font-light',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export type TextProps = ComponentProps<'p'> &
  VariantProps<typeof textVariants> & { as?: TextElements };

export function Text({ className, children, variant, as: As = 'p' }: TextProps) {
  return <As className={cn(textVariants({ variant }), className)}>{children}</As>;
}
