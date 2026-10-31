import { getAssetUrl } from '../utils';

/**
 * BrandLogo Component
 * Renders the official Mohan Dental Care brand identity in Hindi & English,
 * with the official clinic emblem (Tooth + Krishna's Peacock Feather & Flute),
 * styled to match the clinic's website theme (Primary Navy #03213B & Medical Sky Blue #0284c7).
 */
export default function BrandLogo({ showIcon = true, size = 'default', variant = 'light', className = '' }) {
  const isCompact = size === 'compact';
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none text-left ${className}`}>
      {showIcon && (
        <img
          src={getAssetUrl('images/mohan-logo-user-clean.webp')}
          alt="मोहन डेंटल केयर सूरजपुर - प्रतीक चिन्ह"
          className={`shrink-0 object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-[0_2px_4px_rgba(3,33,59,0.12)] ${isCompact
            ? 'h-8 sm:h-9 w-auto max-w-[46px] sm:max-w-[52px]'
            : 'h-10 sm:h-11 lg:h-12 w-auto max-w-[54px] sm:max-w-[62px] lg:max-w-[68px]'
            }`}
        />
      )}

      {/* Typography Block */}
      <div className="flex flex-col justify-center leading-none text-left">
        {/* Main Hindi Heading in Primary Navy */}
        <span
          className={`font-hindi font-bold tracking-tight transition-colors duration-200 whitespace-nowrap ${isDark ? 'text-white group-hover:text-[#38bdf8]' : 'text-[#03213B] group-hover:text-[#0284c7]'
            } ${isCompact
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
          className={`font-display font-bold tracking-[0.22em] uppercase transition-colors duration-200 whitespace-nowrap mt-1 ${isDark ? 'text-[#38bdf8] group-hover:text-white' : 'text-[#0284c7] group-hover:text-[#03213B]'
            } ${isCompact
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
