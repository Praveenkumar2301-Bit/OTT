import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const variants = {
  primary: 'bg-white text-zentra-bg hover:bg-white/95 font-semibold shadow-sm hover:shadow-md transition-shadow',
  secondary: 'bg-white/5 border border-white/10 text-white hover:border-white/20 hover:bg-white/10 font-medium',
  ghost: 'text-zentra-muted hover:text-white hover:bg-white/5',
  gold: 'bg-zentra-gold text-white hover:bg-zentra-gold/90 font-semibold shadow-md hover:shadow-glow transition-shadow',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zentra-gold focus:ring-offset-2 focus:ring-offset-zentra-bg disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';
