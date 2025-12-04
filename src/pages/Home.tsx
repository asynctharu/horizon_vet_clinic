import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Clock, Users, Stethoscope, Activity, Brain, Bone, Baby, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import CardDoctor from "@/components/CardDoctor";
import CardTreatment from "@/components/CardTreatment";
import CardBlog from "@/components/CardBlog";

const stats = [
  { number: "25+", label: "Years of Experience" },
  { number: "50+", label: "Expert Doctors" },
  { number: "100k+", label: "Happy Patients" },
  { number: "24/7", label: "Emergency Care" },
];

const highlights = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "We put your health and comfort at the center of everything we do.",
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and modern treatment methods.",
  },
  {
    icon: Clock,
    title: "Quick Appointments",
    description: "Easy online booking with minimal wait times.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Board-certified specialists with years of experience.",
  },
];

const featuredDoctors = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    intro: "Board-certified cardiologist with 15+ years of experience in cardiovascular care.",
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    intro: "Specialist in neurological disorders with a focus on innovative treatments.",
  },
  {
    id: "dr-emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    intro: "Dedicated pediatrician providing compassionate care for children of all ages.",
  },
];

const treatments = [
  {
    title: "General Medicine",
    description: "Comprehensive primary care for all your general health needs.",
    icon: Stethoscope,
    slug: "general-medicine",
  },
  {
    title: "Cardiology",
    description: "Expert heart care with advanced diagnostic and treatment options.",
    icon: Activity,
    slug: "cardiology",
  },
  {
    title: "Neurology",
    description: "Specialized care for brain and nervous system conditions.",
    icon: Brain,
    slug: "neurology",
  },
  {
    title: "Orthopedics",
    description: "Treatment for bone, joint, and muscle disorders.",
    icon: Bone,
    slug: "orthopedics",
  },
  {
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    icon: Baby,
    slug: "pediatrics",
  },
  {
    title: "Ophthalmology",
    description: "Complete eye care from routine exams to complex surgeries.",
    icon: Eye,
    slug: "ophthalmology",
  },
];

const blogs = [
  {
    slug: "heart-health-tips",
    title: "10 Essential Tips for Maintaining Heart Health",
    excerpt: "Learn simple lifestyle changes that can significantly improve your cardiovascular health.",
    thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    date: "Dec 1, 2024",
    category: "Health Tips",
  },
  {
    slug: "flu-season-guide",
    title: "Your Complete Guide to Flu Season Prevention",
    excerpt: "Stay protected this flu season with our comprehensive prevention strategies.",
    thumbnail: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    date: "Nov 28, 2024",
    category: "Prevention",
  },
  {
    slug: "mental-health-awareness",
    title: "Understanding Mental Health: Breaking the Stigma",
    excerpt: "Mental health is just as important as physical health. Learn how to take care of both.",
    thumbnail: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&h=400&fit=crop",
    date: "Nov 25, 2024",
    category: "Wellness",
  },
];

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
        <div className="container-custom section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Trusted Healthcare Provider
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health, Our{" "}
                <span className="gradient-text">Priority</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience world-class healthcare with compassionate doctors, 
                advanced technology, and personalized treatment plans designed 
                just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment">
                  <Button className="btn-primary text-base px-8 py-6">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/treatments">
                  <Button variant="outline" className="btn-secondary text-base px-8 py-6">
                    Our Services
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                  alt="Modern medical facility"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl hero-gradient-bg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Certified Care</div>
                    <div className="text-sm text-muted-foreground">100% Verified Doctors</div>
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
            title="Excellence in Healthcare"
            description="We combine medical expertise with genuine care to provide you with the best possible healthcare experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-base text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
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
            title="Comprehensive Healthcare Solutions"
            description="From preventive care to specialized treatments, we offer a wide range of medical services."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <CardTreatment key={index} {...treatment} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/treatments">
              <Button className="btn-secondary">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
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
            title="Meet Our Expert Doctors"
            description="Our team of board-certified physicians brings decades of combined experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor, index) => (
              <CardDoctor key={index} {...doctor} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/doctors">
              <Button className="btn-secondary">
                View All Doctors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="hero-gradient-bg rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Take Care of Your Health?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule an appointment with our expert doctors today and take the first step 
              towards a healthier you.
            </p>
            <Link to="/appointment">
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg">
                Book Your Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Latest News"
            title="Health Insights & Updates"
            description="Stay informed with the latest health tips, news, and events from our clinic."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <CardBlog key={index} {...blog} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blogs">
              <Button className="btn-secondary">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
