import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Stethoscope,
  Scissors,
  Syringe,
  Bone,
  Bird,
  Tractor,
  ShoppingBag,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import SEO from "@/components/SEO";

const clinicImages = [
  "/assests/clinic serviice photo/Clinic Service photo1.jpg",
  "/assests/clinic serviice photo/Clinic Service photo2.jpg",
  "/assests/clinic serviice photo/Clinic Service photo3.jpg",
];

const legacyStats = [
  { roman: "II", label: "Expert Specialists" },
  { roman: "VII", label: "Days a Week" },
  { roman: "XIIh", label: "Daily Service" },
  { roman: "VII+", label: "Care Services" },
];

const services = [
  { icon: Syringe, title: "Vaccinations", desc: "Protective shots tailored for your animal's age and species." },
  { icon: Stethoscope, title: "Wellness Exams", desc: "Thorough checkups that catch concerns before they grow." },
  { icon: Scissors, title: "Surgery", desc: "Advanced surgical care with full pre and post-op support." },
  { icon: Bone, title: "Orthopedics", desc: "Specialist treatment for bone, joint and mobility issues." },
  { icon: Bird, title: "Poultry Care", desc: "Dedicated programs for backyard and commercial flocks." },
  { icon: Tractor, title: "Farm Visits", desc: "On-site consultation for livestock, dairy and large animals." },
  { icon: ShoppingBag, title: "Pet Boutique", desc: "Curated food, supplements and accessories in-clinic." },
  { icon: Stethoscope, title: "Laboratory", desc: "In-house diagnostics for fast, accurate treatment decisions." },
];

const featuredDoctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    title: "Veterinary Surgery Specialist",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    credentials: "NVC No. 1197 · B.V.Sc & A.H., M.V.Sc.",
    bio: "A highly qualified surgery specialist with proven experience in orthopedic and soft-tissue procedures across Nepal.",
  },
  {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    title: "Veterinary Medicine Specialist",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    credentials: "NVC No. 2025 · B.V.Sc. & A.H.",
    bio: "Dedicated practitioner with a strong foundation in modern small-animal medicine, diagnostics and preventive care.",
  },
];

const essentials = [
  { name: "Vitamin & Mineral Mix", category: "Premium Nutrition", price: "Rs. 550", image: "/assests/clinic photos/pet-supplies.jpg" },
  { name: "Calcium-P Supplement", category: "Daily Support", price: "Rs. 450", image: "/assests/clinic photos/pet-shop-counter.jpg" },
  { name: "Pet Comfort Apparel", category: "Lifestyle", price: "Rs. 950", image: "/assests/clinic photos/treatment-with-patient.jpg" },
  { name: "Herbal Liver Tonic", category: "Wellness Tonic", price: "Rs. 480", image: "/assests/clinic photos/staff-at-work.jpg" },
];

