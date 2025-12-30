import CardBlog from "@/components/CardBlog";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    slug: "pet-vaccination-guide",
    title: "Complete Vaccination Guide for Dogs and Cats",
    excerpt: "Learn about essential vaccines for your pets, vaccination schedules, and why regular immunization is crucial for their health.",
    thumbnail: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    date: "Dec 5, 2024",
    category: "Pet Care",
  },
  {
    slug: "spaying-neutering-benefits",
    title: "Benefits of Spaying and Neutering Your Pets",
    excerpt: "Discover the health and behavioral benefits of castration and spaying for dogs and cats, and what to expect during recovery.",
    thumbnail: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
    date: "Dec 1, 2024",
    category: "Surgery",
  },
  {
    slug: "poultry-disease-prevention",
    title: "Poultry Disease Prevention: A Farmer's Guide",
    excerpt: "Essential tips for keeping your broilers and layers healthy through proper vaccination, biosecurity, and farm management.",
    thumbnail: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop",
    date: "Nov 28, 2024",
    category: "Poultry",
  },
  {
    slug: "pet-nutrition-essentials",
    title: "Pet Nutrition: Choosing the Right Food for Your Pet",
    excerpt: "A comprehensive guide to understanding pet nutrition, reading food labels, and selecting the best diet for your furry friends.",
    thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
    date: "Nov 25, 2024",
    category: "Nutrition",
  },
  {
    slug: "orthopedic-care-pets",
    title: "Understanding Orthopedic Issues in Pets",
    excerpt: "Learn about common bone and joint problems in dogs and cats, signs to watch for, and available treatment options.",
    thumbnail: "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600&h=400&fit=crop",
    date: "Nov 20, 2024",
    category: "Health",
  },
  {
    slug: "farm-animal-health",
    title: "Managing Livestock Health on Commercial Farms",
    excerpt: "Expert advice on maintaining animal health in dairy and livestock farms, including preventive care and disease management.",
    thumbnail: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop",
    date: "Nov 15, 2024",
    category: "Farm",
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
              Pet Care <span className="gradient-text">Tips & Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest pet care tips, veterinary news, and 
              upcoming events at Horizon Vet Clinic.
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


      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="hero-gradient-bg rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Subscribe for the latest pet care tips, veterinary news, and event updates.
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
