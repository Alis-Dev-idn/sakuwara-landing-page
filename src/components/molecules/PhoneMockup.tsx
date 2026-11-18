import { useRef, useState } from 'react';
import { Image as ImageIcon, Pause, Play, Video } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { siteConfig, type FeatureScreenshot } from '@/config';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

export interface PhoneMockupProps {
  screenshots: FeatureScreenshot[];
  videoSrc?: string;
  videoLabel?: string;
  allowVideoToggle?: boolean;
  caption?: string;
}

/**
 * Bingkai mockup ponsel interaktif Sakuwara dengan dukungan mode Video Demo MP4,
 * Galeri Screenshot PNG multi-slide, loading skeleton, `prefers-reduced-motion`,
 * dan fallback otomatis ke PNG saat video gagal dimuat.
 */
export function PhoneMockup({
  screenshots,
  videoSrc,
  videoLabel,
  allowVideoToggle = true,
  caption,
}: PhoneMockupProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const hasVideo = Boolean(videoSrc);

  const [userMode, setUserMode] = useState<'auto' | 'video' | 'photo'>('auto');
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const shouldShowVideo =
    hasVideo &&
    !videoError &&
    (userMode === 'video' || (userMode === 'auto' && !prefersReducedMotion));

  const safeSlideIndex = Math.min(activeSlideIndex, Math.max(screenshots.length - 1, 0));
  const currentScreenshot = screenshots[safeSlideIndex] ?? screenshots[0];
  const displayCaption = caption ?? currentScreenshot?.caption ?? '';

  const handleTogglePlay = () => {
    const videoEl = videoRef.current;
    if (!videoEl) {
      return;
    }
    if (videoEl.paused) {
      void videoEl.play();
      setIsPaused(false);
    } else {
      videoEl.pause();
      setIsPaused(true);
    }
  };

  const handleSelectMode = (mode: 'video' | 'photo') => {
    setUserMode(mode);
    setIsVideoReady(false);
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {allowVideoToggle && (hasVideo || screenshots.length > 1) && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {hasVideo && !videoError && (
            <div
              className="inline-flex rounded-xl border border-slate-200 bg-surface p-1 shadow-xs"
              role="group"
              aria-label={siteConfig.showcase.videoBadgeLabel}
            >
              <button
                type="button"
                onClick={() => handleSelectMode('video')}
                aria-pressed={shouldShowVideo}
                className={`inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                  shouldShowVideo
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <Video className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{siteConfig.showcase.videoToggleLabel}</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectMode('photo')}
                aria-pressed={!shouldShowVideo}
                className={`inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                  !shouldShowVideo
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{siteConfig.showcase.photoToggleLabel}</span>
              </button>
            </div>
          )}

          {!shouldShowVideo && screenshots.length > 1 && (
            <div className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-surface p-1">
              {screenshots.map((item, idx) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => {
                    setActiveSlideIndex(idx);
                    setImageError(false);
                    setIsImageLoaded(false);
                  }}
                  aria-pressed={safeSlideIndex === idx}
                  className={`min-h-9 min-w-9 rounded-lg px-2.5 text-xs font-semibold tabular-nums transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    safeSlideIndex === idx
                      ? 'bg-emerald-soft text-brand-primary border border-emerald-200'
                      : 'text-ink-muted hover:bg-slate-100'
                  }`}
                >
                  {siteConfig.showcase.slideLabelPrefix} {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[310px]">
        <div className="rounded-[2.5rem] bg-slate-900 px-2.5 pt-3 pb-2.5 shadow-2xl shadow-emerald-950/15 ring-1 ring-slate-800">
          <div
            aria-hidden="true"
            className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-slate-700"
          />
          <div className="relative aspect-[9/19.4] w-full overflow-hidden rounded-[2rem] bg-slate-100">
            {!isImageLoaded && !imageError && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 animate-pulse bg-gradient-to-b from-emerald-100/70 via-slate-100 to-slate-200"
              />
            )}

            {!imageError && currentScreenshot ? (
              <img
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                onLoad={() => setIsImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setIsImageLoaded(true);
                }}
                className="relative z-0 h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-soft text-brand-primary">
                  <ImageIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-xs font-medium text-ink-muted">
                  {siteConfig.showcase.imageFallbackText}
                </p>
              </div>
            )}

            {shouldShowVideo && videoSrc && (
              <>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={currentScreenshot?.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={videoLabel ?? currentScreenshot?.alt}
                  onLoadedData={() => setIsVideoReady(true)}
                  onError={() => {
                    setVideoError(true);
                    setIsVideoReady(false);
                  }}
                  className={`absolute inset-0 z-10 h-full w-full object-cover object-top transition-opacity duration-200 ${
                    isVideoReady ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={
                    isPaused
                      ? siteConfig.showcase.playVideoLabel
                      : siteConfig.showcase.pauseVideoLabel
                  }
                  className="absolute right-3 bottom-3 z-20 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-slate-900/75 text-white backdrop-blur-xs transition-colors hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
                >
                  {isPaused ? (
                    <Play className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Pause className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5 text-center">
        <Badge variant={shouldShowVideo ? 'emerald' : 'neutral'}>
          {shouldShowVideo
            ? videoLabel ?? siteConfig.showcase.videoBadgeLabel
            : siteConfig.showcase.photoBadgeLabel}
        </Badge>
        {displayCaption && <p className="max-w-xs text-xs text-ink-muted">{displayCaption}</p>}
        {videoError && (
          <p role="status" className="max-w-xs text-xs font-medium text-amber-800">
            {siteConfig.showcase.videoFallbackNotice}
          </p>
        )}
        {hasVideo && !videoError && prefersReducedMotion && userMode === 'auto' && (
          <p className="max-w-xs text-xs text-ink-muted">
            {siteConfig.showcase.reducedMotionHint}
          </p>
        )}
      </div>
    </div>
  );
}
