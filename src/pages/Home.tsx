import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Clock, Users, Syringe, Stethoscope, Scissors, Bone, Dog, Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/SectionHeader";
import CardDoctor from "@/components/CardDoctor";
import CardTreatment from "@/components/CardTreatment";
import SEO from "@/components/SEO";

const stats = [
  { number: "2", label: "Expert Veterinarians" },
  { number: "1000+", label: "Happy Pets" },
  { number: "12hrs", label: "Daily Service" },
  { number: "7 Days", label: "Open Weekly" },
];

const highlights = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every pet with love, kindness, and the utmost care.",
  },
  {
    icon: Shield,
    title: "Qualified Veterinarians",
    description: "NVC registered doctors with B.V.Sc. & A.H. and M.V.Sc. degrees.",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open 8:00 AM - 8:00 PM, seven days a week for your convenience.",
  },
  {
    icon: Users,
    title: "Complete Pet Care",
    description: "From vaccinations to surgeries, we offer comprehensive services.",
  },
];

const featuredDoctors = [
  {
    id: "dr-shiva-prasad-bhusal",
    name: "Dr. Shiva Prasad Bhusal",
    specialty: "Veterinary Surgery",
    image: "/assests/doctors photo/Dr. Shiva Prasad Bhusal.jpg",
    intro: "NVC Regd. No. 1197 | B.V.Sc & A.H., M.V.Sc. | Specialist in orthopedic surgery and advanced treatments.",
  },
   {
    id: "dr-ashish-tharu",
    name: "Dr. Ashish Tharu",
    specialty: "Veterinary Medicine",
    image: "/assests/doctors photo/Dr. Ashish Tharu.jpg",
    intro: "NVC Regd. No. 2025 | B.V.Sc. & A.H. | Experienced in treating domestic and pet animals.",
  },
];

const treatments = [
  {
    title: "Pet Consultation",
    description: "Complete health checkups and consultations for dogs, cats, and other pets.",
    icon: Stethoscope,
    slug: "pet-consultation",
  },
  {
    title: "Vaccinations",
    description: "All vaccines for dogs, cats, broilers, and layers to keep them healthy.",
    icon: Syringe,
    slug: "vaccinations",
  },
  {
    title: "Surgery",
    description: "Castration, spaying, and orthopedic surgeries performed by experts.",
    icon: Scissors,
    slug: "surgery",
  },
  {
    title: "Orthopedic Care",
    description: "Specialized bone and joint treatments for your pets.",
    icon: Bone,
    slug: "orthopedic-care",
  },
  {
    title: "Dog Care",
    description: "Complete healthcare services specifically designed for dogs.",
    icon: Dog,
    slug: "dog-care",
  },
  {
    title: "Cat Care",
    description: "Specialized veterinary services for cats of all breeds.",
    icon: Cat,
    slug: "cat-care",
  },
];

const Home = () => {
  return (
    <main>
      <SEO 
        title="Horizon Vet Clinic & Pet Shop | Nepalganj - Trusted Veterinary Care"
        description="Horizon Vet Clinic & Pet Shop in Nepalganj provides compassionate veterinary care, advanced pet treatments, vaccinations, surgeries, and personalized services. Located at Surkhet Road, Nepalgunj-21900, Banke. Open 8 AM - 8 PM daily."
        canonical="/"
      />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VeterinaryCare",
          "name": "Horizon Vet Clinic & Pet Shop",
          "description": "Compassionate veterinary care and pet shop services in Nepalganj, Nepal",
          "url": "https://vetclinichorizon.com",
          "telephone": "+977-9869369273",
          "email": "horizonvetclinic01@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Surkhet Road",
            "addressLocality": "Nepalgunj",
            "postalCode": "21900",
            "addressRegion": "Banke",
            "addressCountry": "NP"
          },
          "openingHours": "Mo-Su 08:00-20:00",
          "priceRange": "$$",
          "image": "https://vetclinichorizon.com/assests/clinic%20serviice%20photo/Clinic%20Service%20photo1.jpg"
        })
      }} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
        {/* Subtle animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-200" />
        </div>
        
        <div className="container-custom section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Trusted Veterinary Care in Nepalgunj
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up delay-100">
                Your Pet's Health, Our{" "}
                <span className="gradient-text">Priority</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-up delay-200">
                Experience compassionate veterinary care with qualified doctors 
                and comprehensive services for all your pets and livestock. 
                We treat them like family.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link to="/appointment">
                  <Button className="btn-primary text-base px-8 py-6 group">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/treatments">
                  <Button variant="outline" className="btn-secondary text-base px-8 py-6">
                    Our Services
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border animate-fade-up delay-400">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left group">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text transition-transform duration-200 group-hover:scale-105">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/assests/clinic serviice photo/Clinic Service photo1.jpg"
                  alt="Horizon Vet Clinic"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card animate-float hidden sm:block transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl hero-gradient-bg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">NVC Registered</div>
                    <div className="text-sm text-muted-foreground">Qualified Veterinarians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Why Choose Us"
            title="Excellence in Veterinary Care"
            description="We combine veterinary expertise with genuine love for animals to provide the best care for your pets."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-base text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Veterinary Services"
            description="From routine check-ups to specialized surgeries, we offer complete care for your pets and livestock."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <CardTreatment key={index} {...treatment} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/treatments">
              <Button className="btn-secondary group">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Team"
            title="Meet Our Veterinarians"
            description="Our NVC-registered veterinarians bring years of experience and dedication to animal care."
          />
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredDoctors.map((doctor, index) => (
              <CardDoctor key={index} {...doctor} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/doctors">
              <Button className="btn-secondary group">
                Learn More About Our Doctors
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Clinic"
            title="Inside Horizon Vet Clinic"
            description="Take a look at our facilities, pet shop, and treatment areas where we care for your beloved pets."
          />
          <Carousel opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
            <CarouselContent className="-ml-4">
              {[
                { src: "/assests/clinic photos/pet-shop-counter.jpg", alt: "Horizon Vet Clinic pet shop counter with branded logo" },
                { src: "/assests/clinic photos/clinic-exterior.jpg", alt: "Horizon Vet Clinic exterior and signboard in Nepalgunj" },
                { src: "/assests/clinic photos/treatment-with-patient.jpg", alt: "Veterinary staff treating a dog patient at the clinic" },
                { src: "/assests/clinic photos/xray-diagnosis.jpg", alt: "X-ray lightbox for veterinary diagnosis" },
                { src: "/assests/clinic photos/staff-at-work.jpg", alt: "Clinic staff preparing treatment area" },
                { src: "/assests/clinic photos/pet-supplies.jpg", alt: "Pet accessories and supplies at the pet shop" },
              ].map((img, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-5" />
            <CarouselNext className="-right-4 sm:-right-5" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="hero-gradient-bg rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Care for Your Pet?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Schedule an appointment with our expert veterinarians today. 
                We're here to keep your furry friends healthy and happy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/appointment">
                  <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:9869369273">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                    Call: +9779869369273
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
