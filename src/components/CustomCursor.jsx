import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    const handlePointerMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const element = e.target instanceof Element ? e.target : null;
      const target = element?.closest(
        'a,button,input,select,textarea,[role="button"],[tabindex]:not([tabindex="-1"])'
      );
      setIsHovering(Boolean(target));
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setIsHovering(false);
    };

    const handlePointerEnter = () => {
      setVisible(true);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('pointerenter', handlePointerEnter);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('pointerenter', handlePointerEnter);
    };
  }, []);

  if (!window.matchMedia('(pointer:fine)').matches) return null;

  return (
    <div
      className={`custom-cursor ${visible ? 'visible' : ''} ${isHovering ? 'is-hovering' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
