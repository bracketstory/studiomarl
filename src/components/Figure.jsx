import { PHOTOS, ART, getViewBox } from '../utils/imageData';

const Figure = ({
  as = 'figure',
  className = '',
  art,
  alt,
  arrow = false,
  fit = 'cover',
  ...figureProps
}) => {
  const url = PHOTOS[art];
  const svgContent = ART[art];
  const viewBox = getViewBox(art);
  const FigureElement = as;

  return (
    <FigureElement className={className} {...figureProps}>
      {url ? (
        <img
          src={url}
          alt={alt}
          loading="lazy"
          className={fit === 'contain' ? 'fit-contain' : undefined}
        />
      ) : (
        <>
          <svg
            viewBox={viewBox}
            preserveAspectRatio={fit === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'}
            role="img"
            aria-label={alt}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
          <span className="grain" aria-hidden="true"></span>
        </>
      )}
      {arrow && (
        <span className="arrow">
          <svg viewBox="0 0 24 10" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M0 5h22M18 1l4 4-4 4" />
          </svg>
        </span>
      )}
    </FigureElement>
  );
};

export default Figure;
