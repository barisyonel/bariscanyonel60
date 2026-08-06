"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useReducedMotion } from "framer-motion";

type HeroGlobeProps = {
  className?: string;
};

/**
 * Premium noktalı dünya — marker / yay yok; sade harita.
 * Masaüstü / tablet; görünür olunca WebGL yükler.
 */
export function HeroGlobe({ className = "" }: HeroGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const pointerRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const phiRef = useRef(2.55);
  const thetaRef = useRef(0.22);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { rootMargin: "120px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf = 0;
    let width = Math.max(canvas.offsetWidth, 400);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 1,
      diffuse: 1.35,
      mapSamples: 28_000,
      mapBrightness: 6.4,
      mapBaseBrightness: 0.04,
      baseColor: [0.05, 0.1, 0.18],
      markerColor: [0.13, 0.68, 0.86],
      glowColor: [0.08, 0.2, 0.36],
      markers: [],
      arcs: [],
      scale: 1.08,
      opacity: 0.92,
    });

    const tick = () => {
      if (!reduce && !pointerRef.current.dragging) {
        phiRef.current += 0.0018;
      }
      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
        width: width * dpr,
        height: width * dpr,
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      width = Math.max(canvas.offsetWidth, 400);
      globe.update({ width: width * dpr, height: width * dpr });
    };

    const onPointerDown = (e: PointerEvent) => {
      pointerRef.current.dragging = true;
      pointerRef.current.lastX = e.clientX;
      pointerRef.current.lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!pointerRef.current.dragging) return;
      const dx = e.clientX - pointerRef.current.lastX;
      const dy = e.clientY - pointerRef.current.lastY;
      pointerRef.current.lastX = e.clientX;
      pointerRef.current.lastY = e.clientY;
      phiRef.current += dx * 0.0045;
      thetaRef.current = Math.max(-0.55, Math.min(0.65, thetaRef.current + dy * 0.0025));
    };
    const onPointerUp = (e: PointerEvent) => {
      pointerRef.current.dragging = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, [active, reduce]);

  return (
    <div
      ref={rootRef}
      className={`pointer-events-none absolute inset-0 hidden overflow-hidden md:block ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,transparent_22%,rgba(5,12,24,0.28)_58%,rgba(5,12,24,0.82)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-base via-base/55 to-transparent" />

      <div className="absolute right-[-12%] top-1/2 w-[min(92vw,880px)] -translate-y-1/2 lg:right-[-8%] lg:w-[min(62vw,920px)]">
        <div className="relative aspect-square w-full">
          <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.2),transparent_64%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-[20%] rounded-full border border-accent/[0.08]" />
          <div className="pointer-events-none absolute inset-[12%] rounded-full border border-white/[0.035]" />

          {active ? (
            <canvas
              ref={canvasRef}
              className="pointer-events-auto relative z-[1] h-full w-full cursor-grab touch-none active:cursor-grabbing"
              style={{ contain: "layout paint size", width: "100%", height: "100%" }}
            />
          ) : (
            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.08),transparent_70%)]" />
          )}
        </div>
      </div>
    </div>
  );
}
