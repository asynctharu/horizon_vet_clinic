import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stethoscope, Scissors, Syringe, Bone, Bird, Tractor, ShoppingBag } from "lucide-react";
import SEO from "@/components/SEO";
import CardDoctor from "@/components/CardDoctor";

const clinicImages = [
  "/assests/clinic serviice photo/Clinic Service photo1.jpg",
  "/assests/clinic serviice photo/Clinic Service photo2.jpg",
  "/assests/clinic serviice photo/Clinic Service photo3.jpg",
];

const stats = [
  { number: "02", label: "Expert Vets" },
  { number: "07", label: "Days Open" },
  { number: "12h", label: "Daily Service" },
  { number: "07+", label: "Care Services" },
];

const services = [
  { icon: Stethoscope, title: "Consultation", desc: "Full health checkups for small animals & poultry." },
  { icon: Scissors, title: "Surgery", desc: "Specialized surgical repair & sterilization." },
  { icon: Syringe, title: "Vaccination", desc: "Protecting your animals against local diseases." },
  { icon: Bone, title: "Orthopedics", desc: "Bone & joint specialist treatments for pets." },
  { icon: Bird, title: "Poultry", desc: "Dedicated care for backyard and commercial flocks." },
  { icon: Tractor, title: "Farm Visits", desc: "On-site consultation for livestock & dairy." },
  { icon: ShoppingBag, title: "Pet Shop", desc: "Premium food, supplements and accessories." },
  { icon: Stethoscope, title: "Diagnostics", desc: "Lab work and imaging for accurate treatment." },
];

const featuredDoctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    intro: "NVC Regd. No. 1197 | B.V.Sc & A.H., M.V.Sc. | Specialist in orthopedic surgery and advanced treatments.",
  },
  {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    intro: "NVC Regd. No. 2025 | B.V.Sc. & A.H. | Experienced in treating domestic and pet animals.",
  },
];

const testimonials = [
  { initials: "RK", quote: "My dog had an emergency and the team at Horizon was calm, quick, and so kind. Dr. Bhusal operated within hours.", name: "Ramesh K., Nepalgunj" },
  { initials: "BT", quote: "Finally a proper vet clinic in Nepalgunj! The pet shop has great products too. Clean, professional, and friendly staff.", name: "Bikram T., Nepalgunj" },
  { initials: "SM", quote: "I bring all my poultry health concerns here. Dr. Ashish is very knowledgeable and explains everything clearly.", name: "Sunita M., Banke" },
];

const Home = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setImgIdx((i) => (i + 1) % clinicImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="bg-background">
      <SEO
        title="Horizon Vet Clinic & Pet Shop | Nepalganj - Trusted Veterinary Care"
        description="Horizon Vet Clinic & Pet Shop in Nepalganj provides compassionate veterinary care, advanced pet treatments, vaccinations, surgeries, and personalized services."
        canonical="/"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 flex items-center gap-6 animate-fade-up">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Nepalgunj, Banke</span>
          </div>
          <h1 className="display-font text-5xl sm:text-7xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase mb-12 animate-fade-up delay-100">
            Your Pet<br />Deserves The<br />Best Care
          </h1>
          <div className="grid lg:grid-cols-2 gap-10 items-end animate-fade-up delay-200">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Compassionate. Expert. Always there for you. Horizon Vet Clinic is Nepalgunj's premier healthcare provider for pets, poultry, and livestock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link to="/appointment" className="btn-primary">Book Appointment →</Link>
              <Link to="/treatments" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground text-background relative py-20 section-border overflow-hidden">
        <div className="absolute inset-0 pattern-stats pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="display-font text-6xl md:text-7xl font-bold block mb-2">{s.number}</span>
              <span className="mono-label opacity-60">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="border-4 border-foreground p-3">
              <img
                src="/assests/clinic serviice photo/Clinic Service photo1.jpg"
                alt="Horizon Vet Clinic interior"
                className="w-full grayscale aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <span className="mono-label block mb-8">Trusted Since Foundation</span>
              <h2 className="display-font text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10 leading-none">
                Nepalgunj's Premier Veterinary Care
              </h2>
              <p className="text-lg leading-relaxed mb-10 opacity-80">
                At Horizon Vet Clinic & Pet Shop, we believe every animal—from backyard poultry to beloved family dogs—deserves professional care. Our facility is run by qualified specialists Dr. Shiva Prasad Bhusal and Dr. Ashish Tharu, bringing surgical and medicinal excellence to the Banke district.
              </p>
              <Link to="/about" className="display-font text-2xl italic hover:line-through">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="display-font text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-none">Services</h2>
            <p className="mono-label md:max-w-xs opacity-60">Complete diagnostics, surgical procedures, and livestock consultation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-foreground">
            {services.map((s, i) => (
              <div key={i} className="inversion-hover group border-r border-b border-foreground p-10 h-72 flex flex-col justify-between">
                <s.icon className="w-12 h-12 stroke-[1.5]" />
                <div>
                  <h3 className="display-font text-xl font-bold uppercase mb-3">{s.title}</h3>
                  <p className="text-sm opacity-70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/treatments" className="btn-secondary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-font text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-16 text-center">
            The Specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredDoctors.map((d) => <CardDoctor key={d.id} {...d} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 border border-foreground">
            {testimonials.map((t, i) => (
              <div key={i} className={`inversion-hover group p-12 ${i < 2 ? "border-b lg:border-b-0 lg:border-r border-foreground" : ""}`}>
                <span className="display-font text-8xl font-black opacity-10 leading-none block mb-[-1rem]">"</span>
                <p className="display-font text-xl italic font-medium leading-relaxed mb-10">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-foreground flex items-center justify-center mono-font text-[10px] font-bold">{t.initials}</div>
                  <span className="mono-label">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-background relative py-32 lg:py-40 overflow-hidden text-center">
        <div className="absolute inset-0 cta-glow pointer-events-none" />
        <div className="absolute inset-0 pattern-stats pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="display-font text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-10">
            Act Now For<br />Their Care
          </h2>
          <p className="text-lg md:text-xl font-light opacity-60 mb-12 max-w-2xl mx-auto italic">
            Don't wait—your pet's health is our priority. Expert veterinary specialists are available 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default Home;
