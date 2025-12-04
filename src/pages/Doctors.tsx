import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import CardDoctor from "@/components/CardDoctor";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    intro: "Board-certified cardiologist with 15+ years of experience in cardiovascular care and heart disease prevention.",
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    intro: "Specialist in neurological disorders with a focus on innovative treatments for brain and spine conditions.",
  },
  {
    id: "dr-emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    intro: "Dedicated pediatrician providing compassionate care for children from newborns to adolescents.",
  },
  {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    intro: "Expert in sports medicine and joint replacement surgery with over 20 years of surgical experience.",
  },
  {
    id: "dr-lisa-patel",
    name: "Dr. Lisa Patel",
    specialty: "Dermatology",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop",
    intro: "Specializing in medical and cosmetic dermatology, treating conditions from acne to skin cancer.",
  },
  {
    id: "dr-david-kim",
    name: "Dr. David Kim",
    specialty: "General Medicine",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    intro: "Primary care physician focused on preventive medicine and comprehensive family healthcare.",
  },
  {
    id: "dr-maria-santos",
    name: "Dr. Maria Santos",
    specialty: "Ophthalmology",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop",
    intro: "Eye care specialist with expertise in cataract surgery and treatment of glaucoma.",
  },
  {
    id: "dr-robert-taylor",
    name: "Dr. Robert Taylor",
    specialty: "Gastroenterology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    intro: "Digestive health expert specializing in endoscopy and treatment of GI disorders.",
  },
  {
    id: "dr-amanda-lee",
    name: "Dr. Amanda Lee",
    specialty: "Psychiatry",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    intro: "Mental health specialist providing comprehensive psychiatric care and therapy services.",
  },
];

const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "General Medicine", "Ophthalmology", "Gastroenterology", "Psychiatry"];

const Doctors = () => {
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const filteredDoctors = activeSpecialty === "All"
    ? doctors
    : doctors.filter((doc) => doc.specialty === activeSpecialty);

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
              Meet Our <span className="gradient-text">Expert Doctors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our team of board-certified physicians and specialists brings decades 
              of combined experience to provide you with exceptional healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Doctors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Specialty Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={activeSpecialty === specialty ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSpecialty(specialty)}
                className={activeSpecialty === specialty ? "btn-primary" : "btn-secondary"}
              >
                {specialty}
              </Button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div key={doctor.id} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardDoctor {...doctor} />
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No doctors found for this specialty.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="card-base text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Can't Find the Right Specialist?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us and we'll help you find the perfect doctor for your needs.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
