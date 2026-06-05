import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const doctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    registration: "NVC Regd. No. 1197",
    education: ["B.V.Sc & A.H. — Bachelor of Veterinary Science and Animal Husbandry", "M.V.Sc. — Master of Veterinary Science"],
    certifications: ["Nepal Veterinary Council Registration No. 1197", "Veterinary Surgery Specialist"],
    experience: "8+ years",
    languages: ["Nepali", "Hindi", "English"],
    bio: "Dr. Shiva Prasad Bhusal is a highly skilled veterinary surgeon specializing in orthopedic surgery, castration, spaying, and advanced surgical procedures for pets and livestock. With his M.V.Sc. degree and extensive experience, he brings expert surgical care to Horizon Vet Clinic.",
  },
  {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    registration: "NVC Regd. No. 2025",
    education: ["B.V.Sc. & A.H. — Bachelor of Veterinary Science and Animal Husbandry"],
    certifications: ["Nepal Veterinary Council Registration No. 2025", "Veterinary Medicine Specialist"],
    experience: "5+ years",
    languages: ["Nepali", "Hindi", "English", "Tharu"],
    bio: "Dr. Ashish Tharu is an experienced veterinarian with expertise in diagnosing and treating a wide range of conditions in domestic pets and animals. His compassionate approach makes him a trusted healthcare provider for pets in the Nepalganj region.",
  },
];

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <main className="bg-background pt-32 pb-24 px-6 text-center min-h-screen">
        <h1 className="display-font text-4xl font-bold uppercase mb-8">Doctor Not Found</h1>
        <Link to="/doctors" className="btn-primary">View All Doctors</Link>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <Link to="/doctors" className="inline-flex items-center gap-2 mono-label mb-12 hover:line-through">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Specialists
          </Link>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="border-4 border-foreground p-3 mb-8">
                <img src={doctor.image} alt={doctor.name} className="w-full aspect-[4/5] object-cover grayscale" />
              </div>
              <Link to="/appointment" className="btn-primary w-full">
                <Calendar className="w-3.5 h-3.5" /> Book Appointment
              </Link>
            </div>

            <div className="lg:col-span-3 space-y-10">
              <div>
                <span className="mono-label opacity-60 block mb-3">{doctor.registration}</span>
                <h1 className="display-font text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">{doctor.name}</h1>
                <p className="mono-label">{doctor.specialty} • {doctor.experience} Experience</p>
              </div>

              <div className="h-px bg-foreground" />

              <div>
                <h2 className="display-font text-2xl font-bold uppercase mb-4">About</h2>
                <p className="text-base leading-relaxed opacity-80">{doctor.bio}</p>
              </div>

              <div>
                <h2 className="display-font text-2xl font-bold uppercase mb-4">Education</h2>
                <ul className="space-y-2 mono-font text-[12px] uppercase tracking-wide opacity-80">
                  {doctor.education.map((e) => <li key={e}>• {e}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="display-font text-2xl font-bold uppercase mb-4">Certifications</h2>
                <ul className="space-y-2 mono-font text-[12px] uppercase tracking-wide opacity-80">
                  {doctor.certifications.map((c) => <li key={c}>• {c}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="display-font text-2xl font-bold uppercase mb-4">Languages</h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.languages.map((l) => (
                    <span key={l} className="mono-label border border-foreground px-4 py-2">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoctorDetail;
