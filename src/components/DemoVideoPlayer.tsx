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
            onError?: (event: { data: number }) => void;
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

  // Synchronous state refs to prevent any asynchronous state race conditions
  const hasSoundRef = useRef<boolean>(false);
  const isPlayingRef = useRef<boolean>(true);
  const isUserPausedRef = useRef<boolean>(false);
  const isLoopSeekingRef = useRef<boolean>(false);
  const pendingPlayRef = useRef<boolean>(false);
  const isVideoPlayingRef = useRef<boolean>(false);
  const isInitializedRef = useRef<boolean>(false);

  // React states for UI rendering
  const [hasSound, setHasSound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let pollInterval: ReturnType<typeof setInterval> | null = null;
    let ytCheckInterval: ReturnType<typeof setInterval> | null = null;

    const createPlayer = () => {
      if (!isMounted || playerRef.current || !containerRef.current) return;
      if (!window.YT || !window.YT.Player) return;

      const container = containerRef.current;
      container.innerHTML = '<div id="vturb-yt-iframe-slot"></div>';
      const mountEl = document.getElementById('vturb-yt-iframe-slot');
      if (!mountEl) return;

      try {
        playerRef.current = new window.YT.Player(mountEl, {
          videoId,
          playerVars: {
            autoplay: 1,
            mute: hasSoundRef.current ? 0 : 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            iv_load_policy: 3,
            showinfo: 0,
            autohide: 1,
          },
          events: {
            onReady: (event) => {
              if (!isMounted) return;
              const player = event.target;
              try {
                if (pendingPlayRef.current || hasSoundRef.current) {
                  player.unMute();
                  player.setVolume(100);
                  player.seekTo(0, true);
                  player.playVideo();
                  setHasSound(true);
                  setIsPlaying(true);
                  hasSoundRef.current = true;
                  isPlayingRef.current = true;
                  isUserPausedRef.current = false;
                } else {
                  player.mute();
                  player.playVideo();
                }
              } catch (e) {}
            },
            onStateChange: (event) => {
              if (!isMounted) return;
              const state = event.data;

              // 1 = PLAYING
              if (state === 1) {
                if (!isVideoPlayingRef.current) {
                  isVideoPlayingRef.current = true;
                  setIsVideoPlaying(true);
                }
                setIsPlaying(true);
                isPlayingRef.current = true;
                isUserPausedRef.current = false;
                isLoopSeekingRef.current = false;
              }
              // 0 = ENDED -> Instant seamless replay
              else if (state === 0) {
                try {
                  event.target.seekTo(0, true);
                  event.target.playVideo();
                } catch (e) {}
                setIsPlaying(true);
                isPlayingRef.current = true;
                isLoopSeekingRef.current = false;
              }
              // 2 = PAUSED
              else if (state === 2) {
                if (isUserPausedRef.current) {
                  setIsPlaying(false);
                  isPlayingRef.current = false;
                } else {
                  try {
                    event.target.playVideo();
                  } catch (e) {}
                }
              }
            },
            onError: () => {
              if (playerRef.current) {
                try {
                  playerRef.current.playVideo();
                } catch (e) {}
              }
            },
          },
        });
      } catch (err) {}
    };

    const initApi = () => {
      if (window.YT && window.YT.Player) {
        createPlayer();
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
          createPlayer();
        };

        ytCheckInterval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            if (ytCheckInterval) clearInterval(ytCheckInterval);
            createPlayer();
          }
        }, 80);
      }
    };

    const triggerInit = () => {
      if (!isMounted || isInitializedRef.current) return;
      isInitializedRef.current = true;
      initApi();
      ['touchstart', 'scroll', 'click', 'keydown', 'mousemove'].forEach((evt) => {
        window.removeEventListener(evt, triggerInit);
      });
    };

    // Smart Facade: Defers YouTube's 1.8MB network payload until interaction or idle.
    // Unblocks FCP (<1s) and LCP (<1.5s) for instant mobile ad transitions (PageSpeed 95+)
    ['touchstart', 'scroll', 'click', 'keydown', 'mousemove'].forEach((evt) => {
      window.addEventListener(evt, triggerInit, { once: true, passive: true });
    });

    const idleTimer = setTimeout(triggerInit, 2500);

    // High-performance Watchdog: maintains seamless infinite loop and prevents multi-seek freezes
    pollInterval = setInterval(() => {
      const player = playerRef.current;
      if (!player) return;

      try {
        if (hasSoundRef.current) {
          if (typeof player.getPlayerState === 'function') {
            const state = player.getPlayerState();
            if (state === 0 && !isLoopSeekingRef.current) {
              isLoopSeekingRef.current = true;
              player.seekTo(0, true);
              player.playVideo();
              setTimeout(() => {
                isLoopSeekingRef.current = false;
              }, 800);
            }
          }
          return;
        }

        if (typeof player.getCurrentTime === 'function' && typeof player.getDuration === 'function') {
          const cur = player.getCurrentTime();
          const dur = player.getDuration();

          if (cur > 0.05 && !isVideoPlayingRef.current) {
            isVideoPlayingRef.current = true;
            setIsVideoPlaying(true);
          }

          if (dur > 0 && cur >= dur - 0.4) {
            if (!isLoopSeekingRef.current) {
              isLoopSeekingRef.current = true;
              player.seekTo(0, true);
              player.playVideo();
              setTimeout(() => {
                isLoopSeekingRef.current = false;
              }, 800);
            }
          } else if (cur < dur - 1.0) {
            isLoopSeekingRef.current = false;
          }
        }
      } catch (e) {}
    }, 120);

    return () => {
      isMounted = false;
      if (idleTimer) clearTimeout(idleTimer);
      ['touchstart', 'scroll', 'click', 'keydown', 'mousemove'].forEach((evt) => {
        window.removeEventListener(evt, triggerInit);
      });
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

  const handlePlayerClick = () => {
    // If user clicked before idle timer fired, initialize immediately
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      if (window.YT && window.YT.Player) {
        // will be handled by createPlayer
      } else {
        if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          tag.async = true;
          document.head.appendChild(tag);
        }
      }
    }

    const player = playerRef.current;

    if (!hasSoundRef.current) {
      hasSoundRef.current = true;
      isPlayingRef.current = true;
      isUserPausedRef.current = false;
      pendingPlayRef.current = true;
      isLoopSeekingRef.current = false;

      setHasSound(true);
      setIsPlaying(true);
      setIsVideoPlaying(true);

      if (player && typeof player.playVideo === 'function') {
        try {
          player.unMute();
          player.setVolume(100);
          player.seekTo(0, true);
          player.playVideo();
        } catch (e) {}
      }
    } else {
      if (isPlayingRef.current) {
        isPlayingRef.current = false;
        isUserPausedRef.current = true;
        setIsPlaying(false);
        if (player && typeof player.pauseVideo === 'function') {
          try {
            player.pauseVideo();
          } catch (e) {}
        }
      } else {
        isPlayingRef.current = true;
        isUserPausedRef.current = false;
        setIsPlaying(true);
        if (player && typeof player.playVideo === 'function') {
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
      <div className="relative w-full aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner">
        
        {/* Style injection:
            - width: 100% preserves 100% of the horizontal screen without any zoom or cropping (all folders and text visible)
            - top: -64px and height: calc(100% + 124px) pushes the YouTube title, avatar, and "Shorts" logo completely off-screen beyond the overflow-hidden boundary
        */}
        <style dangerouslySetInnerHTML={{
          __html: `
            #vturb-player-wrapper iframe {
              position: absolute !important;
              top: -64px !important;
              left: 0 !important;
              width: 100% !important;
              height: calc(100% + 124px) !important;
              transform: none !important;
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
          className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 ${
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

        {/* Custom VTurb Click Layer & Play Button:
            Completely conceals YouTube's internal pause icon (||) whenever video is paused or muted
        */}
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
          {showCentralPlay && (
            <div className="absolute inset-0 bg-black/45 backdrop-blur-xs flex items-center justify-center transition-opacity duration-150">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-600 to-pink-600 text-white flex items-center justify-center shadow-2xl shadow-rose-600/60 hover:scale-110 active:scale-95 transition-transform duration-150 border-2 border-white/40">
                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white translate-x-0.5" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
