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

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Horizon Vet Clinic | Nepalganj - Where Every Pet Feels at Home"
        description="Horizon Vet Clinic & Pet Shop in Nepalganj provides expert veterinary care, pet grooming, and pet supplies. Book an appointment today."
        canonical="/"
      />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden pt-12 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center animate-fade-up">
        <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#FF8C42] rounded-full text-sm font-bold mb-6">
            Nepalganj's #1 Pet Care Center
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: "#192a43" }}>
            Where Every Pet <span style={{ color: "#FF8C42" }}>Feels at Home</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            From surgical expertise to professional grooming, we treat your furry and feathered friends like our own
            family. 10+ years of compassionate care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-[#192a43] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl smooth-hover"
            >
              <CalendarCheck className="w-5 h-5" />
              Find a Slot
            </Link>

          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-4">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100"
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
                alt="Happy pet parent"
              />
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=100&h=100"
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
                alt="Happy pet parent"
              />
              <img
                src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=100&h=100"
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
                alt="Happy pet parent"
              />
            </div>
            <p className="text-sm font-medium text-gray-500">
              <span className="text-[#192a43] font-bold">4.9/5 Rating</span> from 2,000+ Happy Pet Parents
            </p>
          </div>
        </div>

        {/* Right: blob-shaped image grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600&h=800"
                className="w-full aspect-[3/4] object-cover pet-blob-alt shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
                alt="Happy dog"
              />
              <img
                src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600&h=400"
                className="w-full aspect-square object-cover pet-blob shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
                alt="Cute cat"
              />
            </div>
            <div className="pt-12 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600&h=400"
                className="w-full aspect-square object-cover pet-blob shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
                alt="Playful puppy"
              />
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600&h=800"
                className="w-full aspect-[3/4] object-cover pet-blob-alt shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
                alt="Fluffy rabbit"
              />
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -z-0" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 -z-0" />
        </div>
      </header>

      {/* ── SERVICES ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#192a43" }}>
            Professional Care For <span style={{ color: "#0097A7" }}>Every Life Stage</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide a full spectrum of veterinary services designed to keep your pets happy, healthy, and thriving
            for years to come.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Stethoscope,
              title: "Vet Consultations",
              desc: "Routine check-ups, vaccinations, and comprehensive diagnostic evaluations.",
              img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=400&h=250",
              accent: "#FF8C42",
            },
            {
              icon: Scissors,
              title: "Pet Grooming",
              desc: "Professional styling, medicated baths, and gentle handling for all breeds.",
              img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400&h=250",
              accent: "#0097A7",
            },
            {
              icon: ShoppingBasket,
              title: "Pet Shop",
              desc: "Premium food, toys, and essential accessories for your beloved pets.",
              img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=250",
              accent: "#192a43",
            },
          ].map((s, i) => (
            <div
              key={s.title}
              className={`p-8 rounded-3xl bg-[#FCF7F0] hover:scale-[1.02] smooth-hover group border-b-4 border-transparent hover:border-[var(--accent)] animate-fade-up ${["delay-100", "delay-200", "delay-300"][i]}`}
              style={{ "--accent": s.accent } as React.CSSProperties}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <s.icon className="w-7 h-7" style={{ color: s.accent }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#192a43" }}>{s.title}</h3>
              <p className="text-gray-500 mb-6">{s.desc}</p>
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-48 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── MEET OUR TEAM ── */}
      <section className="py-24 px-6 bg-[#FCF7F0]">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#192a43" }}>
                Meet Our <span style={{ color: "#FF8C42" }}>Veterinarians</span>
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
            {[
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
            ].map((doc, i) => (
              <div
                key={doc.name}
                className={`bg-white rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 soft-shadow hover:shadow-xl smooth-hover ${["animate-fade-up delay-100", "animate-fade-up delay-200"][i]}`}
              >
                <div className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-[2rem]">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
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
                      <span key={t} className="text-xs font-medium px-3 py-1.5 bg-[#FCF7F0] border border-stone-200 rounded-full">{t}</span>
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

      {/* ── DEDICATED TO HEALTH ── */}
      <section className="py-24 px-6 overflow-hidden bg-[#192a43] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 animate-fade-up">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Dedicated to Their <span style={{ color: "#FF8C42" }}>Happiness & Health</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At Horizon Vet, we don't just treat symptoms; we care for the whole pet. Our facility is equipped with
              state-of-the-art diagnostic tools, but our real strength lies in the gentle touch of our staff.
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-lg">
              {[
                { icon: CheckCircle, title: "24/7 ICU", desc: "Constant monitoring for critical cases." },
                { icon: CheckCircle, title: "Advanced Surgery", desc: "Modern operating theater with expert surgeons." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-[#FF8C42] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/blogs"
              className="mt-12 inline-block bg-white text-[#192a43] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 smooth-hover"
            >
              Meet Our Patients
            </Link>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400&h=400",
                "https://images.unsplash.com/photo-1591768793355-74d7ca7fb9cd?auto=format&fit=crop&q=80&w=400&h=400",
                "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=400&h=400",
                "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=400&h=400",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Pet patient"
                  className={`w-full aspect-square object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 ${
                    i % 2 === 0 ? "rotate-3" : "-rotate-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HAPPY TAILS GALLERY ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto animate-fade-up">
          <div className="flex items-end justify-between mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#192a43" }}>
                Happy Tails <span style={{ color: "#FF8C42" }}>Gallery</span>
              </h2>
              <p className="text-gray-500">A glimpse into the daily lives of the amazing pets that visit our clinic.</p>
            </div>
            <Link
              to="/blogs"
              className="hidden md:flex items-center gap-2 font-bold text-[#FF8C42] hover:underline uppercase text-sm tracking-widest"
            >
              View All Photos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400&h=400",
              "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400&h=400",
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-3xl relative">
                <img
                  src={src}
                  alt={`Pet gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 smooth-hover transition-transform duration-700"
                />
                {i === 4 && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-white font-bold text-2xl">+450</span>
                    <span className="text-white/80 text-xs uppercase">Happy Moments</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY BAR ── */}
      <section className="bg-[#FF8C42] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Pet Emergency?</h3>
              <p className="text-orange-100 text-lg font-medium">We are open 7 days a week for urgent care.</p>
            </div>
          </div>
          <a
            href="tel:+9779869369273"
            className="bg-white text-[#FF8C42] px-10 py-4 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 smooth-hover"
          >
            Call Now: +977-9869369273
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-6 py-20 bg-[#FCF7F0]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#192a43" }}>
            Ready to Give Your Pet the <span style={{ color: "#FF8C42" }}>Best Care</span>?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our expert veterinarians today. We're here 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-[#192a43] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl smooth-hover inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:+9779869369273"
              className="bg-white text-[#192a43] border-2 border-[#FF8C42] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 smooth-hover inline-flex items-center gap-2"
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
