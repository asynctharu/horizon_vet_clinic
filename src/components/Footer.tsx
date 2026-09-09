import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FF8C42] pt-24 pb-12 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src="/assests/icon.png" alt="Horizon Vet" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-xl font-bold tracking-tight text-white">
              Horizon <span className="text-orange-100">Vet</span>
            </span>
          </div>
          <p className="text-orange-50 mb-8 leading-relaxed">
            Providing expert veterinary care and pet supplies since 10+ years. Your partner in professional animal health.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1DHYHW3rJu/"
              aria-label="Facebook"
className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#FF8C42] smooth-hover"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/horizon_vet_clinic_petshop?igsh=eDF3bnRnOGJubnVy"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#FF8C42] smooth-hover"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-orange-50">
            <li className="smooth-hover hover:text-white">
              <Link to="/treatments">Services</Link>
            </li>
            <li className="smooth-hover hover:text-white">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="smooth-hover hover:text-white">
              <Link to="/doctors">Our Team</Link>
            </li>
            <li className="smooth-hover hover:text-white">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Our Location</h4>
          <ul className="space-y-4 text-orange-50">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-0.5 shrink-0" />
              Surkhet Road, Nepalganj, Nepal
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-white mt-0.5 shrink-0" />
              Mon - Sun: 8:00 AM - 8:00 PM
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-white mt-0.5 shrink-0" />
              vetclinichorizon@gmail.com
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-orange-100">
        <p>&copy; {new Date().getFullYear()} Horizon Vet Clinic & Pet Shop. All rights reserved.</p>
        <a
          href="https://wa.me/9779765289399"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white smooth-hover font-medium"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          Website Developed by Tharu Coders
        </a>
      </div>
    </footer>
  );
};

export default Footer;
