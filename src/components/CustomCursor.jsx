import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'drag', 'text'
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktop mice/trackpads)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let reqId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check hovered element
      const target = e.target;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [data-interactive="true"]');
      const isDragZone = target.closest('[data-dragzone="true"]');

      if (isDragZone) {
        setCursorType('drag');
      } else if (interactive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      reqId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    reqId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (reqId) cancelAnimationFrame(reqId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Dynamic trailing ring */}
      <div
        className={`custom-cursor-ring ${cursorType}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorType === 'drag' && (
          <span className="cursor-drag-label">DRAG</span>
        )}
      </div>
    </>
  );
}
