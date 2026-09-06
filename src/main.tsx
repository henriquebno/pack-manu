// Ensure fetch is safely assignable in environments where Window.prototype.fetch only provides a getter
try {
  const win = typeof window !== 'undefined' ? window : globalThis;
  const curFetch = win.fetch ? win.fetch.bind(win) : null;
  let activeFetch = curFetch;
  const descriptor = {
    get: () => activeFetch,
    set: (newFetch: typeof fetch) => {
      activeFetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  };
  try {
    Object.defineProperty(win, 'fetch', descriptor);
  } catch {}
  try {
    if (typeof Window !== 'undefined' && Window.prototype) {
      Object.defineProperty(Window.prototype, 'fetch', descriptor);
    }
  } catch {}
} catch {}

// Prevent "Converting circular structure to JSON" from tracking scripts logging DOM elements with React Fibers
try {
  const origStringify = JSON.stringify;
  JSON.stringify = function (value: any, replacer?: any, space?: any) {
    const seen = new WeakSet();
    function circularReplacer(this: any, key: string, val: any) {
      if (typeof val === 'object' && val !== null) {
        if (typeof Node !== 'undefined' && val instanceof Node) {
          return {
            nodeType: val.nodeType,
            tagName: (val as Element).tagName,
            id: (val as Element).id,
            className: (val as Element).className,
          };
        }
        if (typeof Window !== 'undefined' && val instanceof Window) {
          return '[Window]';
        }
        if (seen.has(val)) {
          return '[Circular]';
        }
        seen.add(val);
      }
      if (typeof replacer === 'function') {
        return replacer.call(this, key, val);
      }
      return val;
    }

    if (Array.isArray(replacer)) {
      return origStringify.call(this, value, replacer, space);
    }

    try {
      return origStringify.call(this, value, circularReplacer, space);
    } catch {
      return '"[Circular]"';
    }
  };
} catch {}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
