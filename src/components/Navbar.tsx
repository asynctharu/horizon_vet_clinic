import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Doctors", path: "/doctors" },
  { name: "Services", path: "/treatments" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border/50" 
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <img 
              src="/assests/icon.png" 
              alt="Horizon Vet Clinic" 
              className="w-10 h-10 rounded-xl object-contain transition-transform duration-300 group-hover:rotate-3"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-foreground leading-tight">Horizon Vet</span>
              <span className="text-xs text-muted-foreground leading-tight">Clinic & Pet Shop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out ${
                  isActive(link.path)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:9869369273" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              <Phone className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span>(+977) 9869369273</span>
            </a>
            <Link to="/appointment">
              <Button className="btn-primary">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background border-b border-border">
          <div className="container-custom px-4 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ 
                  animationDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border space-y-3">
              <a href="tel:9869369273" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>9869369273</span>
              </a>
              <Link to="/appointment" onClick={() => setIsOpen(false)}>
                <Button className="btn-primary w-full">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
