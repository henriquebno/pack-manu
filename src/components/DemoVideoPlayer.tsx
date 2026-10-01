import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface DemoVideoPlayerProps {
  videoId?: string;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        options: {
          videoId?: string;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
          };
        }
      ) => YTPlayerInstance;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  getPlayerState: () => number;
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy?: () => void;
}

export const DemoVideoPlayer: React.FC<DemoVideoPlayerProps> = ({
  videoId = 'xav7Ho6tYKw',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const hasSoundRef = useRef<boolean>(false);
  const isPlayingRef = useRef<boolean>(true);

  const [hasSound, setHasSound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Synchronize state with refs for event callbacks
  useEffect(() => {
    hasSoundRef.current = hasSound;
  }, [hasSound]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    let isMounted = true;
    let pollInterval: ReturnType<typeof setInterval> | null = null;
    let ytCheckInterval: ReturnType<typeof setInterval> | null = null;

    const initPlayer = () => {
      if (!isMounted || playerRef.current || !containerRef.current) return;
      if (!window.YT || !window.YT.Player) return;

      const container = containerRef.current;
      container.innerHTML = '<div id="vturb-yt-iframe-slot"></div>';
      const mountEl = document.getElementById('vturb-yt-iframe-slot');
      if (!mountEl) return;

      try {
        const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : undefined;
        playerRef.current = new window.YT.Player(mountEl, {
          videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            iv_load_policy: 3,
            showinfo: 0,
            origin,
          },
          events: {
            onReady: (event) => {
              if (!isMounted) return;
              try {
                event.target.mute();
                event.target.playVideo();
              } catch (e) {}
            },
            onStateChange: (event) => {
              if (!isMounted) return;
              const state = event.data;

              // 1 = PLAYING
              if (state === 1) {
                setIsVideoPlaying(prev => (prev ? prev : true));
                setIsPlaying(true);
              }
              // 0 = ENDED -> Seamless instant rewind & replay
              else if (state === 0) {
                try {
                  event.target.seekTo(0, true);
                  event.target.playVideo();
                } catch (e) {}
                if (hasSoundRef.current) {
                  setIsPlaying(true);
                }
              }
              // 2 = PAUSED
              else if (state === 2) {
                if (!hasSoundRef.current) {
                  // Keep playing in muted preview mode
                  try {
                    event.target.playVideo();
                  } catch (e) {}
                } else {
                  setIsPlaying(false);
                }
              }
            },
          },
        });
      } catch (err) {}
    };

    const loadApiAndInit = () => {
      if (!isMounted || playerRef.current) return;

      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          tag.async = true;
          document.head.appendChild(tag);
        }

        const prevCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (prevCallback) prevCallback();
          initPlayer();
        };

        ytCheckInterval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            if (ytCheckInterval) clearInterval(ytCheckInterval);
            initPlayer();
          }
        }, 100);
      }
    };

    loadApiAndInit();

    // High-precision loop watchdog (100ms): seamless loop without black screen
    pollInterval = setInterval(() => {
      const player = playerRef.current;
      if (!player) return;

      try {
        if (typeof player.getCurrentTime === 'function') {
          const cur = player.getCurrentTime();

          if (cur > 0.05) {
            setIsVideoPlaying(prev => (prev ? prev : true));
          }

          // Seek back to 0.00 right before end (0.35s) to avoid YouTube end-screen buffer
          if (!hasSoundRef.current && typeof player.getDuration === 'function') {
            const dur = player.getDuration();
            if (dur > 0 && cur >= dur - 0.35) {
              player.seekTo(0, true);
            }
          }
        }

        if (!hasSoundRef.current && typeof player.getPlayerState === 'function') {
          const st = player.getPlayerState();
          if (st === 0 || st === 2) {
            player.seekTo(0, true);
            player.playVideo();
          }
        }
      } catch (e) {}
    }, 100);

    return () => {
      isMounted = false;
      if (ytCheckInterval) clearInterval(ytCheckInterval);
      if (pollInterval) clearInterval(pollInterval);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
    };
  }, [videoId]);

  // Main VTurb interaction handler
  const handlePlayerClick = () => {
    const player = playerRef.current;

    if (!hasSound) {
      // First click: activate sound & restart from 0:00
      setHasSound(true);
      setIsPlaying(true);
      setIsVideoPlaying(true);

      if (player) {
        try {
          player.unMute();
          player.setVolume(100);
          player.seekTo(0, true);
          player.playVideo();
        } catch (e) {}
      }
    } else {
      // Subsequent clicks: toggle play / pause
      if (isPlaying) {
        setIsPlaying(false);
        if (player) {
          try {
            player.pauseVideo();
          } catch (e) {}
        }
      } else {
        setIsPlaying(true);
        if (player) {
          try {
            player.playVideo();
          } catch (e) {}
        }
      }
    }
  };

  const showCentralPlay = !hasSound || !isPlaying;

  return (
    <div className="relative mx-auto max-w-[320px] sm:max-w-[340px] md:max-w-[360px] w-full rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-white/90 shadow-2xl shadow-rose-950/15 border border-black/[0.08] transition-all">
      {/* Video Container in Stories format (aspect-[9/16]) */}
      <div className="relative w-full aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c1917] to-[#0c0a09] shadow-inner">
        
        {/* Style injection to scale and center the generated YouTube iframe */}
        <style dangerouslySetInnerHTML={{
          __html: `
            #vturb-player-wrapper iframe {
              position: absolute !important;
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              width: 365% !important;
              height: 118% !important;
              max-width: none !important;
              pointer-events: none !important;
              user-select: none !important;
              border: none !important;
            }
          `
        }} />

        {/* YouTube IFrame Mount Slot */}
        <div
          id="vturb-player-wrapper"
          ref={containerRef}
          className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
        />

        {/* Instant High-Resolution Local Poster: LCP element with explicit dimensions */}
        <div
          className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 ${
            isVideoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            src="/video-poster-stories.jpg"
            alt="Demonstração do Pack Manu Stories"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={360}
            height={640}
          />
        </div>

        {/* Paused Dark Backdrop: completely conceals YouTube's internal canvas when user pauses */}
        {hasSound && !isPlaying && (
          <div className="absolute inset-0 z-20 bg-black/85 backdrop-blur-sm pointer-events-none transition-opacity duration-300" />
        )}

        {/* Custom VTurb Click Layer - intercepts 100% of user clicks */}
        <div
          onClick={handlePlayerClick}
          className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center select-none"
          role="button"
          tabIndex={0}
          aria-label="Iniciar ou pausar vídeo"
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              handlePlayerClick();
            }
          }}
        >
          {/* Central Button: ONLY the play symbol/emoji, without any text */}
          {showCentralPlay && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-600 to-pink-600 text-white flex items-center justify-center shadow-2xl shadow-rose-600/60 hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-white/40 backdrop-blur-xs animate-pulse">
              <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white translate-x-0.5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
