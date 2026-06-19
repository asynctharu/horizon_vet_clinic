import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stethoscope, Scissors, Syringe, Bone, Bird, Tractor, ShoppingBag, Quote } from "lucide-react";
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
  { icon: Stethoscope, title: "Consultation", desc: "Full health checkups for small animals & poultry.", tint: "bg-[#E8EFE8]" },
  { icon: Scissors, title: "Surgery", desc: "Specialized surgical repair & sterilization.", tint: "bg-[#EFEDF4]" },
  { icon: Syringe, title: "Vaccination", desc: "Protecting your animals against local diseases.", tint: "bg-[#FFE4E1]" },
  { icon: Bone, title: "Orthopedics", desc: "Bone & joint specialist treatments for pets.", tint: "bg-[#FDFCF8] border border-stone-100" },
  { icon: Bird, title: "Poultry", desc: "Dedicated care for backyard and commercial flocks.", tint: "bg-[#EFEDF4]" },
  { icon: Tractor, title: "Farm Visits", desc: "On-site consultation for livestock & dairy.", tint: "bg-[#E8EFE8]" },
  { icon: ShoppingBag, title: "Pet Shop", desc: "Premium food, supplements and accessories.", tint: "bg-[#FFE4E1]" },
  { icon: Stethoscope, title: "Diagnostics", desc: "Lab work and imaging for accurate treatment.", tint: "bg-[#FDFCF8] border border-stone-100" },
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
  { initials: "RK", quote: "My dog had an emergency and the team at Horizon was calm, quick, and so kind. Dr. Bhusal operated within hours.", name: "Ramesh K., Nepalgunj", rotate: "-rotate-1" },
  { initials: "BT", quote: "Finally a proper vet clinic in Nepalgunj! The pet shop has great products too. Clean, professional, and friendly staff.", name: "Bikram T., Nepalgunj", rotate: "rotate-1" },
  { initials: "SM", quote: "I bring all my poultry health concerns here. Dr. Ashish is very knowledgeable and explains everything clearly.", name: "Sunita M., Banke", rotate: "-rotate-1" },
];

