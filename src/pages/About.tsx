import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Thermometer, Scissors, ShoppingBag, CalendarCheck, PhoneCall } from "lucide-react";

const About = () => {
  return (
    <main className="bg-[#FCF7F0] relative overflow-x-hidden">
      <SEO
        title="About Us | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Learn about Horizon Vet Clinic & Pet Shop - trusted veterinary care in Nepalganj with NVC-registered veterinarians."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-orange-100 -top-20 -left-10" />
        <div className="blob w-[300px] h-[300px] bg-teal-100 top-20 -right-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-5">Nepalgunj, Banke</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-8" style={{ color: "#192a43" }}>
            About <span style={{ color: "#FF8C42" }}>Horizon</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Caring for animals in Nepalgunj with expertise, compassion, and dedication.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-12 lg:px-20 animate-fade-up">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-5">The Origin</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.05]" style={{ color: "#192a43" }}>Who We Are</h2>
            <div className="space-y-5 text-lg leading-relaxed text-gray-500">
              <p>Horizon Vet Clinic & Pet Shop was established with a single mission: to bring high-quality veterinary care to the people of Nepalgunj and the surrounding Banke district.</p>
              <p>We noticed that pet owners and farmers in our region often had to travel far for proper animal healthcare. We changed that. Located right on Surkhet Road, we are easily accessible to the entire Nepalgunj community.</p>
              <p>Our clinic is equipped with modern medical tools and run by two highly qualified veterinary professionals — Dr. Shiva Prasad Bhusal and Dr. Ashish Tharu — who together bring expertise in surgery, medicine, diagnostics, and preventive care.</p>
              <p className="text-2xl" style={{ color: "#FF8C42" }}>We are not just a clinic. We are your pet's second home.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full bg-teal-100/40 card-rounded -z-10 transform rotate-2" />
            <img
                src="/assests/clinic serviice photo/Clinic Service photo2.jpg"
                alt="Clinic interior"
                className="w-full h-[560px] object-cover card-rounded soft-shadow grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
              />
          </div>
        </div>
      </section>

      {/* Mission Vision Values on dark card */}
      <section className="px-4 md:px-6 mb-20 animate-fade-up">
        <div className="max-w-7xl mx-auto bg-[#192a43] text-white card-rounded py-20 px-8 md:px-14 soft-shadow-lg">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF8C42] block mb-5">Mission</span>
              <h3 className="display-font text-3xl font-bold mb-5">What drives us</h3>
              <p className="text-base opacity-70 leading-relaxed">
                To provide affordable, expert, and compassionate veterinary care to every animal — big or small — in Nepalgunj and beyond.
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF8C42] block mb-5">Vision</span>
              <h3 className="display-font text-3xl font-bold mb-5">Where we're going</h3>
              <p className="text-base opacity-70 leading-relaxed">
                To be the most trusted animal healthcare provider in Lumbini Province, expanding access to quality vet services for pets, poultry, and farm animals alike.
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF8C42] block mb-5">Values</span>
              <h3 className="display-font text-3xl font-bold mb-5">What we stand for</h3>
              <ul className="space-y-4">
                {[
                  ["Compassion", "Treated with gentleness & respect."],
                  ["Excellence", "Highest medical and ethical standards."],
                  ["Community", "Rooted in and proud to serve Nepalgunj."],
                ].map(([label, text]) => (
                  <li key={label}>
                    <span className="text-sm font-semibold text-white block">{label}</span>
                    <span className="text-sm opacity-60">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-20 px-6 md:px-12 lg:px-20 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-14 text-center" style={{ color: "#192a43" }}>
            The <span style={{ color: "#FF8C42" }}>facility</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Thermometer, title: "Examination Rooms", desc: "Modern clean spaces for thorough physical checks.", tint: "bg-teal-100" },
              { icon: Scissors, title: "Surgical Suite", desc: "Equipped for minor and major procedures.", tint: "bg-orange-100" },
              { icon: ShoppingBag, title: "In-house Pet Shop", desc: "Quality food, vitamins, & medical supplements.", tint: "bg-[#FCF7F0]" },
            ].map((f) => (
              <div key={f.title} className="soft-card h-72 flex flex-col justify-between hover:scale-[1.02] group">
                <div className={`w-14 h-14 pill-rounded flex items-center justify-center ${f.tint} group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon className="w-7 h-7 stroke-[1.5] text-[#192a43]" />
                </div>
                <div>
                  <h3 className="display-font text-xl font-bold mb-3" style={{ color: "#192a43" }}>{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="px-4 md:px-6 mb-20 animate-fade-up">
        <div className="max-w-7xl mx-auto bg-teal-100/50 card-rounded py-20 px-8 md:px-14 lg:px-20 soft-shadow">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-[1.05]" style={{ color: "#192a43" }}>Visit Us</h2>
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-2">Address</span>
                  <p className="text-xl md:text-2xl font-semibold" style={{ color: "#192a43" }}>Surkhet Road, Nepalgunj-2,<br />Banke, Nepal</p>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-2">Contact</span>
                  <p className="text-xl md:text-2xl font-semibold" style={{ color: "#192a43" }}>+977-9869369273</p>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-2">Opening Hours</span>
                  <p className="text-xl md:text-2xl font-semibold" style={{ color: "#192a43" }}>Mon – Sun: 8:00 AM – 8:00 PM<br /><span className="text-xl" style={{ color: "#FF8C42" }}>including public holidays</span></p>
                </div>
              </div>
            </div>
            <div className="card-rounded overflow-hidden soft-shadow aspect-square bg-white">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.709084335404!2d81.6232509!3d28.063906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998677b25c0c72d%3A0x8596256d8a3a25cf!2sHorizon%20Vet%20Clinic%20%26%20Pet%20Shop!5e0!3m2!1sen!2snp!4v1764936701774!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-[#192a43] text-white card-rounded py-24 md:py-32 px-6 text-center soft-shadow-lg relative overflow-hidden">
          <div className="blob w-[500px] h-[500px] bg-[#FF8C42]/25 -top-60 -left-32" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-10">
              Ready For <span style={{ color: "#FF8C42" }}>better</span> care?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="bg-[#FF8C42] text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:shadow-xl smooth-hover">
                <CalendarCheck className="w-5 h-5" /> Confirm Appointment
              </Link>
              <a href="tel:+9779869369273" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/30 pill-rounded transition-colors hover:bg-white hover:text-[#192a43]">
                <PhoneCall className="w-4 h-4" /> Call +977-9869369273
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