const Home = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setImgIdx((i) => (i + 1) % clinicImages.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="bg-[hsl(var(--cream))] relative overflow-x-hidden">
      <SEO
        title="Horizon Vet Clinic & Pet Shop | Nepalganj - Trusted Veterinary Care"
        description="Horizon Vet Clinic & Pet Shop in Nepalganj provides compassionate veterinary care, advanced pet treatments, vaccinations, surgeries, and personalized services."
        canonical="/"
      />

      {/* ───────────────── HERO ───────────────── */}
      <section className="pt-32 md:pt-36 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: editorial headline */}
          <div className="lg:col-span-6 lg:pt-10 animate-fade-up">
            <p className="editorial-eyebrow mb-8">Continuing a 30-year practice of care</p>
            <h1 className="display-font text-[hsl(var(--ink))] leading-[1.02] tracking-tight text-[2.75rem] sm:text-6xl lg:text-[5.25rem] mb-8">
              The Pinnacle
              <br />
              of <span className="display-italic">Veterinary</span>
              <br />
              Care
            </h1>
            <p className="body-sans text-muted-foreground text-base md:text-[1.05rem] leading-relaxed max-w-md mb-10">
              Welcome to Horizon, Nepalgunj's premier animal healthcare destination. Rooted in three decades of compassionate
              expertise, we deliver bespoke medical solutions for your cherished companions.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-3 bg-[hsl(var(--ink))] text-[hsl(var(--cream))] px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold rounded-sm hover:bg-[hsl(var(--ink))]/90 transition-colors"
              >
                Book Consultation <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/treatments"
                className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[hsl(var(--gold))] border-b border-[hsl(var(--gold))]/40 pb-1 hover:border-[hsl(var(--gold))]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right: framed photo card */}
          <div className="lg:col-span-6 animate-fade-up delay-200">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                {clinicImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="Compassionate care at Horizon Vet Clinic"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      i === imgIdx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ink))]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[hsl(var(--cream))]">
                  <p className="editorial-eyebrow mb-2 flex items-center gap-2" style={{ color: "hsl(var(--gold))" }}>
                    <MapPin className="w-3 h-3" /> Surkhet Road, Nepalgunj
                  </p>
                  <p className="display-font text-2xl md:text-3xl">Open 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── ROMAN STATS BAR ───────────────── */}
      <section className="border-y border-[hsl(var(--ink))]/10 bg-[hsl(var(--bone))]/40">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[hsl(var(--ink))]/10">
          {legacyStats.map((s) => (
            <div key={s.label} className="text-center py-12 md:py-16 px-4">
              <div className="display-font text-[hsl(var(--ink))] text-4xl md:text-5xl mb-3">{s.roman}</div>
              <div className="editorial-eyebrow">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── LEGACY ───────────────── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="editorial-eyebrow mb-6">Our Legacy</p>
            <h2 className="display-font text-[hsl(var(--ink))] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight">
              Three Decades of
              <br />
              <span className="display-italic">Compassionate</span> Care
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 body-sans text-muted-foreground text-base md:text-[1.05rem] leading-[1.85] max-w-xl">
              <p>
                Horizon Vet Clinic was established with a singular mission: to bring genuinely modern veterinary care to the
                people of Nepalgunj and the surrounding Banke district. Our chief surgeon, Dr. Shiva Prasad Bhusal, and our lead
                medicine specialist, Dr. Ashish Tharu, anchor a practice rooted in honesty and craft.
              </p>
              <p>
                We have built a clinic that families return to, generation after generation — from emergency surgery to gentle
                routine wellness, every visit is treated with the same level of attention.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-10 text-[11px] tracking-[0.22em] uppercase font-semibold text-[hsl(var(--gold))] border-b border-[hsl(var(--gold))]/40 pb-1"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── SERVICES ───────────────── */}
      <section className="pb-28 md:pb-36 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="editorial-eyebrow mb-5">Comprehensive Care</p>
            <h2 className="display-font text-[hsl(var(--ink))] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05]">
              Bespoke Veterinary <span className="display-italic">Services</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-[hsl(var(--gold))]" />
          </div>

          <div className="bg-white border border-[hsl(var(--ink))]/8 rounded-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 divide-x divide-y md:divide-y-0 divide-[hsl(var(--ink))]/8">
              {services.map((s) => (
                <div key={s.title} className="p-7 lg:p-8 group hover:bg-[hsl(var(--bone))]/40 transition-colors">
                  <s.icon className="w-6 h-6 text-[hsl(var(--gold))] mb-5 stroke-[1.4]" />
                  <h3 className="display-font text-lg text-[hsl(var(--ink))] mb-2">{s.title}</h3>
                  <p className="body-sans text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/treatments"
              className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[hsl(var(--ink))] border-b border-[hsl(var(--ink))]/30 pb-1 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── SPECIALISTS ───────────────── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[hsl(var(--bone))]/40 border-y border-[hsl(var(--ink))]/8">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="editorial-eyebrow mb-5">Expert Medical Team</p>
            <h2 className="display-font text-[hsl(var(--ink))] text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05]">
              The <span className="display-italic">Specialists</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-[hsl(var(--gold))]" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredDoctors.map((d) => (
              <Link
                key={d.id}
                to={`/doctors/${d.id}`}
                className="group bg-white p-6 md:p-8 rounded-sm border border-[hsl(var(--ink))]/8 hover:border-[hsl(var(--gold))]/50 transition-colors flex gap-6"
              >
                <div className="w-32 md:w-40 flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <p className="editorial-eyebrow mb-2">{d.credentials}</p>
                  <h3 className="display-font text-xl md:text-2xl text-[hsl(var(--ink))] mb-1 leading-tight">{d.name}</h3>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">{d.title}</p>
                  <p className="body-sans text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CURATED ESSENTIALS ───────────────── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="editorial-eyebrow mb-4">The Boutique</p>
              <h2 className="display-font text-[hsl(var(--ink))] text-4xl md:text-5xl leading-[1.05]">
                Curated <span className="display-italic">Essentials</span>
              </h2>
            </div>
            <Link
              to="/treatments"
              className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[hsl(var(--gold))] border-b border-[hsl(var(--gold))]/40 pb-1"
            >
              Discover the Collection
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {essentials.map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[hsl(var(--bone))] rounded-sm mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="editorial-eyebrow mb-1.5">{p.category}</p>
                <h3 className="display-font text-base md:text-lg text-[hsl(var(--ink))] mb-1">{p.name}</h3>
                <p className="text-sm text-[hsl(var(--gold))]">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── FINAL EDITORIAL CTA ───────────────── */}
      <section className="px-4 md:px-6 pb-16">
        <div className="max-w-[1240px] mx-auto bg-[hsl(var(--ink))] text-[hsl(var(--cream))] rounded-sm py-24 md:py-32 px-8 text-center">
          <p className="editorial-eyebrow mb-6" style={{ color: "hsl(var(--gold))" }}>Reserve Your Visit</p>
          <h2 className="display-font text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] mb-8 max-w-2xl mx-auto">
            Their wellbeing, <span className="display-italic">our priority</span>
          </h2>
          <p className="body-sans text-base md:text-lg leading-relaxed opacity-70 max-w-xl mx-auto mb-10">
            Available seven days a week with expert specialists ready to care for every member of your family — feathered,
            furred or four-hooved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-3 bg-[hsl(var(--cream))] text-[hsl(var(--ink))] px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold rounded-sm hover:bg-white transition-colors"
            >
              Book Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+9779869369273"
              className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[hsl(var(--cream))]/80 border-b border-[hsl(var(--cream))]/30 pb-1 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-colors"
            >
              Call +977-9869369273
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
