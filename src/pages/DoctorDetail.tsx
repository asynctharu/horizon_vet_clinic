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
    bgTint: "bg-[#FFE4E1]",
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
    bgTint: "bg-[#E8EFE8]",
  },
];

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <main className="bg-background pt-40 pb-24 px-6 text-center min-h-screen">
        <h1 className="display-font text-4xl font-bold mb-8 text-foreground">Doctor Not Found</h1>
        <Link to="/doctors" className="btn-primary">View All Doctors</Link>
      </main>
    );
  }

  return (
    <main className="bg-background relative overflow-x-hidden">
      <section className="pt-40 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Link to="/doctors" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#FFB7B2] mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Specialists
          </Link>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className={`${doctor.bgTint} card-rounded p-6 mb-6 soft-shadow`}>
                <img src={doctor.image} alt={doctor.name} className="w-full aspect-[4/5] object-cover card-rounded" />
              </div>
              <Link to="/appointment" className="btn-primary w-full">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-3">{doctor.registration}</span>
                <h1 className="display-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-3 text-foreground">{doctor.name}</h1>
                <p className="text-sm font-semibold text-[#FFB7B2] tracking-wide">{doctor.specialty} • {doctor.experience} Experience</p>
              </div>

              <div className="h-px bg-stone-200" />

              <div>
                <h2 className="display-font text-xl font-bold mb-3 text-foreground">About</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{doctor.bio}</p>
              </div>

              <div>
                <h2 className="display-font text-xl font-bold mb-4 text-foreground">Education</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {doctor.education.map((e) => <li key={e} className="flex gap-2"><span className="text-[#FFB7B2]">•</span> {e}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="display-font text-xl font-bold mb-4 text-foreground">Certifications</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {doctor.certifications.map((c) => <li key={c} className="flex gap-2"><span className="text-[#FFB7B2]">•</span> {c}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="display-font text-xl font-bold mb-4 text-foreground">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((l) => (
                    <span key={l} className="text-xs font-semibold px-4 py-2 pill-rounded bg-[#FDFCF8] border border-stone-200">{l}</span>
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
