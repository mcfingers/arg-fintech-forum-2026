import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * MouseFollower
 * Elemento que persigue al mouse con lag + offset dinámico (Opción 2).
 *
 * Props:
 *  - smoothing: qué tan rápido "alcanza" al mouse (0.02 lento, 0.3 rápido)
 *  - extraOffset: distancia extra que se mantiene alejado, en px
 *  - trailCount: cantidad de elementos "cola" encadenados detrás del principal
 */
export default function MouseFollower({
  smoothing = 0.08,
  extraOffset = 0,
  trailCount = 2,
}) {
  const followerRef = useRef(null);
  const trailRefs = useRef([]);
  const cursorDotRef = useRef(null);

  // posición del mouse en "tiempo real" (no dispara re-render)
  const mouse = useRef({ x: 0, y: 0 });
  // posición interpolada del elemento principal
  const pos = useRef({ x: 0, y: 0 });
  // posiciones interpoladas de cada elemento de la cola
  const trailPos = useRef([]);

  useEffect(() => {
    // inicializamos posiciones en el centro de la ventana
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    mouse.current = { x: initX, y: initY };
    pos.current = { x: initX, y: initY };
    trailPos.current = Array.from({ length: trailCount }, () => ({
      x: initX,
      y: initY,
    }));

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (cursorDotRef.current) {
        gsap.set(cursorDotRef.current, { x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const ticker = () => {
      const { x: mx, y: my } = mouse.current;

      // distancia entre posición actual del follower y el mouse
      const dx = mx - pos.current.x;
      const dy = my - pos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      // vector normalizado: dirección desde el follower hacia el mouse
      const nx = dx / dist;
      const ny = dy / dist;

      // avanza una fracción de la distancia (esto genera el lag)
      pos.current.x += dx * smoothing;
      pos.current.y += dy * smoothing;

      if (followerRef.current) {
        gsap.set(followerRef.current, {
          x: pos.current.x - nx * extraOffset,
          y: pos.current.y - ny * extraOffset,
          scale: gsap.utils.clamp(0.8, 1.3, 0.9 + dist * 0.003),
        });
      }

      // cada elemento de la cola persigue al anterior
      let prev = pos.current;
      trailPos.current.forEach((tp, i) => {
        tp.x += (prev.x - tp.x) * smoothing;
        tp.y += (prev.y - tp.y) * smoothing;
        const el = trailRefs.current[i];
        if (el) gsap.set(el, { x: tp.x, y: tp.y });
        prev = tp;
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, [smoothing, extraOffset, trailCount]);

  return (
    <>
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 50,
          transform: "translate(-50%, -50%)",
        }}
      />

      {Array.from({ length: trailCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            borderRadius: "50%",
            background: "rgba(150,150,255,0.35)",
            pointerEvents: "none",
            zIndex: 40,
          }}
        />
      ))}

      <div
        ref={followerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #7f7fff, #4b3fd4)",
          boxShadow: "0 0 30px rgba(120,120,255,0.5)",
          pointerEvents: "none",
          zIndex: 45,
        }}
      />
    </>
  );
}

/**
 * Ejemplo de uso con controles, similar a la demo HTML anterior.
 */
export function MouseFollowerDemo() {
  const [smoothing, setSmoothing] = useState(0.08);
  const [extraOffset, setExtraOffset] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#0f0f14",
        color: "#eee",
        fontFamily: "system-ui, sans-serif",
        cursor: "crosshair",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 100,
          maxWidth: 320,
        }}
      >
        <h1 style={{ fontSize: 18, margin: "0 0 8px" }}>
          Follower con offset dinámico
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            background: "rgba(255,255,255,0.05)",
            padding: 14,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <label style={{ fontSize: 12 }}>
            Suavizado: {smoothing}
            <input
              type="range"
              min="0.02"
              max="0.3"
              step="0.01"
              value={smoothing}
              onChange={(e) => setSmoothing(parseFloat(e.target.value))}
              style={{ width: "100%" }}
            />
          </label>
          <label style={{ fontSize: 12 }}>
            Distancia extra: {extraOffset}
            <input
              type="range"
              min="0"
              max="150"
              step="5"
              value={extraOffset}
              onChange={(e) => setExtraOffset(parseFloat(e.target.value))}
              style={{ width: "100%" }}
            />
          </label>
        </div>
      </div>

      <MouseFollower
        smoothing={smoothing}
        extraOffset={extraOffset}
        trailCount={2}
      />
    </div>
  );
}
