import { useLightbox } from '../context/LightboxContext';

export default function BrowserFrame({ src, alt, label }) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      className="browser-frame"
      aria-label={`Ampliar captura: ${label}`}
      onClick={() => open(src, alt)}
    >
      <span className="chrome">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );
}
