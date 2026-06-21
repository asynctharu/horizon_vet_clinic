# Design System / Theme

## Framework
- Vite + React 18 + TypeScript
- Tailwind CSS 3.4 with tailwindcss-animate plugin
- shadcn/ui components (Radix UI primitives)
- Fontsource Plus Jakarta Sans (unused, replaced by Google Fonts)

## Full globals.css
- File: `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Outfit:wght@100..900&family=Reenie+Beanie&family=JetBrains+Mono:wght@100..800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Softly Digital Wellness palette */
    --background: 39 50% 98%;          /* #FDFCF8 */
    --foreground: 20 14% 15%;          /* #292524 */

    --card: 0 0% 100%;
    --card-foreground: 20 14% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 20 14% 15%;

    --primary: 5 100% 85%;             /* #FFB7B2 peach */
    --primary-foreground: 0 0% 100%;

    --secondary: 120 16% 92%;          /* #E8EFE8 sage */
    --secondary-foreground: 20 14% 15%;

    --muted: 30 10% 95%;
    --muted-foreground: 25 5% 47%;     /* #78716C */

    --accent: 255 24% 94%;             /* #EFEDF4 lavender */
    --accent-foreground: 20 14% 15%;

    --destructive: 0 70% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 30 8% 90%;
    --input: 30 8% 90%;
    --ring: 5 100% 85%;

    --radius: 1.5rem;

    --peach: 5 100% 85%;
    --sage: 120 16% 92%;
    --lavender: 255 24% 94%;
    --blush: 12 100% 94%;              /* #FFE4E1 */
    --charcoal: 20 14% 15%;
    --ink: 215 45% 18%;                /* deep navy editorial */
    --gold: 36 55% 52%;                /* refined gold accent */
    --cream: 39 50% 96%;
    --bone: 36 25% 92%;

    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 20 14% 15%;
    --sidebar-primary: 5 100% 85%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 120 16% 92%;
    --sidebar-accent-foreground: 20 14% 15%;
    --sidebar-border: 30 8% 90%;
    --sidebar-ring: 5 100% 85%;
  }

  .dark {
    --background: 20 14% 10%;
    --foreground: 39 50% 98%;
    --card: 20 14% 14%;
    --card-foreground: 39 50% 98%;
    --primary: 5 100% 85%;
    --primary-foreground: 20 14% 10%;
    --secondary: 20 14% 18%;
    --secondary-foreground: 39 50% 98%;
    --muted: 20 14% 18%;
    --muted-foreground: 30 8% 70%;
    --accent: 20 14% 20%;
    --accent-foreground: 39 50% 98%;
    --border: 20 14% 22%;
    --input: 20 14% 22%;
    --ring: 5 100% 85%;
  }
}

@layer base {
  * { @apply border-border; }
  html { scroll-behavior: smooth; }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Outfit', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fraunces', 'Outfit', Georgia, serif;
    font-weight: 400;
    @apply tracking-tight;
  }
}

@layer components {
  .display-font { font-family: 'Fraunces', Georgia, serif; font-weight: 400; letter-spacing: -0.02em; font-variation-settings: "opsz" 144, "SOFT" 30; }
  .display-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; letter-spacing: -0.02em; }
  .editorial-eyebrow { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; color: hsl(var(--gold)); letter-spacing: 0.18em; text-transform: uppercase; font-size: 0.7rem; }
  .cursive-font { font-family: 'Reenie Beanie', cursive; font-weight: 400; letter-spacing: 0; }
  .mono-font { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  .body-sans { font-family: 'Outfit', system-ui, sans-serif; }

  .grain-overlay {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.3;
    mix-blend-mode: overlay;
  }

  .blob {
    position: absolute;
    border-radius: 9999px;
    filter: blur(80px);
    opacity: 0.55;
    animation: blob-float 7s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes blob-float {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
  }

  .soft-shadow { box-shadow: 0 4px 24px -4px rgba(41, 37, 36, 0.07); }
  .soft-shadow-lg { box-shadow: 0 20px 50px -12px rgba(41, 37, 36, 0.1); }

  .card-rounded { border-radius: 2.5rem; }
  .pill-rounded { border-radius: 9999px; }

  .section-padding { @apply px-6 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32; }
  .container-custom { @apply max-w-7xl mx-auto; }

  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-tight text-white transition-all duration-300;
    background-color: hsl(var(--primary));
    border-radius: 9999px;
    box-shadow: 0 4px 20px -4px rgba(255, 183, 178, 0.5);
  }
  @media (hover: hover) and (pointer: fine) {
    .btn-primary:hover { transform: scale(1.04); box-shadow: 0 10px 30px -6px rgba(255, 183, 178, 0.6); }
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-tight transition-all duration-300;
    background-color: #ffffff;
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    border-radius: 9999px;
    box-shadow: 0 4px 20px -4px rgba(41, 37, 36, 0.05);
  }
  @media (hover: hover) and (pointer: fine) {
    .btn-secondary:hover { transform: scale(1.04); background-color: hsl(var(--secondary)); }
  }

  .btn-dark {
    @apply inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-tight text-white transition-all duration-300;
    background-color: hsl(var(--foreground));
    border-radius: 9999px;
  }
  @media (hover: hover) and (pointer: fine) {
    .btn-dark:hover { transform: scale(1.04); background-color: hsl(var(--primary)); }
  }

  .mono-label { @apply mono-font text-[10px] font-bold tracking-[0.2em] uppercase; }

  .soft-card {
    @apply bg-white p-8;
    border-radius: 2.5rem;
    box-shadow: 0 4px 24px -4px rgba(41, 37, 36, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  @media (hover: hover) and (pointer: fine) {
    .soft-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(41, 37, 36, 0.1); }
  }
}

@layer utilities {
  .animate-fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-up, .animate-fade-in, .blob {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
}
```

