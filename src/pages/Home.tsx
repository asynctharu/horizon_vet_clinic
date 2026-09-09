import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import {
  Stethoscope,
  Scissors,
  ShoppingBasket,
  CalendarCheck,
  CheckCircle,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Vet Consultations",
    desc: "Routine check-ups, vaccinations, and comprehensive diagnostic evaluations.",
    img: "/assests/clinic photos/treatment-with-patient.jpg",
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    desc: "Professional styling, medicated baths, and gentle handling for all breeds.",
    img: "/assests/clinic photos/staff-at-work.jpg",
  },
  {
    icon: ShoppingBasket,
    title: "Pet Shop",
    desc: "Premium food, toys, and essential accessories for your beloved pets.",
    img: "/assests/clinic photos/pet-shop-counter.jpg",
  },
];

const doctors = [
  {
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery Specialist",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    desc: "A highly qualified Veterinary Surgery Specialist with advanced M.V.Sc. training. Performs hundreds of successful surgeries annually on pets and livestock.",
    tags: ["Surgery", "Orthopedics", "Emergency"],
  },
  {
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine Specialist",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    desc: "A dedicated veterinary professional with expertise in medicine, diagnostics, and preventive care. Known for his calm, approachable manner with both pets and owners.",
    tags: ["Medicine", "Vaccination", "Poultry"],
  },
];

