# Extractable Components

#### Layout Components (appear on most pages)

## NavBar
- Source: `src/components/Navbar.tsx`
- Category: layout
- Description: Fixed top navigation with glassmorphism, logo "Horizon vet", nav links (Home, About, Services, Doctors, Blog, FAQ, Contact), Book Now CTA, mobile hamburger menu
- Extractable props: activeItem (string, default: "home")
- Hardcoded: Logo text "Horizon vet", nav link names and paths, Book Now text, all CSS classes, hamburger/mobile menu toggle

## Footer
- Source: `src/components/Footer.tsx`
- Category: layout
- Description: Dark card-rounded footer with 4-column grid: brand, quick links, services, visit info. Social icons, copyright, developer credit.
- Extractable props: none (fully static content)
- Hardcoded: All text labels, links, social icons (Facebook, Instagram), "made with care" tagline, developer credit

#### Basic Components (used across pages)

## CardDoctor
- Source: `src/components/CardDoctor.tsx`
- Category: basic
- Description: Doctor profile card with image, name, specialty badge, intro, view profile link
- Extractable props: doctorId (string), name (string), specialty (string), imageSrc (string), introText (string)
- Hardcoded: Card layout, hover effects, "View Profile" text, divider style

## CardTreatment
- Source: `src/components/CardTreatment.tsx`
- Category: basic
- Description: Treatment/service card with tinted icon circle, title, description, learn more link
- Extractable props: title (string), description (string), slug (string)
- Hardcoded: Tint color cycle, icon size, "Learn More" text, card layout

## CardBlog
- Source: `src/components/CardBlog.tsx`
- Category: basic
- Description: Blog article card with image, category badge, date, title, excerpt, read article link
- Extractable props: slug (string), title (string), excerpt (string), thumbnailSrc (string), date (string), category (string)
- Hardcoded: Card layout, category badge style, "Read Article" text

## SectionHeader
- Source: `src/components/SectionHeader.tsx`
- Category: basic
- Description: Editorial section heading with optional badge (gold eyebrow), title with italic last word, optional description
- Extractable props: badge (string, optional), title (string, required), description (string, optional), centered (boolean, default false)
- Hardcoded: Gold divider lines, Fraunces font styles, layout structure

## SEO
- Source: `src/components/SEO.tsx`
- Category: basic
- Description: Helmet-based SEO component with meta tags, OG, Twitter cards
- Extractable props: title (string), description (string), canonical (string), image (string)
- Hardcoded: Base URL, default title/description/image, meta tag structure
