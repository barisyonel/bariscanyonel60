#!/usr/bin/env python3
"""Her blog yazısı için 1200x675 kapak üretir. Metin dosyalardaki başlıktan okunur."""

from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "blog"
SOURCES = [
    ROOT / "src/lib/posts.ts",
    ROOT / "src/lib/tokat-cluster-posts.ts",
    ROOT / "src/lib/posts-guides.ts",
]
FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
W, H = 1200, 675


def posts() -> list[tuple[str, str]]:
    found: list[tuple[str, str]] = []
    seen: set[str] = set()
    pattern = re.compile(r'slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"')
    for path in SOURCES:
        text = path.read_text(encoding="utf-8")
        for slug, title in pattern.findall(text):
            if slug in seen:
                continue
            seen.add(slug)
            found.append((slug, title))
    return found


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if draw.textlength(trial, font=font) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines[:5]


def motif(slug: str) -> str:
    rules = [
        ("eposta", "mail"),
        ("yorum", "star"),
        ("harita", "pin"),
        ("profil", "pin"),
        ("randevu", "cal"),
        ("qr", "qr"),
        ("menu", "qr"),
        ("nfc", "nfc"),
        ("e-ticaret", "bag"),
        ("urun", "bag"),
        ("ads", "ads"),
        ("reklam", "ads"),
        ("shorts", "play"),
        ("uygulama", "phone"),
        ("mobil", "phone"),
        ("yazilim", "nodes"),
        ("crm", "nodes"),
        ("erp", "nodes"),
        ("emlak", "home"),
        ("fiyat", "coin"),
        ("maliyet", "coin"),
        ("kac-tl", "coin"),
        ("sosyal", "dots"),
        ("seo", "bars"),
        ("google", "bars"),
        ("spam", "bars"),
        ("yenile", "refresh"),
        ("trend", "grid"),
    ]
    for key, name in rules:
        if key in slug:
            return name
    return "window"