const gallery = [
  { src: "/assests/clinic photos/clinic-exterior.jpg", alt: "Horizon Vet clinic exterior" },
  { src: "/assests/clinic photos/pet-shop-counter.jpg", alt: "Pet shop counter" },
  { src: "/assests/clinic photos/treatment-with-patient.jpg", alt: "Treatment with patient" },
  { src: "/assests/clinic photos/xray-diagnosis.jpg", alt: "X-ray diagnosis" },
  { src: "/assests/clinic photos/pet-supplies.jpg", alt: "Pet supplies" },
  { src: "/assests/clinic photos/staff-at-work.jpg", alt: "Staff at work" },
];

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Horizon Vet Clinic | Nepalganj - Where Every Pet Feels at Home"
        description="Horizon Vet Clinic & Pet Shop in Nepalganj provides expert veterinary care, pet grooming, and pet supplies. Book an appointment today."
        canonical="/"
      />

      {/* ── HERO: centered editorial with photo fan ── */}
      <header className="relative overflow-hidden pt-16 pb-10 px-6 text-center animate-fade-up">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#FF8C42] rounded-full text-sm font-bold mb-6">
            Nepalganj's #1 Pet Care Center
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 display-font" style={{ color: "#192a43" }}>
            Where Every Pet <span className="display-italic" style={{ color: "#FF8C42" }}>Feels at Home</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            From surgical expertise to professional grooming, we treat your furry and feathered friends like our own
            family. 10+ years of compassionate care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-[#FF8C42] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-xl smooth-hover"
            >
              <CalendarCheck className="w-5 h-5" />
              Find a Slot
            </Link>
            <a
              href="tel:+9779869369273"
              className="flex items-center gap-2 bg-white text-[#192a43] border-2 border-[#192a43]/10 px-8 py-4 rounded-full font-bold text-lg hover:border-[#FF8C42] smooth-hover"
            >
              <PhoneCall className="w-5 h-5 text-[#FF8C42]" />
              Call the Clinic
            </a>
          </div>
        </div>

        {/* Photo fan */}
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 md:gap-6 items-end relative z-10">
          <img
            src="/assests/clinic photos/clinic-exterior.jpg"
            className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-xl md:-rotate-3 md:translate-y-6"
            alt="Horizon Vet clinic exterior"
          />
          <img
            src="/assests/clinic photos/treatment-with-patient.jpg"
            className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-2xl"
            alt="Treatment with patient"
          />
          <img
            src="/assests/clinic photos/pet-shop-counter.jpg"
            className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-xl md:rotate-3 md:translate-y-6"
            alt="Pet shop counter"
          />
        </div>
        <div className="absolute top-40 -left-24 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-64 -right-24 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-50" />
      </header>

      {/* ── ABOUT SPLIT ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center animate-fade-up">
          <img
            src="/assests/clinic photos/staff-at-work.jpg"
            alt="Our staff at work"
            className="w-full aspect-[4/3] object-cover rounded-[2.5rem] soft-shadow-lg"
          />
          <div>
            <p className="editorial-eyebrow mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl display-font mb-6 leading-tight" style={{ color: "#192a43" }}>
              Dedicated to Their <span className="display-italic" style={{ color: "#FF8C42" }}>Happiness & Health</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              At Horizon Vet, we don't just treat symptoms; we care for the whole pet. Our facility is equipped with
              state-of-the-art diagnostic tools, but our real strength lies in the gentle touch of our staff.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              {[
                { icon: CheckCircle, title: "24/7 ICU", desc: "Constant monitoring for critical cases." },
                { icon: CheckCircle, title: "Advanced Surgery", desc: "Modern operating theater with expert surgeons." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="w-6 h-6 text-[#FF8C42] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: "#192a43" }}>{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES: numbered steps ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-up">
          <p className="editorial-eyebrow mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl display-font mb-4" style={{ color: "#192a43" }}>
            Professional Care For <span className="display-italic" style={{ color: "#0097A7" }}>Every Life Stage</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide a full spectrum of veterinary services designed to keep your pets happy, healthy, and thriving
            for years to come.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`soft-card flex flex-col md:flex-row items-center gap-8 animate-fade-up ${["delay-100", "delay-200", "delay-300"][i]}`}
            >
              <span className="display-font text-6xl md:text-7xl shrink-0 text-orange-200 leading-none select-none">
                0{i + 1}
              </span>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <s.icon className="w-6 h-6 text-[#FF8C42]" />
                  <h3 className="text-2xl font-bold" style={{ color: "#192a43" }}>{s.title}</h3>
                </div>
                <p className="text-gray-500">{s.desc}</p>
              </div>
              <img
                src={s.img}
                alt={s.title}
                className="w-full md:w-56 h-40 object-cover rounded-3xl shrink-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CLINIC GALLERY ── */}
      <section className="py-24 px-6 bg-[#FCF7F0]">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <div className="text-center mb-16">
            <p className="editorial-eyebrow mb-4">Inside Horizon Vet</p>
            <h2 className="text-4xl md:text-5xl display-font" style={{ color: "#192a43" }}>
              A Clinic That Feels Like <span className="display-italic" style={{ color: "#FF8C42" }}>Home</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                className="w-full aspect-square object-cover rounded-[2rem] soft-shadow hover:scale-[1.02] transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEAM ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="editorial-eyebrow mb-4">Our Specialists</p>
              <h2 className="text-4xl md:text-5xl display-font mb-4" style={{ color: "#192a43" }}>
                Meet Our <span className="display-italic" style={{ color: "#FF8C42" }}>Veterinarians</span>
              </h2>
              <p className="text-gray-500 max-w-xl">
                NVC-registered specialists with decades of combined experience in animal care.
              </p>
            </div>
            <Link
              to="/doctors"
              className="hidden md:flex items-center gap-2 font-bold text-[#FF8C42] hover:underline uppercase text-sm tracking-widest"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doc, i) => (
              <div
                key={doc.name}
                className={`bg-[#FCF7F0] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 soft-shadow hover:shadow-xl smooth-hover ${["animate-fade-up delay-100", "animate-fade-up delay-200"][i]}`}
              >
                <div className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-[2rem]">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-center transition-all duration-700 md:hover:scale-110"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#FF8C42] mb-1">{doc.specialty}</p>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "#192a43" }}>{doc.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{doc.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map((t) => (
                      <span key={t} className="text-xs font-medium px-3 py-1.5 bg-white border border-stone-200 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 font-bold text-[#FF8C42] hover:underline uppercase text-sm tracking-widest"
            >
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY BAR ── */}
      <section className="bg-[#FF8C42] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Pet Emergency?</h3>
              <p className="text-orange-100 text-lg font-medium">We are open 7 days a week for urgent care.</p>
            </div>
          </div>
          <a
            href="tel:+9779869369273"
            className="bg-white text-[#FF8C42] px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:scale-105 smooth-hover"
          >
            Call Now: +977-9869369273
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-6 py-20 bg-[#FCF7F0]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl display-font mb-6" style={{ color: "#192a43" }}>
            Ready to Give Your Pet the <span className="display-italic" style={{ color: "#FF8C42" }}>Best Care</span>?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our expert veterinarians today. We're here 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-[#FF8C42] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-xl smooth-hover inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:+9779869369273"
              className="bg-white text-[#192a43] border-2 border-[#192a43]/10 px-10 py-4 rounded-full font-bold text-lg hover:border-[#FF8C42] smooth-hover inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-[#FF8C42]" />
              Call +977-9869369273
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
