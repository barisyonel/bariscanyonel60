"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type DeviceMockupProps = {
  image?: string;
  alt?: string;
  tone?: string;
  className?: string;
  children?: ReactNode;
};

/** Premium laptop frame — project/hero mockups */
export function LaptopMockup({
  image,
  alt = "Laptop önizleme",
  tone = "#219acb",
  className = "",
  children,
}: DeviceMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-t-[10px] border border-line bg-[#0d1829] p-1.5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75)] sm:rounded-t-[12px] sm:p-2">
        <div className="mb-1.5 flex items-center gap-1.5 px-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2a4568]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#2a4568]" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          <span className="ml-2 h-3 flex-1 rounded-sm bg-subtle/80" />
        </div>
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-elevated"
          style={
            image
              ? undefined
              : { background: `linear-gradient(145deg, ${tone}22, transparent 55%)` }
          }
        >
          {image ? (
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 480px"
            />
          ) : (
            children ?? (
              <div className="absolute inset-4 space-y-2">
                <div className="h-2 w-1/3 rounded-sm" style={{ background: tone }} />
                <div className="h-1.5 w-2/3 rounded-sm bg-line" />
                <div className="h-1.5 w-1/2 rounded-sm bg-line" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-8 rounded-sm bg-subtle" />
                  <div className="h-8 rounded-sm bg-subtle" />
                  <div className="h-8 rounded-sm bg-subtle" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="relative mx-auto h-2 w-[102%] -translate-x-[1%] rounded-b-[6px] bg-[#152338] sm:h-2.5">
        <div className="absolute inset-x-[18%] top-0 h-px bg-line/60" />
      </div>
      <div className="mx-auto h-1 w-[38%] rounded-b-sm bg-[#0a1220]" />
    </div>
  );
}

/** Premium phone frame */
export function PhoneMockup({
  image,
  alt = "Telefon önizleme",
  tone = "#219acb",
  className = "",
  children,
}: DeviceMockupProps) {
  return (
    <div
      className={`relative w-[5.5rem] overflow-hidden rounded-[1.1rem] border border-line bg-[#0d1829] p-1 shadow-[0_20px_40px_-18px_rgba(0,0,0,0.7)] sm:w-28 sm:rounded-[1.35rem] sm:p-1.5 ${className}`}
    >
      <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-[#1a2d48] sm:mb-1.5 sm:h-1.5 sm:w-10" />
      <div
        className="relative aspect-[9/16] overflow-hidden rounded-[0.7rem] bg-elevated"
        style={
          image
            ? undefined
            : { background: `linear-gradient(160deg, ${tone}28, transparent 60%)` }
        }
      >
        {image ? (
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="120px"
          />
        ) : (
          children ?? (
            <div className="absolute inset-2 space-y-1.5">
              <div className="h-1.5 w-2/5 rounded-sm" style={{ background: tone }} />
              <div className="h-1 w-4/5 rounded-sm bg-line" />
              <div className="h-1 w-3/5 rounded-sm bg-line" />
              <div className="mt-2 space-y-1">
                <div className="h-6 rounded-sm bg-subtle" />
                <div className="h-6 rounded-sm bg-subtle" />
              </div>
            </div>
          )
        )}
      </div>
      <div className="mx-auto mt-1 h-0.5 w-6 rounded-full bg-[#1a2d48] sm:mt-1.5 sm:h-1 sm:w-8" />
    </div>
  );
}
