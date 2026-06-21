import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/treatments" },
  { name: "Blogs", path: "/blogs" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assests/icon.png" alt="Horizon Vet" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-2xl font-bold tracking-tight" style={{ color: "#192a43" }}>
            Horizon <span style={{ color: "#FF8C42" }}>Vet</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`smooth-hover ${isActive(l.path) ? "text-[#FF8C42]" : "text-gray-600 hover:text-[#FF8C42]"}`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+9779869369273"
            className="hidden lg:flex items-center gap-2 text-red-600 font-bold animate-pulse"
          >
            <PhoneCall className="w-4 h-4" />
            Emergency
          </a>
          <Link
            to="/appointment"
            className="bg-[#FF8C42] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-200 hover:scale-105 smooth-hover"
          >
            Book Appointment
          </Link>
        </div>

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
          isOpen ? "max-h-[600px] mt-4" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-orange-100 rounded-3xl p-6 space-y-1 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-3 text-sm font-medium rounded-full transition-colors ${
                isActive(l.path) ? "bg-[#FFF0E6] text-[#FF8C42] font-semibold" : "text-gray-600 hover:bg-[#FFF0E6]"
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-[#FF8C42] text-white text-center py-3 rounded-full text-sm font-bold"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
