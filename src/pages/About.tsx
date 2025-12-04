import SectionHeader from "@/components/SectionHeader";
import { Heart, Target, Eye, Users, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with empathy, kindness, and respect.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in medical care.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We uphold honesty and transparency in all we do.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We collaborate to deliver the best outcomes for patients.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace new technologies and treatment methods.",
  },
  {
    icon: Clock,
    title: "Accessibility",
    description: "We make quality healthcare available to everyone.",
  },
];

const milestones = [
  { year: "1998", event: "MediCare Clinic founded by Dr. James Mitchell" },
  { year: "2005", event: "Expanded to a full-service medical center" },
  { year: "2010", event: "Introduced advanced diagnostic imaging" },
  { year: "2015", event: "Launched our pediatric and women's health centers" },
  { year: "2020", event: "Implemented telemedicine services" },
  { year: "2024", event: "Celebrating 25+ years of community healthcare" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Caring for Your Health Since{" "}
                <span className="gradient-text">1998</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                For over 25 years, MediCare has been a trusted healthcare provider 
                in our community. We combine cutting-edge medical technology with 
                compassionate care to deliver exceptional health outcomes.
              </p>
            </div>
            <div className="relative animate-fade-up delay-200">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Our medical facility"
                className="rounded-3xl shadow-2xl"
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
                To provide accessible, high-quality healthcare services that improve 
                the health and well-being of every individual in our community. We are 
                committed to treating each patient with dignity, respect, and personalized 
                attention.
              </p>
            </div>
            <div className="card-base">
              <div className="w-14 h-14 rounded-2xl hero-gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading healthcare provider in the region, recognized for 
                clinical excellence, innovative treatments, and exceptional patient 
                experience. We envision a healthier community where everyone has 
                access to quality care.
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
            description="These core values guide everything we do at MediCare."
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

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="25+ Years of Excellence"
            description="A timeline of our growth and commitment to healthcare."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-6 pb-10 last:pb-0">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0 z-10 border-4 border-background">
                    <span className="font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="card-base flex-1 mt-2">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Facility"
            title="State-of-the-Art Medical Center"
            description="Our modern facility is equipped with the latest technology to serve you better."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop"
              alt="Reception area"
              className="rounded-2xl shadow-card w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop"
              alt="Consultation room"
              className="rounded-2xl shadow-card w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
              alt="Medical equipment"
              className="rounded-2xl shadow-card w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