## Full Tailwind Config
- File: `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        display: ["Fraunces", "Georgia", "serif"],
        cursive: ["Reenie Beanie", "cursive"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        peach: "hsl(var(--peach))",
        sage: "hsl(var(--sage))",
        lavender: "hsl(var(--lavender))",
        blush: "hsl(var(--blush))",
        charcoal: "hsl(var(--charcoal))",
        ink: "hsl(var(--ink))",
        gold: "hsl(var(--gold))",
        cream: "hsl(var(--cream))",
        bone: "hsl(var(--bone))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.5rem)",
        sm: "calc(var(--radius) - 1rem)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
```

## Design Tokens Summary

### Colors
| Token | HSL | Hex (approx) | Usage |
|-------|-----|-------------|-------|
| `--background` | 39 50% 98% | #FDFCF8 | Page backgrounds |
| `--foreground` | 20 14% 15% | #292524 | Text, dark elements |
| `--primary` | 5 100% 85% | #FFB7B2 | Peach brand color, buttons |
| `--secondary` | 120 16% 92% | #E8EFE8 | Sage green sections |
| `--accent` | 255 24% 94% | #EFEDF4 | Lavender sections |
| `--ink` | 215 45% 18% | Deep navy | Editorial headings |
| `--gold` | 36 55% 52% | Gold | Accent, eyebrow text |
| `--cream` | 39 50% 96% | Cream | Home page background |
| `--bone` | 36 25% 92% | Bone | Subtle section bg |
| `--blush` | 12 100% 94% | #FFE4E1 | Light pink tint |

### Typography
| Class | Font | Usage |
|-------|------|-------|
| `display-font` | Fraunces (serif) | All headings, display text |
| `display-italic` | Fraunces italic | Emphasized words in headings |
| `body-sans` / default | Outfit (sans-serif) | Body text, navigation |
| `cursive-font` | Reenie Beanie (cursive) | Accent words, playful text |
| `mono-font` | JetBrains Mono | Labels (rare) |
| `editorial-eyebrow` | Fraunces italic, gold | Section badges |

### Border Radius
| Token | Value |
|-------|-------|
| `--radius` | 1.5rem (24px) |
| `card-rounded` | 2.5rem (40px) |
| `pill-rounded` | 9999px (full) |

### Spacing
- Default section padding: `px-6 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32`
- Max content width: `max-w-7xl` (1280px), `max-w-[1240px]` (home)
- Container: `max-w-7xl mx-auto`

### Effects
- `soft-shadow`: `0 4px 24px -4px rgba(41, 37, 36, 0.07)`
- `soft-shadow-lg`: `0 20px 50px -12px rgba(41, 37, 36, 0.1)`
- `blob`: blurred gradient circles (80px blur, 0.55 opacity) with float animation
- `grain-overlay`: SVG noise texture overlay (opacity 0.3, mix-blend-mode: overlay)
