import { useEffect } from 'react';

const MAX_OFFSET = 90; // px the dot may drift from its resting point
const STIFFNESS = 0.08; // lower = softer spring

// Decorative spring-follow of the cursor (Y axis only, clamped) for the
// hero's threshold dot. Disabled on touch devices and when the user
// prefers reduced motion — this is pure decoration, never information
// the user needs to read. Writes directly to the DOM (CSS var) instead
// of React state so the 60fps loop never triggers a re-render.
export default function useThresholdDot(heroRef, lineRef) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (prefersReducedMotion || !hasFinePointer) return undefined;

    const hero = heroRef.current;
    const line = lineRef.current;
    if (!hero || !line) return undefined;

    let targetY = 0;
    let currentY = 0;
    let rafId;

    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const relativeY = e.clientY - rect.top; // px from top of hero
      const heroMid = rect.height * 0.38; // matches CSS `top: 38%` resting point
      targetY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, (relativeY - heroMid) * 0.25));
    };
    const onMouseLeave = () => {
      targetY = 0;
    };

    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);

    function tick() {
      currentY += (targetY - currentY) * STIFFNESS;
      line.style.setProperty('--dot-y', `${currentY.toFixed(2)}px`);
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [heroRef, lineRef]);
}
