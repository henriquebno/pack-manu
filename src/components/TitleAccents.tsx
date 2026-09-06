import React from 'react';

interface UnderlineStrokeProps {
  className?: string;
  color?: string;
}

/**
 * Curved fluid underline stroke for emphasizing key words in titles
 */
export const UnderlineStroke: React.FC<UnderlineStrokeProps> = ({
  className = '-bottom-1.5 sm:-bottom-2',
  color = 'currentColor',
}) => {
  return (
    <svg
      className={`absolute left-0 w-full h-2.5 sm:h-3.5 pointer-events-none ${className}`}
      viewBox="0 0 220 12"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 8.5C48 3 150 2 217.5 7"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Double artistic accent stroke for high-impact titles
 */
export const DoubleUnderline: React.FC<UnderlineStrokeProps> = ({
  className = '-bottom-2',
  color = 'currentColor',
}) => {
  return (
    <svg
      className={`absolute left-0 w-full h-3 pointer-events-none ${className}`}
      viewBox="0 0 200 14"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 6C45 2.5 140 2.5 198 5.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 11C60 8 150 8 188 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
    </svg>
  );
};

/**
 * Highlighter marker box effect behind words (grifado)
 */
export const MarkerHighlight: React.FC<{
  children: React.ReactNode;
  colorClass?: string;
  className?: string;
}> = ({ children, colorClass = 'bg-rose-200/50', className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute inset-x-0 bottom-1 sm:bottom-1.5 h-3 sm:h-4 ${colorClass} -rotate-1 rounded-xs -z-0 pointer-events-none`}
        aria-hidden="true"
      />
    </span>
  );
};

/**
 * Section eyebrow badge flanked by refined editorial accent lines
 */
export const SectionBadge: React.FC<{
  children: React.ReactNode;
  badgeClassName?: string;
}> = ({ children, badgeClassName = 'text-rose-700 bg-rose-50 border-rose-100/80' }) => {
  return (
    <div className="flex items-center justify-center gap-2.5 mb-3">
      <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-rose-300/80" />
      <span
        className={`inline-block text-[11px] sm:text-xs uppercase tracking-[0.15em] font-semibold border px-3 py-0.5 rounded-full font-heading ${badgeClassName}`}
      >
        {children}
      </span>
      <span className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-rose-300/80" />
    </div>
  );
};
