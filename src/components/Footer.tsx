import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 pb-8 pt-12 bg-background">
      <div className="max-w-7xl mx-auto bg-[#292524] text-white card-rounded relative overflow-hidden soft-shadow-lg">
        <div className="blob w-[400px] h-[400px] bg-[#FFB7B2]/30 -top-40 -left-20" />
        <div className="blob w-[400px] h-[400px] bg-[#E6E6FA]/30 -bottom-40 -right-20" style={{ animationDelay: "-3s" }} />

        <div className="relative z-10 px-8 md:px-14 lg:px-20 py-16 lg:py-20 grid lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="display-font text-3xl font-bold">Horizon</span>
              <span className="cursive-font text-3xl text-[#FFB7B2] -mt-2">vet</span>
            </div>
            <p className="opacity-70 text-sm leading-relaxed mb-8">
              Trusted veterinary healthcare in Nepalgunj. Caring for pets, poultry, and farm animals since our inception.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1DHYHW3rJu/"
                aria-label="Facebook"
                className="w-10 h-10 pill-rounded bg-white/10 hover:bg-[#FFB7B2] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/horizon_vet_clinic_petshop?igsh=eDF3bnRnOGJubnVy"
                aria-label="Instagram"
                className="w-10 h-10 pill-rounded bg-white/10 hover:bg-[#FFB7B2] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/9779765289399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 pill-rounded bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

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

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/50">Visit Us</h4>
            <p className="text-sm leading-loose opacity-80">
              Surkhet Road, Nepalgunj-2<br />
              Banke, Nepal<br />
              <a href="tel:+9779869369273" className="hover:text-[#FFB7B2] transition-colors">+977-9869369273</a><br />
              <a href="https://wa.me/9779765289399" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
              </a><br />
              8:00 AM – 8:00 PM | 7 Days
            </p>
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-14 lg:px-20 pb-10 pt-2 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/10">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Horizon Vet Clinic & Pet Shop. All rights reserved.
          </p>
          <p className="cursive-font text-lg text-[#FFB7B2]">made with care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
