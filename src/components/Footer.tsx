import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-stats pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:border-r border-background/20 lg:pr-12 pb-12 lg:pb-0 border-b lg:border-b-0 border-background/20">
            <span className="display-font text-3xl font-bold uppercase mb-6 block">Horizon</span>
            <p className="text-background/60 text-sm leading-relaxed mb-10">
              Trusted veterinary healthcare in Nepalgunj. Caring for pets, poultry, and farm animals since our inception.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1DHYHW3rJu/"
                aria-label="Facebook"
                className="w-10 h-10 border border-background/40 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/horizon_vet_clinic_petshop?igsh=eDF3bnRnOGJubnVy"
                aria-label="Instagram"
                className="w-10 h-10 border border-background/40 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:border-r border-background/20 lg:px-12 pb-12 lg:pb-0 border-b lg:border-b-0 border-background/20">
            <h4 className="mono-label text-background/40 mb-8">Quick Links</h4>
            <ul className="space-y-4 mono-label">
              <li><Link to="/" className="hover:line-through">Home</Link></li>
              <li><Link to="/about" className="hover:line-through">About</Link></li>
              <li><Link to="/treatments" className="hover:line-through">Services</Link></li>
              <li><Link to="/doctors" className="hover:line-through">Doctors</Link></li>
              <li><Link to="/appointment" className="hover:line-through">Book Now</Link></li>
            </ul>
          </div>

          <div className="lg:border-r border-background/20 lg:px-12 pb-12 lg:pb-0 border-b lg:border-b-0 border-background/20">
            <h4 className="mono-label text-background/40 mb-8">Services</h4>
            <ul className="space-y-4 mono-label text-background/60">
              <li>Consultation</li>
              <li>Surgery</li>
              <li>Orthopedic</li>
              <li>Poultry Health</li>
              <li>Farm Visits</li>
            </ul>
          </div>

          <div className="lg:pl-12">
            <h4 className="mono-label text-background/40 mb-8">Location</h4>
            <p className="mono-label text-background/60 leading-loose">
              Surkhet Road, Nepalgunj-2<br />
              Banke, Nepal<br />
              <a href="tel:+9779869369273" className="hover:text-background">+977-9869369273</a><br />
              8:00 AM – 8:00 PM | 7 Days
            </p>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="mono-font text-[9px] font-bold tracking-[0.2em] uppercase text-background/40">
            © {new Date().getFullYear()} Horizon Vet Clinic & Pet Shop. All rights reserved.
          </p>
          <p className="mono-font text-[9px] font-bold tracking-[0.2em] uppercase text-background/40 italic">
            Reduction to essence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
