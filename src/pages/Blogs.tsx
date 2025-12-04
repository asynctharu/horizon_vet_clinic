import { Link } from "react-router-dom";
import CardBlog from "@/components/CardBlog";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "heart-health-tips",
    title: "10 Essential Tips for Maintaining Heart Health",
    excerpt: "Learn simple lifestyle changes that can significantly improve your cardiovascular health and reduce the risk of heart disease.",
    thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    date: "Dec 1, 2024",
    category: "Health Tips",
  },
  {
    slug: "flu-season-guide",
    title: "Your Complete Guide to Flu Season Prevention",
    excerpt: "Stay protected this flu season with our comprehensive prevention strategies and tips for staying healthy.",
    thumbnail: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    date: "Nov 28, 2024",
    category: "Prevention",
  },
  {
    slug: "mental-health-awareness",
    title: "Understanding Mental Health: Breaking the Stigma",
    excerpt: "Mental health is just as important as physical health. Learn how to take care of both and recognize when to seek help.",
    thumbnail: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&h=400&fit=crop",
    date: "Nov 25, 2024",
    category: "Wellness",
  },
  {
    slug: "diabetes-management",
    title: "Living Well with Diabetes: A Comprehensive Guide",
    excerpt: "Expert advice on managing diabetes through diet, exercise, and medication for a healthier, more fulfilling life.",
    thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    date: "Nov 20, 2024",
    category: "Chronic Care",
  },
  {
    slug: "pediatric-wellness",
    title: "Keeping Your Kids Healthy: A Parent's Guide",
    excerpt: "From nutrition to immunizations, everything you need to know about maintaining your child's health and development.",
    thumbnail: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
    date: "Nov 15, 2024",
    category: "Pediatrics",
  },
  {
    slug: "sleep-health",
    title: "The Science of Better Sleep",
    excerpt: "Discover how quality sleep impacts your overall health and learn practical tips for improving your sleep hygiene.",
    thumbnail: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop",
    date: "Nov 10, 2024",
    category: "Wellness",
  },
];

const events = [
  {
    title: "Free Health Screening Day",
    date: "December 15, 2024",
    time: "9:00 AM - 4:00 PM",
    description: "Join us for complimentary blood pressure, glucose, and cholesterol screenings.",
  },
  {
    title: "Nutrition Workshop",
    date: "December 20, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Learn about healthy eating habits and meal planning with our registered dietitian.",
  },
  {
    title: "Stress Management Seminar",
    date: "January 8, 2025",
    time: "6:00 PM - 7:30 PM",
    description: "Discover effective techniques for managing stress and improving mental wellness.",
  },
];

const Blogs = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full mb-4">
              News & Updates
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Health <span className="gradient-text">Insights & Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest health tips, medical news, and 
              upcoming events at MediCare.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={blog.slug} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardBlog {...blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
            <Link to="/contact">
              <Button className="btn-secondary" size="sm">
                Register for Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="card-base">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{event.time}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="hero-gradient-bg rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest health tips, news, and event updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button className="bg-background text-foreground hover:bg-background/90 px-6 py-3 font-semibold rounded-xl">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
