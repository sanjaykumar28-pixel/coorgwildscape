import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
  align?: 'left' | 'center';
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'light',
  align = 'left',
  action,
}: SectionHeadingProps) {
  const isDark = theme === 'dark';
  const alignClasses = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl';

  return (
    <div
      className={`flex flex-col gap-6 ${
        align === 'left' && action ? 'md:flex-row md:items-end md:justify-between' : ''
      }`}
    >
      <div className={alignClasses}>
        <p
          className={`text-xs font-medium tracking-[0.18em] uppercase mb-3 ${
            isDark ? 'text-[#E88554]' : 'text-[#D95D24]'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.12] tracking-[-0.01em] display-balance ${
            isDark ? 'text-[#F2F1EC]' : 'text-[#161B17]'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? 'text-[#A6B0A8]' : 'text-[#4E5850]'
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
