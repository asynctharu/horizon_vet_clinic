import SectionHeader from "@/components/SectionHeader";
import { Heart, Target, Eye, Users, Award, Clock } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every animal with love, kindness, and gentle care.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in veterinary medicine.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We uphold honesty and transparency in all treatments.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We serve pet owners and farmers throughout Nepalgunj.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "NVC-registered doctors with advanced qualifications.",
  },
  {
    icon: Clock,
    title: "Accessibility",
    description: "Open 12 hours daily, 7 days a week for your convenience.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="About Us | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Learn about Horizon Vet Clinic & Pet Shop - trusted veterinary care in Nepalganj with NVC-registered veterinarians, compassionate animal care, and comprehensive pet services."
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
            <div className="space-y-5 animate-fade-up">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-4 py-1.5 rounded-full mb-2">
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Caring for Animals in{" "}
                <span className="gradient-text">Nepalgunj</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Horizon Vet Clinic & Pet Shop is a trusted veterinary care provider 
                in Nepalgunj. Our NVC-registered veterinarians combine professional 
                expertise with genuine love for animals to deliver exceptional care 
                for your pets and livestock.
              </p>
            </div>
            <div className="relative animate-fade-up delay-200">
              <img
                src="/assests/clinic serviice photo/Clinic Service photo2.jpg"
                alt="Horizon Vet Clinic veterinarians performing surgery"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] max-h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-base">
              <div className="w-14 h-14 rounded-2xl hero-gradient-bg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide accessible, high-quality veterinary care that improves 
                the health and well-being of every animal in our community. We are 
                committed to treating each pet with dignity, expertise, and the 
                compassion they deserve.
              </p>
            </div>
            <div className="card-base">
              <div className="w-14 h-14 rounded-2xl hero-gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading veterinary care provider in the region, recognized 
                for clinical excellence, compassionate treatment, and comprehensive 
                services. We envision a community where every pet receives the quality 
                healthcare they need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            description="These core values guide everything we do at Horizon Vet Clinic."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-base text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="What We Offer"
            title="Comprehensive Veterinary Services"
            description="From routine check-ups to specialized surgeries, we provide complete care for your animals."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-base">
              <h3 className="font-semibold text-foreground mb-3">Pet Care</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Treatment of all domestic and pet animals</li>
                <li>• Castration/Spaying of dogs and cats</li>
                <li>• All vaccines for dogs and cats</li>
                <li>• Pet food and nutritional supplements</li>
              </ul>
            </div>
            <div className="card-base">
              <h3 className="font-semibold text-foreground mb-3">Livestock & Poultry</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Postmortem examination of poultry</li>
                <li>• All vaccines for broilers and layers</li>
                <li>• Expert consultation for commercial farms</li>
                <li>• Comprehensive livestock healthcare</li>
              </ul>
            </div>
            <div className="card-base">
              <h3 className="font-semibold text-foreground mb-3">Surgery</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Orthopedic surgery</li>
                <li>• Castration and spaying procedures</li>
                <li>• Emergency surgical care</li>
                <li>• Post-operative care and monitoring</li>
              </ul>
            </div>
            <div className="card-base">
              <h3 className="font-semibold text-foreground mb-3">Pet Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Quality pet food</li>
                <li>• Nutritional supplements</li>
                <li>• Pet-friendly equipment</li>
                <li>• Healthcare products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Facility"
            title="Visit Our Clinic"
            description="Modern facilities equipped to provide the best care for your pets."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/assests/clinic serviice photo/Clinic Service photo1.jpg"
              alt="Clinic facility"
              className="rounded-2xl shadow-card w-full h-64 object-cover"
            />
            <img
              src="/assests/clinic serviice photo/Clinic Service photo2.jpg"
              alt="Clinic services"
              className="rounded-2xl shadow-card w-full h-64 object-cover"
            />
            <img
              src="/assests/clinic serviice photo/Clinic Service photo3.jpg"
              alt="Clinic equipment"
              className="rounded-2xl shadow-card w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-base max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Visit Us Today</h2>
            <p className="text-muted-foreground mb-2">
              <strong>Location:</strong> Surkhet Road, Nepalgunj-2, Khajura Road, Banke
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Hours:</strong> 8:00 AM - 8:00 PM (Open Daily)
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Phone:</strong> +9779869369273 | +9779866361184
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> vetclinichorizon@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
