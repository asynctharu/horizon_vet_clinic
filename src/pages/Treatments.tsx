import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Scissors, 
  Bone, 
  Syringe, 
  ShoppingBag,
  Building2,
  Bird,
  ArrowRight,
  Check
} from "lucide-react";

const treatments = [
  {
    id: "pet-consultation",
    title: "Pet & Animal Treatment",
    icon: Stethoscope,
    shortDesc: "Complete treatment for all domestic and pet animals.",
    fullDesc: "We provide comprehensive treatment for all kinds of domestic and pet animals with proper consultation. Our experienced veterinarians ensure accurate diagnosis and effective treatment plans for your beloved companions.",
    services: [
      "General health check-ups",
      "Disease diagnosis and treatment",
      "Emergency veterinary care",
      "Dental care for pets",
      "Skin and coat treatment",
      "Nutritional counseling",
    ],
  },
  {
    id: "surgery",
    title: "Castration & Spaying",
    icon: Scissors,
    shortDesc: "Safe surgical procedures for dogs and cats.",
    fullDesc: "Our clinic offers professional castration and spaying services for dogs and cats. These procedures are performed by skilled veterinarians in a sterile, safe environment to ensure quick recovery and minimal discomfort for your pets.",
    services: [
      "Dog castration surgery",
      "Cat castration surgery",
      "Dog spaying surgery",
      "Cat spaying surgery",
      "Pre-surgical consultations",
      "Post-operative care and follow-up",
    ],
  },
  {
    id: "orthopedic-surgery",
    title: "Orthopedic Surgery",
    icon: Bone,
    shortDesc: "Expert bone and joint surgical care for animals.",
    fullDesc: "Our orthopedic surgery services address bone fractures, joint problems, and musculoskeletal injuries in pets and animals. We use modern surgical techniques to restore mobility and improve quality of life.",
    services: [
      "Fracture repair and fixation",
      "Joint surgery",
      "Ligament repair",
      "Hip and elbow treatment",
      "Bone plating procedures",
      "Rehabilitation guidance",
    ],
  },
  {
    id: "vaccination",
    title: "Vaccination Services",
    icon: Syringe,
    shortDesc: "Complete vaccination for pets and poultry.",
    fullDesc: "We offer all kinds of vaccines for broilers, layers, dogs, and cats. Our vaccination programs are designed to protect your animals from common and serious diseases, ensuring their long-term health and wellbeing.",
    services: [
      "Dog vaccinations (Rabies, Parvo, Distemper)",
      "Cat vaccinations (Rabies, FVRCP)",
      "Broiler vaccinations",
      "Layer hen vaccinations",
      "Puppy and kitten vaccination schedules",
      "Vaccination record maintenance",
    ],
  },
  {
    id: "poultry-services",
    title: "Poultry Services",
    icon: Bird,
    shortDesc: "Specialized care for poultry and farm birds.",
    fullDesc: "Our poultry services include postmortem examination and comprehensive health management for your poultry. We help farmers identify disease causes and implement preventive measures to protect their flocks.",
    services: [
      "Postmortem examination of poultry",
      "Disease diagnosis and treatment",
      "Flock health management",
      "Vaccination programs",
      "Biosecurity consultation",
      "Nutritional advice for poultry",
    ],
  },
  {
    id: "farm-consultation",
    title: "Farm Consultation",
    icon: Building2,
    shortDesc: "Expert consultation for commercial farms.",
    fullDesc: "We provide expertise consultation for commercial farms including dairy, poultry, and livestock operations. Our team helps optimize animal health, productivity, and farm management practices.",
    services: [
      "Dairy farm consultation",
      "Poultry farm management",
      "Livestock health programs",
      "Feed and nutrition planning",
      "Disease prevention strategies",
      "Farm biosecurity assessment",
    ],
  },
  {
    id: "pet-shop",
    title: "Pet Shop",
    icon: ShoppingBag,
    shortDesc: "Quality pet food, supplements, and accessories.",
    fullDesc: "Our pet shop offers pet food, nutritional supplements, and other pet-friendly equipment. We stock quality products to keep your pets healthy, happy, and well-cared for.",
    services: [
      "Premium pet food brands",
      "Nutritional supplements",
      "Pet accessories and toys",
      "Grooming supplies",
      "Pet carriers and crates",
      "Health and wellness products",
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
              Complete <span className="gradient-text">Veterinary Care</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From pet treatment to farm consultation, we offer comprehensive 
              veterinary services for all your animal healthcare needs.
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
              Our veterinary team is here to guide you to the right care for your animals.
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
