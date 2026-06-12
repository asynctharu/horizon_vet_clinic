import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/treatments" },
  { name: "Doctors", path: "/doctors" },
  { name: "Blog", path: "/blogs" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-white/75 backdrop-blur-xl border border-white/60 soft-shadow pill-rounded px-5 md:px-7 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 pr-2">
          <span className="display-font text-xl md:text-2xl font-bold tracking-tight text-foreground">Horizon</span>
          <span className="cursive-font text-2xl text-[#FFB7B2] leading-none -mt-1">vet</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`transition-colors hover:text-[#FFB7B2] ${
                isActive(l.path) ? "text-foreground font-semibold" : ""
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <Link
          to="/appointment"
          className="hidden lg:inline-flex items-center gap-2 bg-[#FFB7B2] text-white pill-rounded px-5 py-2 text-sm font-semibold transition-transform hover:scale-105"
        >
          Book Now
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 -mr-1 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] mt-3" : "max-h-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-white/60 soft-shadow card-rounded p-6 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-3 text-sm font-medium pill-rounded transition-colors ${
                isActive(l.path) ? "bg-[#E8EFE8] text-foreground font-semibold" : "text-foreground/80 hover:bg-[#FDFCF8]"
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-[#FFB7B2] text-white text-center py-3 pill-rounded text-sm font-semibold"
          >
            Book Now →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
