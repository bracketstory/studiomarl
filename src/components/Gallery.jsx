import { useState, useEffect, useRef, useCallback } from 'react';
import Figure from './Figure';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(() => window.location.hash === '#gallery');
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const startXRef = useRef(null);
  const suppressClickRef = useRef(false);
  const openerRef = useRef(null);
  const imageCloseRef = useRef(null);
  const zoomOpenerRef = useRef(null);

  const slides = [
    {
      art: 'arch',
      alt: 'Plaster arches with raking light',
      title: 'Casa Almendra',
      meta: 'Lisbon · Residence · 2025',
      description:
        'Late-afternoon light travels across the warm plaster arches, revealing their depth and soft, hand-finished texture.',
    },
    {
      art: 'slat',
      alt: 'Timber slats casting banded shadows',
      title: 'Hall Nine',
      meta: 'Mumbai · Hospitality · 2024',
      description:
        'Filtered daylight slips through the timber screen, laying shifting bands of shadow across a calm, tactile interior.',
    },
    {
      art: 'stone',
      alt: 'Banded travertine and laterite',
      title: 'The Quarry House',
      meta: 'Goa · Residence · 2023',
      description:
        'Soft side light draws out the natural bands and quiet color variations in the stone surfaces.',
    },
    {
      art: 'oculus',
      alt: 'Concrete room with a circular rooflight',
      title: 'Oculus',
      meta: 'Bengaluru · Workspace · 2022',
      description:
        'A shaft of daylight enters from above, tracing a bright circle against the muted concrete room.',
    },
    {
      art: 'still',
      alt: 'Ceramic vessels on a stone plinth',
      title: 'Ceramic Room',
      meta: 'Copenhagen · Gallery · 2021',
      description:
        'Gentle, directional light picks out the glazed curves of each vessel and the grain of the stone plinth.',
    },
    {
      art: 'curve',
      alt: 'Curved plaster stair wall',
      title: 'Stair study',
      meta: 'Lisbon · Detail · 2025',
      description:
        'Afternoon light follows the curve of the plaster wall, turning a simple passage into a study of shadow and form.',
    },
  ];

  const n = slides.length;

  const open = useCallback(() => {
    openerRef.current = document.activeElement;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsImageOpen(false);
    setIsOpen(false);
    setTimeout(() => {
      if (openerRef.current && openerRef.current.focus) {
        openerRef.current.focus();
      }
    }, 400);
  }, []);

  const closeImage = useCallback(() => {
    setIsImageOpen(false);
    window.setTimeout(() => zoomOpenerRef.current?.focus(), 0);
  }, []);

  const go = (index) => {
    setCurrentSlide((index + n) % n);
  };

  const handlePrev = () => go(currentSlide - 1);
  const handleNext = () => go(currentSlide + 1);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePointerDown = (e) => {
    startXRef.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startXRef.current !== null) {
      const diff = e.clientX - startXRef.current;
      if (Math.abs(diff) > 45) {
        go(currentSlide + (diff < 0 ? 1 : -1));
        suppressClickRef.current = true;
        window.setTimeout(() => {
          suppressClickRef.current = false;
        }, 0);
      }
      startXRef.current = null;
    }
  };

  const handlePointerCancel = () => {
    startXRef.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape' && isImageOpen) {
        e.stopPropagation();
        closeImage();
      } else if (e.key === 'Escape') {
        close();
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((current) => (current + 1) % n);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((current) => (current - 1 + n) % n);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isImageOpen, close, closeImage, n]);

  useEffect(() => {
    if (isImageOpen) imageCloseRef.current?.focus();
  }, [isImageOpen]);

  useEffect(() => {
    const handleGalleryClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href') === '#gallery') {
        e.preventDefault();
        open();
      }
    };

    document.addEventListener('click', handleGalleryClick);

    return () => {
      document.removeEventListener('click', handleGalleryClick);
    };
  }, [open]);

  const getSlideStyle = (index) => {
    let offset = index - currentSlide;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;

    const absOffset = Math.abs(offset);
    const sign = Math.sign(offset);
    const scales = [1, 0.82, 0.66];
    const scale = scales[absOffset] || 0.5;
    const positions = [0, 0.3, 0.5];
    const xPos = (positions[absOffset] !== undefined ? positions[absOffset] : 0.6) * 100 * sign;

    return {
      transform: `translate(-50%, -50%) translateX(${xPos}%) scale(${scale})`,
      zIndex: 10 - absOffset,
      opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.92 : absOffset === 2 ? 0.6 : 0,
      pointerEvents: absOffset > 2 ? 'none' : 'auto',
      filter: absOffset ? 'saturate(.85)' : 'none',
    };
  };

  return (
    <section
      className={`gal ${isOpen ? 'show' : ''}`}
      id="gallery"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gal-h"
      hidden={!isOpen}
    >
      <div className="wrap gal-top" style={{ width: '100%' }}>
        <span className="mark">
          Studio Marl<i>.</i>
        </span>
        <button className="gal-x meta" onClick={close}>
          Close
        </button>
      </div>
      <div className="gal-main">
        <h2 id="gal-h">Gallery</h2>
        <p className="gal-sub">
          Swipe, drag or use the arrow keys to browse. Sample imagery from Unsplash; replace with your
          project photographs.
        </p>
        <div
          className="stage"
          role="group"
          aria-roledescription="carousel"
          aria-label="Project gallery"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {slides.map((slide, index) => (
            <Figure
              key={index}
              className="fig slide"
              art={slide.art}
              alt={slide.alt}
              style={getSlideStyle(index)}
              onClick={() => {
                if (suppressClickRef.current) {
                  suppressClickRef.current = false;
                  return;
                }
                zoomOpenerRef.current = document.activeElement;
                go(index);
                setIsImageOpen(true);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  zoomOpenerRef.current = event.currentTarget;
                  go(index);
                  setIsImageOpen(true);
                }
              }}
              tabIndex={Math.abs(index - currentSlide) > 2 ? -1 : 0}
              aria-current={index === currentSlide ? 'true' : undefined}
              aria-hidden={Math.abs(index - currentSlide) > 2}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${n}: ${slide.title}`}
            >
            </Figure>
          ))}
        </div>
        <div className="cap-g" aria-live="polite">
          <h3>{slides[currentSlide].title}</h3>
          <p className="meta" style={{ margin: 0 }}>
            {slides[currentSlide].meta}
          </p>
          <p className="description">{slides[currentSlide].description}</p>
        </div>
        <div className="ctrl">
          <button className="prev" onClick={handlePrev} aria-label="Previous image">
            <svg viewBox="0 0 24 24">
              <path d="M20 12H4M10 6l-6 6 6 6" />
            </svg>
          </button>
          <div className="dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => go(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : undefined}
              />
            ))}
          </div>
          <button className="next" onClick={handleNext} aria-label="Next image">
            <svg viewBox="0 0 24 24">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      {isImageOpen && (
        <div
          className="image-viewer"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeImage();
          }}
        >
          <div
            className="image-viewer-panel"
            role="group"
            aria-label={`Enlarged image: ${slides[currentSlide].title}`}
          >
            <button
              ref={imageCloseRef}
              className="image-viewer-close meta"
              type="button"
              onClick={closeImage}
              aria-label="Close enlarged image"
            >
              Close
            </button>
            <Figure
              className="fig image-viewer-figure"
              art={slides[currentSlide].art}
              alt={slides[currentSlide].alt}
              fit="contain"
            />
            <div className="image-viewer-caption">
              <h3>{slides[currentSlide].title}</h3>
              <p className="meta">{slides[currentSlide].meta}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
