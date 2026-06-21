# Routes

## Router Config
- File: `src/App.tsx` (inline React Router v6 `<Routes>`)
- Framework: React Router v6, file-based page imports

## Route Table

| Path | Page Component | Layout | Description |
|------|---------------|--------|-------------|
| `/` | `src/pages/Home.tsx` | App shell (Navbar + Footer) | Landing page with hero, stats, services grid, doctors, essentials shop, CTA |
| `/about` | `src/pages/About.tsx` | App shell | About the clinic, mission/vision/values, facility, visit info, map |
| `/doctors` | `src/pages/Doctors.tsx` | App shell | Team listing with profiles, specializations, contact, CTA |
| `/doctors/:id` | `src/pages/DoctorDetail.tsx` | App shell | Individual doctor detail with education, certifications, languages |
| `/treatments` | `src/pages/Treatments.tsx` | App shell | Services grid with treatment cards, why-choose section, CTA |
| `/blogs` | `src/pages/Blogs.tsx` | App shell | Blog listing with article cards |
| `/blogs/:slug` | `src/pages/BlogDetail.tsx` | App shell | Full article with content, share buttons, CTA |
| `/appointment` | `src/pages/Appointment.tsx` | App shell | Booking form with date/time picker, walk-in info |
| `/contact` | `src/pages/Contact.tsx` | App shell | Contact form, info tiles, map embed |
| `/faq` | `src/pages/FAQ.tsx` | App shell | Accordion FAQ sections |
| `*` | `src/pages/NotFound.tsx` | App shell | 404 page |

## Layout Structure
- Every page uses the same shell: `<Navbar />` at top, `<Footer />` at bottom
- Global grain-overlay div (fixed, z-[60], pointer-events-none)
- Toaster and Sonner for notifications
- ScrollToTop on route change
