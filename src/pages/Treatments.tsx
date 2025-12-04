import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Activity, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Heart,
  Pill,
  ArrowRight,
  Check
} from "lucide-react";

const treatments = [
  {
    id: "general-medicine",
    title: "General Medicine",
    icon: Stethoscope,
    shortDesc: "Comprehensive primary care for all your general health needs.",
    fullDesc: "Our general medicine department provides comprehensive primary care services including routine check-ups, preventive screenings, chronic disease management, and treatment of common illnesses. Our experienced physicians take a holistic approach to your health.",
    services: [
      "Annual physical examinations",
      "Chronic disease management",
      "Preventive health screenings",
      "Vaccinations and immunizations",
      "Minor injury treatment",
      "Health counseling and education",
    ],
  },
  {
    id: "cardiology",
    title: "Cardiology",
    icon: Activity,
    shortDesc: "Expert heart care with advanced diagnostic and treatment options.",
    fullDesc: "Our cardiology team specializes in the prevention, diagnosis, and treatment of cardiovascular diseases. We use state-of-the-art technology and evidence-based treatments to ensure optimal heart health for our patients.",
    services: [
      "Heart disease diagnosis and treatment",
      "ECG and stress testing",
      "Echocardiography",
      "Cardiac rehabilitation",
      "Arrhythmia management",
      "Preventive cardiology",
    ],
  },
  {
    id: "neurology",
    title: "Neurology",
    icon: Brain,
    shortDesc: "Specialized care for brain and nervous system conditions.",
    fullDesc: "Our neurology department offers expert diagnosis and treatment for disorders of the brain, spinal cord, and nervous system. From headaches to complex neurological conditions, we provide compassionate, comprehensive care.",
    services: [
      "Stroke prevention and treatment",
      "Headache and migraine management",
      "Epilepsy care",
      "Movement disorders treatment",
      "Memory and cognitive assessments",
      "Nerve conduction studies",
    ],
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    icon: Bone,
    shortDesc: "Treatment for bone, joint, and muscle disorders.",
    fullDesc: "Our orthopedic specialists treat conditions affecting the musculoskeletal system. Whether you're dealing with a sports injury, arthritis, or need joint replacement surgery, we're here to help restore your mobility.",
    services: [
      "Joint replacement surgery",
      "Sports medicine",
      "Fracture care",
      "Arthroscopic surgery",
      "Physical therapy coordination",
      "Spine disorders treatment",
    ],
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    icon: Baby,
    shortDesc: "Specialized healthcare for infants, children, and adolescents.",
    fullDesc: "Our pediatric team provides comprehensive healthcare for children from birth through adolescence. We focus on preventive care, developmental monitoring, and treating childhood illnesses in a caring environment.",
    services: [
      "Well-child visits",
      "Childhood immunizations",
      "Growth and development monitoring",
      "Treatment of childhood illnesses",
      "Adolescent health services",
      "Behavioral health support",
    ],
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    icon: Eye,
    shortDesc: "Complete eye care from routine exams to complex surgeries.",
    fullDesc: "Our ophthalmology department provides comprehensive eye care services. From routine vision exams to advanced surgical procedures, our eye specialists are dedicated to preserving and improving your vision.",
    services: [
      "Comprehensive eye exams",
      "Cataract surgery",
      "Glaucoma treatment",
      "Diabetic eye care",
      "LASIK consultations",
      "Dry eye treatment",
    ],
  },
  {
    id: "dermatology",
    title: "Dermatology",
    icon: Heart,
    shortDesc: "Expert skin care for medical and cosmetic concerns.",
    fullDesc: "Our dermatology team treats a wide range of skin conditions from acne and eczema to skin cancer screenings. We also offer cosmetic dermatology services to help you look and feel your best.",
    services: [
      "Skin cancer screenings",
      "Acne treatment",
      "Eczema and psoriasis care",
      "Mole evaluation",
      "Cosmetic procedures",
      "Skin allergy testing",
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy Services",
    icon: Pill,
    shortDesc: "On-site pharmacy for convenient medication access.",
    fullDesc: "Our on-site pharmacy offers convenient access to prescription medications and over-the-counter products. Our pharmacists provide medication counseling and work closely with your healthcare team.",
    services: [
      "Prescription filling",
      "Medication counseling",
      "Immunization services",
      "Over-the-counter products",
      "Medication therapy management",
      "Refill reminders",
    ],
  },
];

const Treatments = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive <span className="gradient-text">Healthcare Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From preventive care to specialized treatments, we offer a wide range 
              of medical services to meet all your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className={`card-base grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <treatment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{treatment.title}</h2>
                  <p className="text-muted-foreground mb-6">{treatment.fullDesc}</p>
                  <Link to="/appointment">
                    <Button className="btn-primary">
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-muted/50 rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Services Included:</h3>
                    <ul className="space-y-3">
                      {treatment.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="hero-gradient-bg rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Our team is here to guide you to the right care. Contact us for a consultation.
            </p>
            <Link to="/contact">
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 font-semibold rounded-xl">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Treatments;
