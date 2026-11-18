import { Badge } from '@/components/atoms/Badge';

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

/**
 * Header section terstandar dengan eyebrow badge, heading skala kontras, dan deskripsi max-w-prose.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClasses =
    align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
      <Badge variant="emerald">{eyebrow}</Badge>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="max-w-prose text-base leading-relaxed text-ink-muted sm:text-lg">{subtitle}</p>
    </div>
  );
}
