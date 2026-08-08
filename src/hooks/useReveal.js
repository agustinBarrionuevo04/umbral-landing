import { useEffect, useRef } from 'react';

let sharedObserver = null;

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            sharedObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
  }
  return sharedObserver;
}

// Fades an element in once it scrolls into view. Reuses a single
// IntersectionObserver across every caller, matching the perf
// characteristics of the original vanilla-JS scroll-reveal script.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = getSharedObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}
