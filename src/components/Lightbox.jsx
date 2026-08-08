import { useLightbox } from '../context/LightboxContext';

export default function Lightbox() {
  const { isOpen, src, alt, close } = useLightbox();

  return (
    <div
      className={`lightbox${isOpen ? ' open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button className="lightbox-close" onClick={close}>
        Cerrar ✕
      </button>
      <img src={src} alt={alt} />
    </div>
  );
}
