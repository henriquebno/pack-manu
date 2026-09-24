import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2, X } from 'lucide-react';

interface NotificationData {
  count: number;
  location?: string;
  timeAgo: string;
}

const NOTIFICATION_LIST: NotificationData[] = [
  { count: 1, location: 'São Paulo, SP', timeAgo: 'há 2 minutos' },
  { count: 1, location: 'Rio de Janeiro, RJ', timeAgo: 'agora pouco' },
  { count: 2, location: 'Belo Horizonte, MG', timeAgo: 'há 4 minutos' },
  { count: 1, location: 'Curitiba, PR', timeAgo: 'agora pouco' },
  { count: 1, location: 'Florianópolis, SC', timeAgo: 'há 1 minuto' },
  { count: 2, location: 'Brasília, DF', timeAgo: 'agora pouco' },
  { count: 1, location: 'Campinas, SP', timeAgo: 'há 3 minutos' },
  { count: 1, location: 'Porto Alegre, RS', timeAgo: 'agora pouco' },
  { count: 2, location: 'Salvador, BA', timeAgo: 'há 5 minutos' },
  { count: 1, location: 'Goiânia, GO', timeAgo: 'agora pouco' },
  { count: 1, location: 'Recife, PE', timeAgo: 'há 2 minutos' },
  { count: 1, location: 'Vitória, ES', timeAgo: 'agora pouco' },
  { count: 1, location: 'Santos, SP', timeAgo: 'há 1 minuto' },
  { count: 2, location: 'Fortaleza, CE', timeAgo: 'agora pouco' },
];

export const SalesNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    let displayTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let initialTimeout: NodeJS.Timeout;

    // Helper: shows notification for 4.5s, then hides it and waits 15 seconds between notifications
    const triggerCycle = () => {
      setIsVisible(true);

      // Notification stays on screen for 4.5s
      displayTimeout = setTimeout(() => {
        setIsVisible(false);

        // Wait 15 seconds between notifications before showing the next one
        pauseTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % NOTIFICATION_LIST.length);
          triggerCycle();
        }, 15000);
      }, 4500);
    };

    // First notification appears after 6 seconds on page
    initialTimeout = setTimeout(() => {
      triggerCycle();
    }, 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(displayTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = NOTIFICATION_LIST[currentIndex];
  // Ensure count is never above 10 and at least 1
  const safeCount = Math.min(10, Math.max(1, current.count));
  const isSingular = safeCount === 1;

  return (
    <div
      id="sales-notification-toast"
      aria-live="polite"
      className={`fixed z-40 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      } bottom-16 sm:bottom-6 left-3 sm:left-6 max-w-[260px] sm:max-w-[280px]`}
    >
      <div className="relative bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-xl shadow-lg p-2 sm:p-2.5 flex items-center gap-2.5 text-left">
        {/* Close Button */}
        <button
          id="close-sales-notification-btn"
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="Fechar notificação"
          className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-neutral-600 p-0.5 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Icon / Bag Badge */}
        <div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs">
          <ShoppingBag className="w-3.5 h-3.5" />
        </div>

        {/* Notification Text */}
        <div className="pr-3 flex-1 min-w-0">
          <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold leading-tight font-sans-body truncate">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="truncate">Compra verificada</span>
            {current.location && (
              <>
                <span className="text-neutral-300">•</span>
                <span className="text-neutral-500 font-normal truncate">{current.location}</span>
              </>
            )}
          </div>

          <p className="text-[11px] text-[#1D1D1F] font-sans-body mt-0.5 leading-snug truncate">
            <strong className="font-bold text-rose-600">
              {safeCount} {isSingular ? 'pessoa comprou' : 'pessoas compraram'}
            </strong>{' '}
            o <span className="font-medium">Pack</span> agora.
          </p>

          <p className="text-[9px] text-neutral-400 font-sans-body mt-0.5">
            {current.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};
