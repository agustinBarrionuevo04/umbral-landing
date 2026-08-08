import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const open = useCallback((nextSrc, nextAlt) => {
    setSrc(nextSrc);
    setAlt(nextAlt);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close]);

  const value = useMemo(() => ({ isOpen, src, alt, open, close }), [isOpen, src, alt, open, close]);

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within a LightboxProvider');
  return ctx;
}
