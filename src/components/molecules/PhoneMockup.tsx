import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Badge } from '@/components/atoms/Badge';
import { showcaseConfig, type FeatureScreenshot, type PhoneFrameConfig } from '@/config';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

export interface PhoneMockupProps {
  screenshots: FeatureScreenshot[];
  frameConfig?: PhoneFrameConfig;
  caption?: string;
}

const SWIPE_THRESHOLD_PX = 40;

/**
 * Bingkai mockup ponsel modern Sakuwara dengan galeri gambar swipeable (kiri/kanan),
 * tombol navigasi, dot indicator, auto-slide yang dapat diatur dari config,
 * serta dukungan `prefers-reduced-motion` dan fallback gambar.
 */
export function PhoneMockup({
  screenshots,
  frameConfig = showcaseConfig.phoneFrame,
  caption,
}: PhoneMockupProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const pointerStartX = useRef<number | null>(null);

  const totalSlides = screenshots.length;
  const safeSlideIndex = totalSlides > 0 ? activeSlideIndex % totalSlides : 0;
  const currentScreenshot = screenshots[safeSlideIndex] ?? screenshots[0];
  const currentSrc = currentScreenshot?.src ?? '';
  const hasImageError = currentSrc !== '' && failedSrc === currentSrc;
  const isImageLoaded = currentSrc !== '' && loadedSrc === currentSrc;
  const displayCaption = caption ?? currentScreenshot?.caption ?? '';

  const goToSlide = (nextIndex: number, slideDirection: 1 | -1) => {
    if (totalSlides <= 1) {
      return;
    }
    const normalizedIndex = ((nextIndex % totalSlides) + totalSlides) % totalSlides;
    setDirection(slideDirection);
    setActiveSlideIndex(normalizedIndex);
  };

  const handleNext = () => goToSlide(safeSlideIndex + 1, 1);
  const handlePrev = () => goToSlide(safeSlideIndex - 1, -1);

  useEffect(() => {
    if (!frameConfig.autoSlide || totalSlides <= 1 || prefersReducedMotion || isPaused) {
      return;
    }

    const intervalMs = Math.max(frameConfig.autoSlideIntervalMs, 1500);
    const timerId = window.setInterval(() => {
      setDirection(1);
      setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [frameConfig.autoSlide, frameConfig.autoSlideIntervalMs, totalSlides, prefersReducedMotion, isPaused]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (totalSlides <= 1) {
      return;
    }
    pointerStartX.current = event.clientX;
    setIsPaused(true);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null || totalSlides <= 1) {
      pointerStartX.current = null;
      return;
    }
    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (deltaX <= -SWIPE_THRESHOLD_PX) {
      handleNext();
    } else if (deltaX >= SWIPE_THRESHOLD_PX) {
      handlePrev();
    }
    setIsPaused(false);
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    setIsPaused(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (totalSlides <= 1) {
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto w-full max-w-[285px] sm:max-w-[305px]">
        {/* Tombol fisik dekoratif sisi kiri & kanan */}
        <span
          aria-hidden="true"
          className="absolute top-24 -left-[3px] h-9 w-[3px] rounded-l-full bg-slate-600"
        />
        <span
          aria-hidden="true"
          className="absolute top-36 -left-[3px] h-9 w-[3px] rounded-l-full bg-slate-600"
        />
        <span
          aria-hidden="true"
          className="absolute top-28 -right-[3px] h-14 w-[3px] rounded-r-full bg-slate-600"
        />

        {/* Ring metalik luar */}
        <div className="rounded-[2.8rem] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-700 p-[3px] shadow-2xl shadow-emerald-950/20">
          {/* Bezel dalam */}
          <div className="rounded-[2.65rem] bg-slate-950 p-2">
            {/* Layar */}
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={frameConfig.badgeLabel}
              tabIndex={totalSlides > 1 ? 0 : undefined}
              onKeyDown={handleKeyDown}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              className="relative aspect-[9/19.5] w-full select-none touch-pan-y overflow-hidden rounded-[2.15rem] bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {/* Dynamic Island / Kamera atas */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-2.5 left-1/2 z-20 flex h-4 w-20 -translate-x-1/2 items-center justify-end rounded-full bg-slate-950 px-2 shadow-sm ring-1 ring-white/10"
              >
                <span className="h-2 w-2 rounded-full bg-slate-800 ring-1 ring-slate-700" />
              </div>

              {/* Kilau kaca halus */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/15 to-transparent"
              />

              {!isImageLoaded && !hasImageError && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-0 animate-pulse bg-gradient-to-b from-emerald-100/70 via-slate-100 to-slate-200"
                />
              )}

              {!hasImageError && currentScreenshot ? (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={currentScreenshot.src}
                    src={currentScreenshot.src}
                    alt={currentScreenshot.alt}
                    draggable={false}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: direction * 28 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: direction * -28 }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.26,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onLoad={() => setLoadedSrc(currentScreenshot.src)}
                    onError={() => {
                      setFailedSrc(currentScreenshot.src);
                      setLoadedSrc(currentScreenshot.src);
                    }}
                    className="relative z-0 h-full w-full object-cover object-top"
                  />
                </AnimatePresence>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-soft text-brand-primary">
                    <ImageIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-medium text-ink-muted">
                    {showcaseConfig.imageFallbackText}
                  </p>
                </div>
              )}

              {/* Tombol panah kiri/kanan */}
              {totalSlides > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={frameConfig.prevSlideAriaLabel}
                    className="absolute top-1/2 left-2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/65 text-white shadow-md backdrop-blur-xs transition-all hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label={frameConfig.nextSlideAriaLabel}
                    className="absolute top-1/2 right-2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/65 text-white shadow-md backdrop-blur-xs transition-all hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </>
              )}

              {/* Home indicator bar */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2 left-1/2 z-20 h-1 w-20 -translate-x-1/2 rounded-full bg-slate-900/25"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators untuk swipe/klik slide */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-1.5" role="group" aria-label={frameConfig.badgeLabel}>
          {screenshots.map((item, idx) => {
            const isActive = safeSlideIndex === idx;
            return (
              <button
                key={item.src}
                type="button"
                onClick={() => goToSlide(idx, idx >= safeSlideIndex ? 1 : -1)}
                aria-label={`${frameConfig.slideDotAriaPrefix} ${idx + 1}`}
                aria-pressed={isActive}
                className="inline-flex h-7 items-center px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-full cursor-pointer"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'w-6 bg-brand-primary'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      <div className="flex flex-col items-center gap-1.5 text-center">
        <Badge variant="emerald">
          {frameConfig.badgeLabel}
          {totalSlides > 1 ? ` • ${safeSlideIndex + 1}/${totalSlides}` : ''}
        </Badge>
        {displayCaption && <p className="max-w-xs text-xs text-ink-muted">{displayCaption}</p>}
      </div>
    </div>
  );
}
