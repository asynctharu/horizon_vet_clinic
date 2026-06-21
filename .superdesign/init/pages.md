# Page Component Dependency Trees

## / (Home Page)
Entry: `src/pages/Home.tsx`
Dependencies:
- src/pages/Home.tsx
  - src/components/SEO.tsx
  - src/lib/utils.ts (via cn)

## /about
Entry: `src/pages/About.tsx`
Dependencies:
- src/pages/About.tsx
  - src/components/SEO.tsx
  - src/lib/utils.ts

## /doctors
Entry: `src/pages/Doctors.tsx`
Dependencies:
- src/pages/Doctors.tsx
  - src/components/SEO.tsx
  - src/lib/utils.ts

## /doctors/:id
Entry: `src/pages/DoctorDetail.tsx`
Dependencies:
- src/pages/DoctorDetail.tsx
  - src/components/ui/button.tsx (via Button import — unused in current render but imported)
  - src/lib/utils.ts

## /treatments
Entry: `src/pages/Treatments.tsx`
Dependencies:
- src/pages/Treatments.tsx
  - src/components/SEO.tsx
  - src/lib/utils.ts

## /blogs
Entry: `src/pages/Blogs.tsx`
Dependencies:
- src/pages/Blogs.tsx
  - src/components/CardBlog.tsx
  - src/components/SEO.tsx
  - src/lib/utils.ts

## /blogs/:slug
Entry: `src/pages/BlogDetail.tsx`
Dependencies:
- src/pages/BlogDetail.tsx
  - src/components/ui/button.tsx
  - src/lib/utils.ts

## /appointment
Entry: `src/pages/Appointment.tsx`
Dependencies:
- src/pages/Appointment.tsx
  - src/components/SEO.tsx
  - src/hooks/use-toast.ts
  - src/lib/utils.ts

## /contact
Entry: `src/pages/Contact.tsx`
Dependencies:
- src/pages/Contact.tsx
  - src/components/SEO.tsx
  - src/hooks/use-toast.ts
  - src/lib/utils.ts

## /faq
Entry: `src/pages/FAQ.tsx`
Dependencies:
- src/pages/FAQ.tsx
  - src/components/SEO.tsx
  - src/lib/utils.ts

## Global (applied to all pages)
- src/App.tsx
  - src/components/Navbar.tsx
  - src/components/Footer.tsx
  - src/components/ScrollToTop.tsx
  - src/components/ui/toaster.tsx
  - src/components/ui/sonner.tsx
  - src/components/ui/tooltip.tsx
  - src/lib/utils.ts
- src/main.tsx (entry point)
- src/index.css (global styles)
- tailwind.config.ts