const Home = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setImgIdx((i) => (i + 1) % clinicImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="bg-background relative overflow-x-hidden">
      <SEO
        title="Horizon Vet Clinic & Pet Shop | Nepalganj - Trusted Veterinary Care"
        description="Horizon Vet Clinic & Pet Shop in Nepalganj provides compassionate veterinary care, advanced pet treatments, vaccinations, surgeries, and personalized services."
        canonical="/"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 flex flex-col items-center text-center min-h-[90vh] justify-center">
        <div className="blob w-[420px] h-[420px] bg-[#FFE4E1] -top-20 -left-20" />
        <div className="blob w-[420px] h-[420px] bg-[#E6E6FA] -bottom-20 -right-20" style={{ animationDelay: "-3s" }} />

        <div className="max-w-5xl mx-auto relative z-10 animate-fade-up">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="w-2 h-2 bg-[#FFB7B2] pill-rounded" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Nepalgunj, Banke</span>
          </div>

          <h1 className="display-font text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[1.02] mb-10 text-foreground">
            Your Pet <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em] lowercase">deserves</span><br />
            the Best Care
          </h1>

          <p className="text-lg md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Compassionate. Expert. Always there for you. Horizon Vet Clinic is Nepalgunj's premier healthcare provider for pets, poultry, and livestock.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="btn-primary">Book Appointment →</Link>
            <Link to="/treatments" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 md:px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-[#292524] text-white card-rounded py-16 md:py-20 px-6 soft-shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,183,178,0.25) 41px)" }} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="display-font text-5xl md:text-6xl lg:text-7xl font-bold block mb-2">{s.number}</span>
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-60 font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet on sage card */}
      <section className="px-4 md:px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-[#E8EFE8] card-rounded py-20 md:py-28 px-8 md:px-14 lg:px-20 soft-shadow">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full bg-white card-rounded -z-10 transform -rotate-2" />
              <div className="relative w-full aspect-[4/3] overflow-hidden card-rounded soft-shadow">
                {clinicImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="Horizon Vet Clinic interior"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === imgIdx ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-6">Trusted Since Foundation</span>
              <h2 className="display-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.05] text-foreground">
                Nepalgunj's Premier <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">care</span> center
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                At Horizon Vet Clinic & Pet Shop, we believe every animal—from backyard poultry to beloved family dogs—deserves professional care. Our facility is run by qualified specialists Dr. Shiva Prasad Bhusal and Dr. Ashish Tharu, bringing surgical and medicinal excellence to the Banke district.
              </p>
              <Link to="/about" className="text-lg font-semibold text-[#FFB7B2] hover:underline inline-flex items-center gap-2">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="display-font text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">Our Services</h2>
            <p className="text-base font-medium text-muted-foreground md:max-w-xs">Complete diagnostics, surgical procedures, and livestock consultation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="soft-card group h-72 flex flex-col justify-between">
                <div className={`w-14 h-14 pill-rounded flex items-center justify-center ${s.tint}`}>
                  <s.icon className="w-7 h-7 stroke-[1.5] text-foreground" />
                </div>
                <div>
                  <h3 className="display-font text-xl font-bold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/treatments" className="btn-secondary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Clinic gallery — show real images of the clinic */}
      <section className="px-4 md:px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="display-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Inside our <span className="cursive-font text-[#FFB7B2] font-normal text-[1.15em]">clinic</span>
            </h2>
            <p className="text-base font-medium text-muted-foreground md:max-w-xs">
              A clean, modern facility built for the comfort of every animal and owner.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/assests/clinic photos/clinic-exterior.jpg", alt: "Horizon Vet Clinic exterior", span: "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" },
              { src: "/assests/clinic photos/treatment-with-patient.jpg", alt: "Veterinarian treating a patient", span: "aspect-square" },
              { src: "/assests/clinic photos/xray-diagnosis.jpg", alt: "X-ray diagnostic equipment", span: "aspect-square" },
              { src: "/assests/clinic photos/staff-at-work.jpg", alt: "Clinic staff at work", span: "aspect-square" },
              { src: "/assests/clinic photos/pet-shop-counter.jpg", alt: "Pet shop counter", span: "aspect-square" },
              { src: "/assests/clinic photos/pet-supplies.jpg", alt: "Pet supplies and accessories", span: "col-span-2 aspect-[2/1]" },
            ].map((img) => (
              <div key={img.src} className={`overflow-hidden card-rounded soft-shadow ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 md:hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors on lavender card */}
      <section className="px-4 md:px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-[#EFEDF4] card-rounded py-20 md:py-28 px-8 md:px-14 lg:px-20 soft-shadow">
          <h2 className="display-font text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-16 text-center text-foreground">
            The <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">specialists</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredDoctors.map((d) => <CardDoctor key={d.id} {...d} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className={`soft-card transform ${t.rotate} p-10`}>
              <Quote className="w-9 h-9 text-[#FFB7B2] mb-5" />
              <p className="text-lg font-medium leading-relaxed mb-8 text-foreground">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-stone-200" />
                <span className="cursive-font text-2xl text-muted-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-[#292524] text-white card-rounded py-28 md:py-36 px-6 text-center soft-shadow-lg relative overflow-hidden">
          <div className="blob w-[500px] h-[500px] bg-[#FFB7B2]/30 -top-60 -left-32" />
          <div className="blob w-[500px] h-[500px] bg-[#E8EFE8]/30 -bottom-60 -right-32" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="display-font text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Act Now For <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">their</span> Care
            </h2>
            <p className="text-lg md:text-xl font-medium opacity-70 mb-10 max-w-2xl mx-auto">
              Don't wait—your pet's health is our priority. Expert veterinary specialists are available 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="btn-primary">Confirm Appointment →</Link>
              <a href="tel:+9779869369273" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/30 pill-rounded transition-colors hover:bg-white hover:text-foreground">
                Call +977-9869369273
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
