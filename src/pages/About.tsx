import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Thermometer, Scissors, ShoppingBag } from "lucide-react";

const About = () => {
  return (
    <main className="bg-background">
      <SEO
        title="About Us | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Learn about Horizon Vet Clinic & Pet Shop - trusted veterinary care in Nepalganj with NVC-registered veterinarians."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Nepalgunj, Banke</span>
          </div>
          <h1 className="display-font text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-10">
            About<br />Horizon
          </h1>
          <p className="text-xl md:text-3xl font-light italic opacity-70 max-w-4xl">
            Caring for animals in Nepalgunj with expertise, compassion, and dedication.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="mono-label block mb-8">The Origin</span>
            <h2 className="display-font text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10 leading-none">Who We Are</h2>
            <div className="space-y-6 text-lg leading-relaxed opacity-80">
              <p>Horizon Vet Clinic & Pet Shop was established with a single mission: to bring high-quality veterinary care to the people of Nepalgunj and the surrounding Banke district.</p>
              <p>We noticed that pet owners and farmers in our region often had to travel far for proper animal healthcare. We changed that. Located right on Surkhet Road, we are easily accessible to the entire Nepalgunj community.</p>
              <p>Our clinic is equipped with modern medical tools and run by two highly qualified veterinary professionals — Dr. Shiva Prasad Bhusal and Dr. Ashish Tharu — who together bring expertise in surgery, medicine, diagnostics, and preventive care.</p>
              <p className="italic">We are not just a clinic. We are your pet's second home.</p>
            </div>
          </div>
          <div className="border-4 border-foreground p-3">
            <img
              src="/assests/clinic serviice photo/Clinic Service photo2.jpg"
              alt="Clinic interior"
              className="w-full grayscale h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 border border-background/30">
            <div className="p-12 border-b lg:border-b-0 lg:border-r border-background/30">
              <h3 className="display-font text-4xl font-bold uppercase mb-8">Mission</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                To provide affordable, expert, and compassionate veterinary care to every animal — big or small — in Nepalgunj and beyond.
              </p>
            </div>
            <div className="p-12 border-b lg:border-b-0 lg:border-r border-background/30">
              <h3 className="display-font text-4xl font-bold uppercase mb-8">Vision</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                To be the most trusted animal healthcare provider in Lumbini Province, expanding access to quality vet services for pets, poultry, and farm animals alike.
              </p>
            </div>
            <div className="p-12">
              <h3 className="display-font text-4xl font-bold uppercase mb-8">Values</h3>
              <ul className="space-y-6">
                {[
                  ["Compassion", "Treated with gentleness & respect."],
                  ["Excellence", "Highest medical and ethical standards."],
                  ["Community", "Rooted in and proud to serve Nepalgunj."],
                ].map(([label, text]) => (
                  <li key={label}>
                    <span className="mono-label text-background/40 block mb-1">{label}</span>
                    <span className="text-base opacity-70">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-font text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-center">The Facility</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Thermometer, title: "Examination Rooms", desc: "Modern clean spaces for thorough physical checks." },
              { icon: Scissors, title: "Surgical Suite", desc: "Equipped for minor and major procedures." },
              { icon: ShoppingBag, title: "In-house Pet Shop", desc: "Quality food, vitamins, & medical supplements." },
            ].map((f) => (
              <div key={f.title} className="inversion-hover group border-2 border-foreground p-10 h-72 flex flex-col justify-between">
                <f.icon className="w-12 h-12 stroke-[1.5]" />
                <div>
                  <h3 className="display-font text-2xl font-bold uppercase mb-3">{f.title}</h3>
                  <p className="text-sm opacity-70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Hours */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="display-font text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Visit Us</h2>
            <div className="space-y-10">
              <div>
                <span className="mono-label opacity-40 block mb-3">Address</span>
                <p className="display-font text-2xl md:text-3xl font-medium">Surkhet Road, Nepalgunj-2,<br />Banke, Nepal</p>
              </div>
              <div>
                <span className="mono-label opacity-40 block mb-3">Contact</span>
                <p className="display-font text-2xl md:text-3xl font-medium">+977-9869369273</p>
              </div>
              <div>
                <span className="mono-label opacity-40 block mb-3">Opening Hours</span>
                <p className="display-font text-2xl md:text-3xl font-medium">Mon – Sun: 8:00 AM – 8:00 PM<br /><span className="text-lg italic opacity-60">(Including Public Holidays)</span></p>
              </div>
            </div>
          </div>
          <div className="border-4 border-foreground aspect-square">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.709084335404!2d81.6232509!3d28.063906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998677b25c0c72d%3A0x8596256d8a3a25cf!2sHorizon%20Vet%20Clinic%20%26%20Pet%20Shop!5e0!3m2!1sen!2snp!4v1764936701774!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 cta-glow pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="display-font text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-10">
            Ready For<br />Better Care?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/appointment" className="bg-background text-foreground border-2 border-background px-10 py-5 mono-font text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-foreground hover:text-background transition-colors">
              Confirm Appointment →
            </Link>
            <a href="tel:+9779869369273" className="bg-transparent text-background border-2 border-background px-10 py-5 mono-font text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-background hover:text-foreground transition-colors">
              Call +977-9869369273
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
