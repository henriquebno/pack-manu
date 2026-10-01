// Environment safeguard: ensure window.fetch can be safely wrapped by third-party analytics
(function() {
  try {
    if (typeof window !== 'undefined') {
      let activeFetch = window.fetch ? window.fetch.bind(window) : undefined;
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get: () => activeFetch,
        set: (fn) => { activeFetch = fn; }
      });
    }
  } catch {
    // Ignore if non-configurable
  }
})();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
