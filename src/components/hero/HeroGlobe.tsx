"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useReducedMotion } from "framer-motion";

type HeroGlobeProps = {
  className?: string;
};

const MOBILE_MQ = "(max-width: 767px)";

/**
 * Premium noktalı dünya — masaüstünde sağ odak, mobilde arka plan.
 * Görünür olunca WebGL yükler; mobilde daha hafif örnekleme.
 */
export function HeroGlobe({ className = "" }: HeroGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const pointerRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const phiRef = useRef(2.55);
  const thetaRef = useRef(0.22);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { rootMargin: "80px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf = 0;
    const mobile = window.matchMedia(MOBILE_MQ).matches;
    let width = Math.max(canvas.offsetWidth, mobile ? 280 : 400);
    const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
    const mapSamples = mobile ? 12_000 : 28_000;
    const spin = mobile ? 0.0012 : 0.0018;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 1,
      diffuse: mobile ? 1.15 : 1.35,
      mapSamples,
      mapBrightness: mobile ? 5.6 : 6.4,
      mapBaseBrightness: 0.04,
      baseColor: [0.05, 0.1, 0.18],
      markerColor: [0.13, 0.68, 0.86],
      glowColor: [0.08, 0.2, 0.36],
      markers: [],
      arcs: [],
      scale: mobile ? 1.02 : 1.08,
      opacity: mobile ? 0.72 : 0.92,
    });

    const tick = () => {
      if (!reduce && !pointerRef.current.dragging) {
        phiRef.current += spin;
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
      width = Math.max(canvas.offsetWidth, mobile ? 280 : 400);
      globe.update({ width: width * dpr, height: width * dpr });
    };

    const onPointerDown = (e: PointerEvent) => {
      if (mobile) return;
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
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Okunabilirlik: mobilde daha güçlü karartma */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_18%,rgba(5,12,24,0.45)_52%,rgba(5,12,24,0.92)_100%)] md:bg-[radial-gradient(ellipse_at_75%_50%,transparent_22%,rgba(5,12,24,0.28)_58%,rgba(5,12,24,0.82)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-b from-base/90 via-base/55 to-base/80 md:w-[38%] md:bg-gradient-to-r md:from-base md:via-base/55 md:to-transparent" />

      <div
        className={
          isMobile
            ? "absolute left-1/2 top-[42%] w-[min(140vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-55"
            : "absolute right-[-12%] top-1/2 w-[min(92vw,880px)] -translate-y-1/2 opacity-100 lg:right-[-8%] lg:w-[min(62vw,920px)]"
        }
      >
        <div className="relative aspect-square w-full">
          <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.18),transparent_64%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-[20%] rounded-full border border-accent/8" />
          <div className="pointer-events-none absolute inset-[12%] rounded-full border border-white/4" />

          {active ? (
            <canvas
              ref={canvasRef}
              className={`relative z-1 h-full w-full touch-none ${
                isMobile ? "pointer-events-none" : "pointer-events-auto cursor-grab active:cursor-grabbing"
              }`}
              style={{ contain: "layout paint size", width: "100%", height: "100%" }}
            />
          ) : (
            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.1),transparent_70%)]" />
          )}
        </div>
      </div>
    </div>
  );
}
