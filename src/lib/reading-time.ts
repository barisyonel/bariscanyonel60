function readingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function postReadingTime(parts: {
  directAnswer: string;
  highlights: string[];
  sections: { h: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { q: string; a: string }[];
}): number {
  const blob = [
    parts.directAnswer,
    ...parts.highlights,
    ...parts.sections.flatMap((s) => [s.h, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...parts.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return readingTimeMinutes(blob);
}
