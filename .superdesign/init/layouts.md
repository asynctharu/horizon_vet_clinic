# Layout Components

## App Root Layout
- File: `src/App.tsx`
- Wraps entire app with HelmetProvider, QueryClientProvider, TooltipProvider
- BrowserRouter with ScrollToTop, global grain-overlay, Navbar, Routes, Footer

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Treatments from "./pages/Treatments";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="grain-overlay fixed inset-0 pointer-events-none z-[60]" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
```

## Navbar
- File: `src/components/Navbar.tsx`
- Full source code in components.md
- Fixed top navigation with glassmorphism effect, centered
- Logo: "Horizon vet" with Fraunces serif display + italic gold "vet"
- Desktop nav links (Home, About, Services, Doctors, Blog, FAQ, Contact)
- "Book Now" CTA button linking to /appointment
- Mobile hamburger menu with slide-down animation

## Footer
- File: `src/components/Footer.tsx`
- Dark (#292524) card-rounded footer
- 4-column grid: Logo + description + social icons | Quick Links | Services | Visit Us
- Social: Facebook, Instagram icon links
- Bottom bar with copyright + "made with care" cursive tagline
- Developer credit: "Tharu Coders" with WhatsApp link

```tsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 pb-8 pt-12 bg-background">
      <div className="max-w-7xl mx-auto bg-[#292524] text-white card-rounded relative overflow-hidden soft-shadow-lg">
        <div className="blob w-[400px] h-[400px] bg-[#FFB7B2]/30 -top-40 -left-20" />
        <div className="blob w-[400px] h-[400px] bg-[#E6E6FA]/30 -bottom-40 -right-20" style={{ animationDelay: "-3s" }} />

        <div className="relative z-10 px-8 md:px-14 lg:px-20 py-16 lg:py-20 grid lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="display-font text-3xl">Horizon</span>
              <span className="display-italic text-2xl text-[hsl(var(--gold))]">vet</span>
            </div>
            <p className="opacity-70 text-sm leading-relaxed mb-8">
              Trusted veterinary healthcare in Nepalgunj. Caring for pets, poultry, and farm animals since our inception.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1DHYHW3rJu/" aria-label="Facebook" className="w-10 h-10 pill-rounded bg-white/10 hover:bg-[#FFB7B2] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/horizon_vet_clinic_petshop?igsh=eDF3bnRnOGJubnVy" aria-label="Instagram" className="w-10 h-10 pill-rounded bg-white/10 hover:bg-[#FFB7B2] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/50">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="opacity-80 hover:text-[#FFB7B2] hover:opacity-100 transition-colors">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:text-[#FFB7B2] hover:opacity-100 transition-colors">About</Link></li>
              <li><Link to="/treatments" className="opacity-80 hover:text-[#FFB7B2] hover:opacity-100 transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="opacity-80 hover:text-[#FFB7B2] hover:opacity-100 transition-colors">Doctors</Link></li>
              <li><Link to="/appointment" className="opacity-80 hover:text-[#FFB7B2] hover:opacity-100 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/50">Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Consultation</li>
              <li>Surgery</li>
              <li>Orthopedic</li>
              <li>Poultry Health</li>
              <li>Farm Visits</li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/50">Visit Us</h4>
            <p className="text-sm leading-loose opacity-80">
              Surkhet Road, Nepalgunj-2<br />Banke, Nepal<br />
              <a href="tel:+9779869369273" className="hover:text-[#FFB7B2] transition-colors">+977-9869369273</a><br />
              8:00 AM – 8:00 PM | 7 Days
            </p>
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-14 lg:px-20 pb-10 pt-2 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/10">
          <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Horizon Vet Clinic & Pet Shop. All rights reserved.</p>
          <p className="cursive-font text-lg text-[#FFB7B2]">made with care</p>
        </div>

        <div className="relative z-10 px-8 md:px-14 lg:px-20 py-3 flex justify-center items-center border-t border-white/5 bg-white/5">
          <p className="text-[11px] text-white/40 flex items-center gap-1.5">
            Website Developed by
            <a href="https://wa.me/9779765289399" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#25D366] transition-colors inline-flex items-center gap-1">
              <MessageCircle className="w-3 h-3" /> Tharu Coders
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

## ScrollToTop
- File: `src/components/ScrollToTop.tsx`
- Scrolls window to top on every route change
- Used in App.tsx inside BrowserRouter
