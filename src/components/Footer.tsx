import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/assests/icon.png" 
                alt="Horizon Vet Clinic" 
                className="w-10 h-10 rounded-xl object-contain bg-background"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-xl leading-tight">Horizon Vet</span>
                <span className="text-xs text-background/70 leading-tight">Clinic & Pet Shop</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Providing compassionate veterinary care for your beloved pets and livestock in Nepalgunj.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1DHYHW3rJu/" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/horizon_vet_clinic_petshop?igsh=eDF3bnRnOGJubnVy" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Doctors", path: "/doctors" },
                { name: "Services", path: "/treatments" },
                { name: "Book Appointment", path: "/appointment" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Pet Consultation",
                "Vaccinations",
                "Surgery & Spaying",
                "Orthopedic Care",
                "Pet Food & Supplies",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/treatments"
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Surkhet Road, Nepalgunj-1<br />
                  Banke, Nepal 21900
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-background/70 text-sm">
                  <a href="tel:9869369273" className="hover:text-primary transition-colors block">+9779869369273</a>
                  <a href="tel:9866361184" className="hover:text-primary transition-colors block">+9779866361184</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:horizonvetclinic01@gmail.com" className="text-background/70 hover:text-primary text-sm transition-colors">
                  horizonvetclinic01@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Open Daily<br />
                  8:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Horizon Vet Clinic & Pet Shop. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            PAN: 116045162
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
