import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent-light';
export type ButtonSize = 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover hover:shadow-md',
  secondary:
    'bg-surface text-ink border border-slate-200 shadow-xs hover:border-emerald-300 hover:bg-emerald-soft/60',
  ghost:
    'bg-transparent text-ink-muted hover:text-ink hover:bg-slate-100',
  'accent-light':
    'bg-white text-emerald-deep shadow-sm hover:bg-emerald-50 hover:shadow-md',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3.5 text-base',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-[transform,colors,box-shadow] duration-150 ease-out active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

interface CommonButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButtonProps = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

/**
 * Komponen tombol atomik dengan varian seragam, target sentuh >= 44px,
 * sudut membulat, dan dukungan link eksternal aman.
 */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children, ...rest } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim();

  if (typeof props.href === 'string') {
    const { href, target, rel, ...anchorRest } = rest as Omit<ButtonAsAnchorProps, keyof CommonButtonProps>;
    const safeRel = target === '_blank' ? rel ?? 'noopener noreferrer' : rel;
    return (
      <a href={href} target={target} rel={safeRel} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButtonProps, keyof CommonButtonProps>;
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
