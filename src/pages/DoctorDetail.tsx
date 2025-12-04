import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, GraduationCap, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop",
    intro: "Board-certified cardiologist with 15+ years of experience in cardiovascular care and heart disease prevention.",
    education: ["MD, Harvard Medical School", "Residency, Johns Hopkins Hospital", "Fellowship, Cleveland Clinic"],
    certifications: ["American Board of Internal Medicine", "Cardiovascular Disease Specialist", "Nuclear Cardiology Certification"],
    experience: "15+ years",
    languages: ["English", "Spanish"],
    bio: "Dr. Sarah Johnson is a renowned cardiologist dedicated to providing comprehensive cardiovascular care. She specializes in preventive cardiology, heart failure management, and non-invasive cardiac imaging. Her patient-centered approach ensures that each individual receives personalized treatment plans tailored to their unique needs.",
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop",
    intro: "Specialist in neurological disorders with a focus on innovative treatments for brain and spine conditions.",
    education: ["MD, Stanford University", "Residency, UCSF Medical Center", "Fellowship, Mayo Clinic"],
    certifications: ["American Board of Psychiatry and Neurology", "Vascular Neurology Specialist"],
    experience: "12+ years",
    languages: ["English", "Mandarin"],
    bio: "Dr. Michael Chen brings cutting-edge neurological care to his patients. His expertise spans stroke prevention and treatment, movement disorders, and neurodegenerative diseases. He is committed to staying at the forefront of neurological research and applying the latest treatments to improve patient outcomes.",
  },
  {
    id: "dr-emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop",
    intro: "Dedicated pediatrician providing compassionate care for children from newborns to adolescents.",
    education: ["MD, Yale School of Medicine", "Residency, Children's Hospital of Philadelphia"],
    certifications: ["American Board of Pediatrics", "Pediatric Advanced Life Support"],
    experience: "10+ years",
    languages: ["English", "Spanish", "Portuguese"],
    bio: "Dr. Emily Rodriguez is passionate about children's health and development. She provides comprehensive pediatric care including well-child visits, immunizations, and treatment of childhood illnesses. Her warm and friendly approach helps put young patients and their parents at ease.",
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
