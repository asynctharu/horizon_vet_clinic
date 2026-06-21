# Horizon Vet Clinic & Pet Shop — Design System (Pet-Centric Redesign)

## Product Context
Horizon Vet Clinic & Pet Shop is a veterinary healthcare provider in Nepalgunj, Nepal. The redesign shifts from an editorial/warm tone to a **pet-centric, playful, friendly** brand identity focused on the emotional bond between pets and owners.

## Brand Voice
- Warm, playful, pet-first
- "Where Every Pet Feels at Home"
- Friendly but professional — building trust through warmth

## Color Palette

### Light Mode
| Role | Value | Usage |
|------|-------|-------|
| Background | #FCF7F0 (hsl 35 67% 96%) | Page background, warm beige |
| Foreground | #2c2421 | Body text |
| Primary / Navy | #192a43 | Headings, primary buttons, dark sections |
| Orange | #FF8C42 | CTAs, accent elements, hover states |
| Teal | #0097A7 | Secondary accent, service card borders |
| Orange Light | #FFF0E6 | Pill badges, light backgrounds |
| Card bg | #FFFFFF | Cards, form fields |
| Muted | gray-500 | Secondary text |

### Dark Mode
- Background: 210 8% 12%
- Foreground: 35 67% 96% (#FCF7F0)
- Primary: #192a43
- Orange: #FF8C42

## Typography

| Font | CSS | Usage |
|------|-----|-------|
| Satoshi (sans) | `.body-sans` / body | Body text, nav (fallback: Outfit) |
| Fraunces (serif) | `.display-font` | Headings, display text |
| Fraunces (italic) | `.display-italic` | Emphasized heading words |
| Reenie Beanie (cursive) | `.cursive-font` | Playful accents |
| JetBrains Mono | `.mono-font` | Rare labels |

## Border Radius
- `card-rounded`: 2.5rem (40px) — section containers, cards
- `pill-rounded`: 9999px — buttons, badges, icon circles
- `rounded-2xl`: 1rem
- `rounded-3xl`: 1.5rem — new design uses these frequently

## Shadows
- `.soft-shadow`: `0 4px 24px -4px rgba(41, 37, 36, 0.07)`
- `.soft-shadow-lg`: `0 20px 50px -12px rgba(41, 37, 36, 0.1)`

## UI Patterns

### Buttons
- `.btn-primary` — Navy (#192a43), white text, pill-rounded
- `.btn-secondary` — White bg, orange border, navy text
- `.btn-accent` — Orange (#FF8C42), white text, pill-rounded, orange shadow

### Cards (Service Cards)
- bg-warm (#FCF7F0), rounded-3xl, border-b-4 accent on hover (orange/teal/navy)
- Icon in white rounded container, grayscale image that desaturates on hover

### Blobs
- `.pet-blob` — organic blob shape (60% 40% 30% 70% / 60% 30% 70% 40%)
- `.pet-blob-alt` — alternative organic shape
- Used on hero images for playful, non-rectangular framing

### Decorative
- Grain overlay (noise SVG) kept for texture
- Blob blurs (peach/teal) for background depth
- `.smooth-hover` — `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` for micro-interactions

## Layout Structure
- Sticky navbar (white/glass, z-50)
- Footer (warm bg #FCF7F0, 4-col grid + newsletter)
- Global grain overlay
