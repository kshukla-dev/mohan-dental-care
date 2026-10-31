/**
 * BrandLogo Component
 * Renders the official Mohan Dental Care brand identity in Hindi & English,
 * styled to match the clinic's website theme (Primary Navy #03213B & Medical Sky Blue #0284c7).
 */
export default function BrandLogo({ showIcon = true, size = 'default', variant = 'light', className = '' }) {
  const isCompact = size === 'compact';
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none text-left ${className}`}>
      {showIcon && (
        <div
          className={`rounded-xl bg-gradient-to-br from-[#03213B] via-[#0f3d64] to-[#0284c7] flex items-center justify-center text-white shadow-sm shrink-0 border border-[#0284c7]/25 transition-transform duration-200 group-hover:scale-105 ${
            isCompact ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-11 sm:h-11'
          }`}
          aria-hidden="true"
        >
          {/* Clinical Tooth Icon */}
          <svg
            className={isCompact ? 'w-4 h-4 sm:w-5 sm:h-5 text-white' : 'w-5 h-5 sm:w-6 sm:h-6 text-white'}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 2c-2.8 0-5 2.2-5 5 0 3.6 1.4 6.8 2.6 10.2.7 2.1 3 2.8 4.2.6.9-1.6 1.8-3.3 3.2-3.3s2.3 1.7 3.2 3.3c1.2 2.2 3.5 1.5 4.2-.6 1.2-3.4 2.6-6.6 2.6-10.2 0-2.8-2.2-5-5-5-1.9 0-3.1 1-4.5 1S8.9 2 7 2z" />
          </svg>
        </div>
      )}

      {/* Typography Block */}
      <div className="flex flex-col justify-center leading-none text-left">
        {/* Main Hindi Heading in Primary Navy */}
        <span
          className={`font-hindi font-bold tracking-tight transition-colors duration-200 whitespace-nowrap ${
            isDark ? 'text-white group-hover:text-[#38bdf8]' : 'text-[#03213B] group-hover:text-[#0284c7]'
          } ${
            isCompact
              ? 'text-[1.05rem] sm:text-[1.18rem]'
              : 'text-[1.02rem] xs:text-[1.16rem] sm:text-[1.32rem] lg:text-[1.44rem]'
          }`}
          style={{
            textShadow: isDark
              ? '0 1px 2px rgba(0, 0, 0, 0.4)'
              : '0 1px 2px rgba(3, 33, 59, 0.08)',
          }}
        >
          मोहन डेंटल केयर सूरजपुर
        </span>

        {/* English Subtitle in Theme Sky Blue */}
        <span
          className={`font-display font-bold tracking-[0.22em] uppercase transition-colors duration-200 whitespace-nowrap mt-1 ${
            isDark ? 'text-[#38bdf8] group-hover:text-white' : 'text-[#0284c7] group-hover:text-[#03213B]'
          } ${
            isCompact
              ? 'text-[8px] sm:text-[9px]'
              : 'text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] lg:text-[11px]'
          }`}
        >
          MOHAN DENTAL CARE
        </span>
      </div>
    </div>
  );
}
