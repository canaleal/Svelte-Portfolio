// src/helpers/storage.ts

import { INIT_STORAGE } from '$lib/config';

const storagePrefix = 'alex_portfolio_ui_svelte_';

const storage = {
  getToken: () => {
    if (typeof window === 'undefined') return INIT_STORAGE; // Handle server-side rendering
    return JSON.parse(localStorage.getItem(`${storagePrefix}_token`) || 'null') || INIT_STORAGE;
  },
  setToken: (token: any) => {
    if (typeof window === 'undefined') return; // Skip localStorage on server-side rendering
    localStorage.setItem(`${storagePrefix}_token`, JSON.stringify(token));
  },
  clearToken: () => {
    if (typeof window === 'undefined') return; // Skip localStorage on server-side rendering
    localStorage.removeItem(`${storagePrefix}_token`);
  },
};

export default storage;
