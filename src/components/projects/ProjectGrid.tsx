"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { easeOut } from "@/lib/motion";

export function ProjectGrid() {
  const reduce = useReducedMotion();
  const sectors = useMemo(
    () => ["Tümü", ...Array.from(new Set(projects.map((p) => p.sector)))],
    []
  );
  const [active, setActive] = useState("Tümü");
  const list = active === "Tümü" ? projects : projects.filter((p) => p.sector === active);

  return (
    <div>
      <LayoutGroup>
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Sektöre göre filtrele">
          {sectors.map((s) => {
            const selected = active === s;
            return (
              <button
                key={s}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(s)}
                className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  selected
                    ? "border-accent text-accent"
                    : "border-line text-muted hover:border-accent/50 hover:text-ink"
                }`}
              >
                {selected && !reduce && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {selected && reduce && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-accent-soft" />
                )}
                {s}
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, delay: reduce ? 0 : i * 0.04, ease: easeOut }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
