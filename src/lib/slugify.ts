export function slugifyHeading(text: string): string {
  return text
    .toLocaleLowerCase("tr")
    .replace(/[^a-z0-9ğüşıöç\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
}
