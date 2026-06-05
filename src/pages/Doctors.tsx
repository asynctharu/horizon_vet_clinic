import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Phone, Award, GraduationCap } from "lucide-react";

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
  },
];

const Doctors = () => {
  return (
    <main className="bg-background">
      <SEO
        title="Our Veterinarians | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Meet our NVC-registered veterinarians at Horizon Vet Clinic Nepalganj."
        canonical="/doctors"
      />

      {/* Hero */}
      <header className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Expert Medical Team</span>
          </div>
          <h1 className="display-font text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase">
            The<br />Specialists
          </h1>
        </div>
      </header>

      {/* Profiles */}
      <section className="section-border">
        <div className="max-w-7xl mx-auto border-x border-foreground">
          {doctors.map((doc, i) => (
            <article
              key={doc.id}
              className={`grid md:grid-cols-2 ${i !== doctors.length - 1 ? "border-b-2 border-foreground" : ""}`}
            >
              <div className={`p-3 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="border border-foreground overflow-hidden h-full">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full aspect-[4/5] object-cover object-center grayscale"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col">
                {doc.registration && (
                  <span className="mono-label opacity-60 mb-3">{doc.registration}</span>
                )}
                <h2 className="display-font text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">{doc.name}</h2>
                <p className="mono-label mb-2">{doc.specialty}</p>
                <p className="mono-label opacity-60 italic mb-8">{doc.qualification}</p>

                <div className="h-px bg-foreground w-full mb-8" />

                <p className="text-base leading-relaxed mb-10 opacity-80">{doc.intro}</p>

                <div className="mb-8">
                  <span className="mono-label block mb-4 underline">Specializations</span>
                  <ul className="mono-font text-[11px] uppercase tracking-wide opacity-70 space-y-1.5">
                    {doc.specializations.map((s) => <li key={s}>• {s}</li>)}
                  </ul>
                </div>

                <div className="mb-8">
                  <span className="mono-label block mb-2 underline">Languages</span>
                  <p className="mono-font text-[11px] uppercase opacity-70">{doc.languages}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  <a href={`tel:${doc.phone}`} className="btn-secondary">
                    <Phone className="w-3.5 h-3.5" /> Call
                  </a>
                  <Link to={`/doctors/${doc.id}`} className="btn-primary">View Profile →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center section-border">
        <h2 className="display-font text-4xl md:text-6xl font-black uppercase mb-10">Schedule A Visit</h2>
        <Link to="/appointment" className="btn-primary">Book Appointment →</Link>
      </section>
    </main>
  );
};

export default Doctors;
