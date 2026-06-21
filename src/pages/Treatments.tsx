import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Stethoscope, Scissors, Bone, Syringe, ShoppingBag, Building2, Bird, Check, CalendarCheck, PhoneCall } from "lucide-react";

const treatments = [
  {
    id: "pet-consultation",
    title: "Pet & Animal Treatment",
    icon: Stethoscope,
    fullDesc: "Comprehensive treatment for all kinds of domestic and pet animals with proper consultation. Our experienced veterinarians ensure accurate diagnosis and effective treatment plans.",
    services: ["General health check-ups", "Disease diagnosis and treatment", "Emergency veterinary care", "Dental care for pets", "Skin and coat treatment", "Nutritional counseling"],
    tint: "bg-teal-100",
  },
  {
    id: "surgery",
    title: "Castration & Spaying",
    icon: Scissors,
    fullDesc: "Professional castration and spaying services performed by skilled veterinarians in a sterile, safe environment to ensure quick recovery and minimal discomfort.",
    services: ["Dog castration surgery", "Cat castration surgery", "Dog spaying surgery", "Cat spaying surgery", "Pre-surgical consultations", "Post-operative care"],
    tint: "bg-orange-100",
  },
  {
    id: "orthopedic-surgery",
    title: "Orthopedic Surgery",
    icon: Bone,
    fullDesc: "Address bone fractures, joint problems, and musculoskeletal injuries in pets and animals using modern surgical techniques to restore mobility.",
    services: ["Fracture repair and fixation", "Joint surgery", "Ligament repair", "Hip and elbow treatment", "Bone plating procedures", "Rehabilitation guidance"],
    tint: "bg-[#FCF7F0]",
  },
  {
    id: "vaccination",
    title: "Vaccination Services",
    icon: Syringe,
    fullDesc: "All kinds of vaccines for broilers, layers, dogs, and cats. Our programs protect your animals from common and serious diseases.",
    services: ["Dog vaccinations", "Cat vaccinations", "Broiler vaccinations", "Layer hen vaccinations", "Puppy/kitten schedules", "Vaccination records"],
    tint: "bg-teal-100",
  },
  {
    id: "poultry-services",
    title: "Poultry Services",
    icon: Bird,
    fullDesc: "Postmortem examination and comprehensive health management for your poultry. We help farmers identify disease and implement preventive measures.",
    services: ["Postmortem examination", "Disease diagnosis", "Flock health management", "Vaccination programs", "Biosecurity consultation", "Nutritional advice"],
    tint: "bg-orange-100",
  },
  {
    id: "farm-consultation",
    title: "Farm Consultation",
    icon: Building2,
    fullDesc: "Expert consultation for commercial farms including dairy, poultry, and livestock operations. Optimize animal health and productivity.",
    services: ["Dairy farm consultation", "Poultry farm management", "Livestock health programs", "Feed and nutrition planning", "Disease prevention", "Biosecurity assessment"],
    tint: "bg-[#FCF7F0]",
  },
  {
    id: "pet-shop",
    title: "Pet Shop",
    icon: ShoppingBag,
    fullDesc: "Pet food, nutritional supplements, and pet-friendly equipment. We stock quality products to keep your pets healthy and happy.",
    services: ["Premium pet food brands", "Nutritional supplements", "Pet accessories", "Grooming supplies", "Carriers and crates", "Wellness products"],
    tint: "bg-teal-100",
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
    <main className="bg-[#FCF7F0] relative overflow-x-hidden">
      <SEO
        title="Veterinary Services | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Comprehensive veterinary services in Nepalganj: pet treatment, vaccinations, surgeries, orthopedic care, poultry services, and pet shop."
        canonical="/treatments"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[500px] h-[500px] bg-orange-100 -top-20 -left-20" />
        <div className="blob w-[400px] h-[400px] bg-teal-100 -bottom-20 -right-20" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-5">Comprehensive Care</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-8" style={{ color: "#192a43" }}>
            Our <span style={{ color: "#FF8C42" }}>services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Complete veterinary care under one roof. Expert diagnostic, surgical, and therapeutic treatments for every animal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {treatments.map((t, i) => (
            <div key={t.id} id={t.id} className={`soft-card group min-h-[420px] flex flex-col ${["animate-fade-up delay-100", "animate-fade-up delay-200", "animate-fade-up delay-300", "animate-fade-up delay-100", "animate-fade-up delay-200", "animate-fade-up delay-300", "animate-fade-up delay-100"][i]}`}>
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 pill-rounded flex items-center justify-center ${t.tint}`}>
                  <t.icon className="w-7 h-7 stroke-[1.5] text-[#192a43]" />
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-3" style={{ color: "#192a43" }}>{t.title}</h2>
              <p className="text-sm leading-relaxed text-gray-500 mb-6">{t.fullDesc}</p>
              <ul className="mt-auto space-y-2">
                {t.services.slice(0, 4).map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FF8C42]" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-4 md:px-6 my-12 animate-fade-up">
        <div className="max-w-7xl mx-auto bg-teal-100/50 card-rounded py-20 px-8 md:px-14 lg:px-20 soft-shadow">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-14" style={{ color: "#192a43" }}>
            Why Choose <span style={{ color: "#FF8C42" }}>Horizon</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.num} className="bg-white card-rounded p-8 soft-shadow">
                <span className="text-4xl font-bold block mb-3" style={{ color: "#FF8C42" }}>{r.num}</span>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#192a43" }}>{r.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 mb-12 animate-fade-up">
        <div className="max-w-7xl mx-auto bg-[#192a43] text-white card-rounded py-24 md:py-32 px-6 text-center soft-shadow-lg relative overflow-hidden">
          <div className="blob w-[500px] h-[500px] bg-[#FF8C42]/25 -top-60 -left-32" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-10">
              Ready to <span style={{ color: "#FF8C42" }}>schedule</span>?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="bg-[#FF8C42] text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:shadow-xl smooth-hover">
                <CalendarCheck className="w-5 h-5" /> Book Appointment
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

export default Treatments;