def draw_motif(draw: ImageDraw.ImageDraw, kind: str, accent: tuple[int, int, int]) -> None:
    ox, oy = 860, 180
    ink = (232, 236, 240)
    soft = (21, 111, 153)
    if kind == "bars":
        for i, h in enumerate((70, 120, 90, 150, 110)):
            x = ox + i * 48
            draw.rounded_rectangle((x, oy + 180 - h, x + 28, oy + 180), 6, fill=accent if i == 3 else ink)
    elif kind == "pin":
        draw.ellipse((ox + 40, oy + 10, ox + 160, oy + 130), outline=ink, width=8)
        draw.ellipse((ox + 78, oy + 48, ox + 122, oy + 92), fill=accent)
        draw.polygon([(ox + 70, oy + 110), (ox + 130, oy + 110), (ox + 100, oy + 190)], fill=ink)
    elif kind == "phone":
        draw.rounded_rectangle((ox + 50, oy, ox + 170, oy + 240), 24, outline=ink, width=8)
        draw.rounded_rectangle((ox + 68, oy + 28, ox + 152, oy + 190), 8, fill=accent)
    elif kind == "cal":
        draw.rounded_rectangle((ox + 20, oy + 30, ox + 210, oy + 200), 16, outline=ink, width=8)
        draw.rectangle((ox + 20, oy + 30, ox + 210, oy + 70), fill=accent)
        for i in range(3):
            for j in range(3):
                draw.ellipse((ox + 48 + i * 52, oy + 96 + j * 32, ox + 64 + i * 52, oy + 112 + j * 32), fill=ink)
    elif kind == "mail":
        draw.rounded_rectangle((ox + 10, oy + 40, ox + 230, oy + 180), 12, outline=ink, width=8)
        draw.line((ox + 18, oy + 52, ox + 120, oy + 120), fill=accent, width=6)
        draw.line((ox + 222, oy + 52, ox + 120, oy + 120), fill=accent, width=6)
    elif kind == "bag":
        draw.rounded_rectangle((ox + 40, oy + 70, ox + 190, oy + 210), 18, outline=ink, width=8)
        draw.arc((ox + 70, oy + 20, ox + 160, oy + 110), 200, 340, fill=accent, width=8)
    elif kind == "star":
        cx, cy, r = ox + 110, oy + 110, 78
        pts = []
        for i in range(10):
            ang = -3.14159 / 2 + i * 3.14159 / 5
            rad = r if i % 2 == 0 else r * 0.45
            pts.append((cx + rad * __import__("math").cos(ang), cy + rad * __import__("math").sin(ang)))
        draw.polygon(pts, fill=accent)
    elif kind == "qr":
        for i in range(4):
            for j in range(4):
                if (i + j) % 2 == 0 or i == 0 or j == 0:
                    draw.rounded_rectangle(
                        (ox + 20 + i * 48, oy + 20 + j * 48, ox + 52 + i * 48, oy + 52 + j * 48),
                        4,
                        fill=accent if (i == j) else ink,
                    )
    elif kind == "nfc":
        draw.rounded_rectangle((ox + 20, oy + 60, ox + 130, oy + 160), 16, outline=ink, width=8)
        draw.rounded_rectangle((ox + 90, oy + 90, ox + 210, oy + 200), 16, fill=accent)
    elif kind == "ads":
        draw.polygon([(ox + 30, oy + 40), (ox + 200, oy + 110), (ox + 30, oy + 180)], outline=ink, width=8)
        draw.ellipse((ox + 150, oy + 70, ox + 210, oy + 150), fill=accent)
    elif kind == "play":
        draw.rounded_rectangle((ox + 40, oy + 10, ox + 150, oy + 230), 28, outline=ink, width=8)
        draw.polygon([(ox + 78, oy + 80), (ox + 78, oy + 160), (ox + 128, oy + 120)], fill=accent)
    elif kind == "nodes":
        centers = [(ox + 40, oy + 40), (ox + 180, oy + 30), (ox + 110, oy + 140), (ox + 40, oy + 200), (ox + 190, oy + 190)]
        for a, b in ((0, 2), (1, 2), (2, 3), (2, 4), (0, 3)):
            draw.line((*centers[a], *centers[b]), fill=ink, width=4)
        for i, (x, y) in enumerate(centers):
            draw.ellipse((x - 16, y - 16, x + 16, y + 16), fill=accent if i == 2 else ink)
    elif kind == "home":
        draw.polygon([(ox + 30, oy + 110), (ox + 120, oy + 30), (ox + 210, oy + 110)], fill=accent)
        draw.rounded_rectangle((ox + 55, oy + 110, ox + 185, oy + 220), 6, outline=ink, width=8)
    elif kind == "coin":
        for i, shift in enumerate((0, 28, 56)):
            draw.ellipse((ox + 30 + shift, oy + 40 + shift, ox + 150 + shift, oy + 160 + shift), outline=ink, width=8)
        draw.ellipse((ox + 86, oy + 96, ox + 150, oy + 160), fill=accent)
    elif kind == "dots":
        colors = (ink, accent, ink)
        for i in range(3):
            draw.ellipse((ox + 20 + i * 70, oy + 80, ox + 70 + i * 70, oy + 130), fill=colors[i])
    elif kind == "refresh":
        draw.arc((ox + 40, oy + 40, ox + 190, oy + 190), 30, 300, fill=ink, width=10)
        draw.polygon([(ox + 170, oy + 40), (ox + 210, oy + 50), (ox + 176, oy + 90)], fill=accent)
    elif kind == "grid":
        for i in range(2):
            for j in range(2):
                draw.rounded_rectangle(
                    (ox + 20 + i * 100, oy + 20 + j * 90, ox + 100 + i * 100, oy + 90 + j * 90),
                    12,
                    outline=accent if (i + j) == 2 else ink,
                    width=6,
                )
    else:
        draw.rounded_rectangle((ox + 20, oy + 20, ox + 210, oy + 160), 16, outline=ink, width=8)
        draw.rectangle((ox + 20, oy + 20, ox + 210, oy + 52), fill=accent)
        draw.rounded_rectangle((ox + 40, oy + 72, ox + 190, oy + 96), 4, fill=ink)
        draw.rounded_rectangle((ox + 40, oy + 112, ox + 150, oy + 132), 4, fill=soft)


def cover(slug: str, title: str) -> None:
    img = Image.new("RGB", (W, H), (11, 16, 22))
    draw = ImageDraw.Draw(img)
    accent = (21, 111, 153)
    draw.rectangle((0, 0, 10, H), fill=accent)
    draw.polygon([(760, 0), (1200, 0), (1200, H), (700, H)], fill=(16, 28, 38))
    draw.ellipse((980, -80, 1280, 220), fill=(18, 70, 96))
    title_font = ImageFont.truetype(FONT, 52)
    small = ImageFont.truetype(FONT_REG, 22)
    eyebrow = ImageFont.truetype(FONT, 18)
    draw.text((64, 78), "BCY DİJİTAL", font=eyebrow, fill=accent)
    draw.text((64, 108), "BLOG", font=eyebrow, fill=(154, 166, 178))
    lines = wrap(draw, title, title_font, 640)
    y = 180
    for line in lines:
        draw.text((64, y), line, font=title_font, fill=(245, 247, 250))
        y += 64
    draw.text((64, H - 78), "bariscanyonel.com", font=small, fill=(154, 166, 178))
    draw_motif(draw, motif(slug), accent)
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(OUT / f"{slug}.jpg", "JPEG", quality=90, optimize=True)


def main() -> None:
    items = posts()
    if not items:
        raise SystemExit("Başlık bulunamadı")
    for slug, title in items:
        cover(slug, title)
    print(f"{len(items)} kapak yazıldı: {OUT}")


if __name__ == "__main__":
    main()
