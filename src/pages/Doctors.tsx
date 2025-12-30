import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Phone, Award, GraduationCap } from "lucide-react";

const doctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    intro: "Specialist in orthopedic surgery and advanced veterinary treatments. Expert in castration, spaying, and complex surgical procedures.",
    phone: "+9779704589171",
    registration: "NVC Regd. No. 1197",
    qualification: "B.V.Sc & A.H., M.V.Sc.",
  },
   {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    intro: "Experienced in treating domestic and pet animals with proper consultation. Specializes in general veterinary medicine, vaccinations, and preventive care.",
    phone: "+9779704589172",
    registration: "NVC Regd. No. 2025",
    qualification: "B.V.Sc. & A.H.",
  },
  {
    id: "ajay-pal",
    name: "Ajay Pal",
    specialty: "Veterinary Technician",
    image: "/assests/doctors photo/Ajay Pal.jpeg",
    intro: "Ajay Pal is a dedicated Veterinary Technician who assists in animal care, vaccinations, basic treatments, and clinic operations. He ensures proper handling of animals and supports veterinarians during consultations and procedures.",
    phone: "+9779704589173",
  },
];

const Doctors = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full mb-4">
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="gradient-text">Veterinarians</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our NVC-registered veterinarians are dedicated to providing the best 
              care for your pets and livestock with years of professional experience.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <div key={doctor.id} className="card-base animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-40 h-40 rounded-full object-cover object-top mb-6 ring-4 ring-secondary"
                  />
                  <h2 className="text-2xl font-bold text-foreground mb-2">{doctor.name}</h2>
                  <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
                  
                  <div className="space-y-3 w-full">
                    {doctor.registration && (
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm">{doctor.registration}</span>
                      </div>
                    )}
                    {doctor.qualification && (
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-sm">{doctor.qualification}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href={`tel:${doctor.phone}`} className="text-sm hover:text-primary transition-colors">
                        {doctor.phone}
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mt-4 mb-6">{doctor.intro}</p>
                  
                  <a href={`tel:${doctor.phone}`}>
                    <Button className="btn-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      {doctor.specialty === "Veterinary Technician" ? "Call Technician" : "Call Doctor"}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="card-base text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need an Appointment?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a consultation with our experienced veterinarians for your pet's health needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment">
                <Button className="btn-primary">Book Appointment</Button>
              </Link>
              <a href="tel:9869369273">
                <Button variant="outline" className="btn-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Clinic
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
