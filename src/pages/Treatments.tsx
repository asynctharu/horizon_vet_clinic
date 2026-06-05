import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Stethoscope, Scissors, Bone, Syringe, ShoppingBag, Building2, Bird, Check } from "lucide-react";

const treatments = [
  {
    id: "pet-consultation",
    title: "Pet & Animal Treatment",
    icon: Stethoscope,
    fullDesc: "Comprehensive treatment for all kinds of domestic and pet animals with proper consultation. Our experienced veterinarians ensure accurate diagnosis and effective treatment plans.",
    services: ["General health check-ups", "Disease diagnosis and treatment", "Emergency veterinary care", "Dental care for pets", "Skin and coat treatment", "Nutritional counseling"],
  },
  {
    id: "surgery",
    title: "Castration & Spaying",
    icon: Scissors,
    fullDesc: "Professional castration and spaying services performed by skilled veterinarians in a sterile, safe environment to ensure quick recovery and minimal discomfort.",
    services: ["Dog castration surgery", "Cat castration surgery", "Dog spaying surgery", "Cat spaying surgery", "Pre-surgical consultations", "Post-operative care"],
  },
  {
    id: "orthopedic-surgery",
    title: "Orthopedic Surgery",
    icon: Bone,
    fullDesc: "Address bone fractures, joint problems, and musculoskeletal injuries in pets and animals using modern surgical techniques to restore mobility.",
    services: ["Fracture repair and fixation", "Joint surgery", "Ligament repair", "Hip and elbow treatment", "Bone plating procedures", "Rehabilitation guidance"],
  },
  {
    id: "vaccination",
    title: "Vaccination Services",
    icon: Syringe,
    fullDesc: "All kinds of vaccines for broilers, layers, dogs, and cats. Our programs protect your animals from common and serious diseases.",
    services: ["Dog vaccinations", "Cat vaccinations", "Broiler vaccinations", "Layer hen vaccinations", "Puppy/kitten schedules", "Vaccination records"],
  },
  {
    id: "poultry-services",
    title: "Poultry Services",
    icon: Bird,
    fullDesc: "Postmortem examination and comprehensive health management for your poultry. We help farmers identify disease and implement preventive measures.",
    services: ["Postmortem examination", "Disease diagnosis", "Flock health management", "Vaccination programs", "Biosecurity consultation", "Nutritional advice"],
  },
  {
    id: "farm-consultation",
    title: "Farm Consultation",
    icon: Building2,
    fullDesc: "Expert consultation for commercial farms including dairy, poultry, and livestock operations. Optimize animal health and productivity.",
    services: ["Dairy farm consultation", "Poultry farm management", "Livestock health programs", "Feed and nutrition planning", "Disease prevention", "Biosecurity assessment"],
  },
  {
    id: "pet-shop",
    title: "Pet Shop",
    icon: ShoppingBag,
    fullDesc: "Pet food, nutritional supplements, and pet-friendly equipment. We stock quality products to keep your pets healthy and happy.",
    services: ["Premium pet food brands", "Nutritional supplements", "Pet accessories", "Grooming supplies", "Carriers and crates", "Wellness products"],
  },
];

const reasons = [
  { num: "01", title: "Registered Specialists", desc: "Both veterinarians are NVC certified with advanced Master's degrees and regional expertise." },
  { num: "02", title: "Modern Equipment", desc: "Our surgical suite is equipped with the latest diagnostic and treatment technology." },
  { num: "03", title: "Transparent Pricing", desc: "Quality care without hidden surgical costs, surprise fees, or unnecessary expenses." },
  { num: "04", title: "Open 7 Days", desc: "12-hour daily service including public holidays and weekends." },
];

const Treatments = () => {
  return (
    <main className="bg-background">
      <SEO
        title="Veterinary Services | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Comprehensive veterinary services in Nepalganj: pet treatment, vaccinations, surgeries, orthopedic care, poultry services, and pet shop."
        canonical="/treatments"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Comprehensive Care</span>
          </div>
          <h1 className="display-font text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-10">
            Our<br />Services
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl italic">
            Complete veterinary care under one roof. Expert diagnostic, surgical, and therapeutic treatments for every animal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-foreground">
          {treatments.map((t) => (
            <div key={t.id} id={t.id} className="inversion-hover group border-r border-b border-foreground p-10 min-h-[420px] flex flex-col justify-between">
              <div className="space-y-6">
                <t.icon className="w-14 h-14 stroke-[1.5]" />
                <h2 className="display-font text-3xl font-bold uppercase tracking-tight">{t.title}</h2>
                <p className="text-base leading-relaxed opacity-70">{t.fullDesc}</p>
              </div>
              <ul className="mt-8 space-y-2">
                {t.services.slice(0, 4).map((s) => (
                  <li key={s} className="flex items-start gap-2 mono-font text-[11px] uppercase tracking-wide opacity-70">
                    <Check className="w-3 h-3 mt-1 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-font text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-tighter leading-none mb-16">
            Why Choose<br />Horizon
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.num} className="inversion-hover group border-2 border-foreground p-8 bg-background">
                <span className="mono-label opacity-40 block mb-6">Reason {r.num}</span>
                <h3 className="display-font text-2xl font-bold uppercase mb-4">{r.title}</h3>
                <p className="text-sm leading-relaxed opacity-70">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 pattern-stats pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="display-font text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-10">
            Ready To<br />Schedule?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-background text-foreground border-2 border-background px-10 py-5 mono-font text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-foreground hover:text-background transition-colors">
              Book Appointment →
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

export default Treatments;
