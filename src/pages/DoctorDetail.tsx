import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, GraduationCap, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    intro: "NVC Regd. No. 1197 | B.V.Sc & A.H., M.V.Sc. | Specialist in orthopedic surgery and advanced treatments.",
    education: ["B.V.Sc & A.H. - Bachelor of Veterinary Science and Animal Husbandry", "M.V.Sc. - Master of Veterinary Science"],
    certifications: ["Nepal Veterinary Council Registration No. 1197", "Veterinary Surgery Specialist"],
    experience: "8+ years",
    languages: ["Nepali", "Hindi", "English"],
    bio: "Dr. Shiva Prasad Bhusal is a highly skilled veterinary surgeon specializing in orthopedic surgery, castration, spaying, and advanced surgical procedures for pets and livestock. With his M.V.Sc. degree and extensive experience, he brings expert surgical care to Horizon Vet Clinic. His dedication to animal welfare and precise surgical techniques ensure the best outcomes for patients.",
  },
  {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    intro: "NVC Regd. No. 2025 | B.V.Sc. & A.H. | Experienced in treating domestic and pet animals.",
    education: ["B.V.Sc. & A.H. - Bachelor of Veterinary Science and Animal Husbandry"],
    certifications: ["Nepal Veterinary Council Registration No. 2025", "Veterinary Medicine Specialist"],
    experience: "5+ years",
    languages: ["Nepali", "Hindi", "English", "Tharu"],
    bio: "Dr. Ashish Tharu is an experienced veterinarian with expertise in diagnosing and treating a wide range of conditions in domestic pets and animals. His compassionate approach and thorough knowledge of veterinary medicine make him a trusted healthcare provider for pets in the Nepalganj region. He specializes in preventive care, vaccinations, and internal medicine.",
  },
];

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-bold mb-4">Doctor Not Found</h1>
          <Link to="/doctors">
            <Button className="btn-primary">View All Doctors</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Doctors
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Image & Quick Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card-base">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {doctor.specialty}
                    </span>
                    <h1 className="text-2xl font-bold text-foreground">{doctor.name}</h1>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{doctor.experience} Experience</span>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((lang) => (
                        <span
                          key={lang}
                          className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/appointment" className="block pt-4">
                    <Button className="btn-primary w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="card-base">
                <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Education */}
              <div className="card-base">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Education</h2>
                </div>
                <ul className="space-y-3">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="card-base">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Certifications</h2>
                </div>
                <ul className="space-y-3">
                  {doctor.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoctorDetail;
