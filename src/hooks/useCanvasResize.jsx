import { useState, useEffect, useRef } from "react";

export function useCanvasResize() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(window.innerWidth, 0);
      const height = Math.max(window.innerHeight, 0);

      // set logical pixel size for drawing buffer
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      // set CSS size so it covers the viewport
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // ensure high-DPI drawing scale
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      setDimensions({ width, height });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return { canvasRef, ...dimensions };
}
