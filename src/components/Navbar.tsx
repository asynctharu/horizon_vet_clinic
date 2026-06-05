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
    <nav className="fixed top-0 left-0 w-full z-50 bg-foreground text-background border-b-2 border-foreground">
      <div className="px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <span className="display-font text-2xl font-bold tracking-tight uppercase">Horizon</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 mono-font text-[10px] font-bold tracking-[0.2em] uppercase">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`transition-all hover:line-through ${isActive(l.path) ? "line-through" : ""}`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <Link
          to="/appointment"
          className="hidden lg:inline-flex bg-background text-foreground border-2 border-background px-6 py-2.5 mono-font text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
        >
          Book Now
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-background/20 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 mono-font text-xs font-bold tracking-[0.2em] uppercase border-b border-background/10 ${
                isActive(l.path) ? "line-through" : ""
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="block mt-6 bg-background text-foreground text-center py-4 mono-font text-xs font-bold tracking-[0.2em] uppercase"
          >
            Book Now →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
