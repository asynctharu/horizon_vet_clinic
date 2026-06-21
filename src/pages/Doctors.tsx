import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Phone, CalendarCheck } from "lucide-react";

const doctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery Specialist",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    intro: "A highly qualified Veterinary Surgery Specialist with advanced surgical expertise. Performs hundreds of successful surgeries on pets and livestock across Nepal.",
    phone: "+9779704589171",
    registration: "NVC Regd. No. 1197",
    qualification: "B.V.Sc & A.H., M.V.Sc. (Veterinary Surgery)",
    languages: "Nepali, Hindi, English",
    specializations: ["Small animal surgery", "Orthopedic surgery", "Soft tissue surgery", "Emergency interventions"],
    bgTint: "bg-orange-100",
  },
  {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine Specialist",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    intro: "A dedicated veterinary professional with a strong foundation in medicine, diagnostics, and preventive care. Known for his calm, approachable manner.",
    phone: "+9779704589172",
    registration: "NVC Regd. No. 2025",
    qualification: "B.V.Sc. & A.H.",
    languages: "Nepali, Hindi, Tharu, English",
    specializations: ["Internal medicine", "Vaccination programs", "Poultry health", "Preventive & primary care"],
    bgTint: "bg-teal-100",
  },
  {
    id: "ajay-pal",
    name: "Ajay Pal",
    specialty: "Veterinary Technician",
    image: "/assests/doctors photo/Ajay Pal.jpeg",
    intro: "A dedicated Veterinary Technician who assists in animal care, vaccinations, basic treatments, and clinic operations.",
    phone: "+9779704589173",
    registration: "",
    qualification: "Veterinary Technician",
    languages: "Nepali, Hindi",
    specializations: ["Animal handling", "Vaccination support", "Basic treatments", "Clinic operations"],
    bgTint: "bg-[#FCF7F0]",
  },
];

const Doctors = () => {
  return (
    <main className="bg-[#FCF7F0] relative overflow-x-hidden">
      <SEO
        title="Our Veterinarians | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Meet our NVC-registered veterinarians at Horizon Vet Clinic Nepalganj."
        canonical="/doctors"
      />

      {/* Hero */}
      <header className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-orange-100 -top-20 -left-10" />
        <div className="blob w-[300px] h-[300px] bg-teal-100 top-20 -right-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-5">Expert Medical Team</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight" style={{ color: "#192a43" }}>
            The <span style={{ color: "#FF8C42" }}>specialists</span>
          </h1>
        </div>
      </header>

      {/* Profiles */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-10 animate-fade-up">
          {doctors.map((doc, i) => (
            <article key={doc.id} className="soft-card p-0 overflow-hidden grid md:grid-cols-2">
              <div className={`${doc.bgTint} p-8 md:p-10 flex items-center justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="w-full max-w-md overflow-hidden card-rounded">
                  <img src={doc.image} alt={doc.name} className="w-full aspect-[4/5] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]" />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col bg-white">
                {doc.registration && (
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-3">{doc.registration}</span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: "#192a43" }}>{doc.name}</h2>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#FF8C42] mb-2">{doc.specialty}</p>
                <p className="text-sm italic text-gray-500 mb-6">{doc.qualification}</p>

                <div className="h-px bg-stone-200 w-full mb-6" />

                <p className="text-base leading-relaxed text-gray-500 mb-8">{doc.intro}</p>

                <div className="mb-6">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-3">Specializations</span>
                  <div className="flex flex-wrap gap-2">
                    {doc.specializations.map((s) => (
                      <span key={s} className="text-xs font-medium px-3 py-1.5 bg-[#FCF7F0] border border-stone-200 pill-rounded">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-2">Languages</span>
                  <p className="text-sm text-gray-500">{doc.languages}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a href={`tel:${doc.phone}`} className="bg-white text-[#192a43] border-2 border-[#FF8C42] px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-orange-50 smooth-hover">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <Link to={`/doctors/${doc.id}`} className="bg-[#192a43] text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-xl smooth-hover">View Profile →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 mb-12 mt-10 animate-fade-up">
        <div className="max-w-7xl mx-auto bg-teal-100/50 card-rounded py-20 px-6 text-center soft-shadow">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8" style={{ color: "#192a43" }}>
            Schedule a <span style={{ color: "#FF8C42" }}>visit</span>
          </h2>
          <Link to="/appointment" className="bg-[#FF8C42] text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:shadow-xl smooth-hover">
            <CalendarCheck className="w-5 h-5" /> Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
