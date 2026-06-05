import { Link } from "react-router-dom";
import CardBlog from "@/components/CardBlog";
import SEO from "@/components/SEO";

const blogs = [
  { slug: "pet-vaccination-guide", title: "Complete Vaccination Guide for Dogs and Cats", excerpt: "Essential vaccines, schedules, and why regular immunization is crucial.", thumbnail: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=500&fit=crop", date: "Dec 5, 2024", category: "Pet Care" },
  { slug: "spaying-neutering-benefits", title: "Benefits of Spaying and Neutering Your Pets", excerpt: "Health and behavioral benefits of castration and spaying for dogs and cats.", thumbnail: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=500&fit=crop", date: "Dec 1, 2024", category: "Surgery" },
  { slug: "poultry-disease-prevention", title: "Poultry Disease Prevention: A Farmer's Guide", excerpt: "Keep your broilers and layers healthy through vaccination and biosecurity.", thumbnail: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=500&fit=crop", date: "Nov 28, 2024", category: "Poultry" },
  { slug: "pet-nutrition-essentials", title: "Pet Nutrition: Choosing the Right Food", excerpt: "Understanding pet nutrition, reading labels, and selecting the best diet.", thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=500&fit=crop", date: "Nov 25, 2024", category: "Nutrition" },
  { slug: "orthopedic-care-pets", title: "Understanding Orthopedic Issues in Pets", excerpt: "Common bone and joint problems, signs to watch for, and treatment options.", thumbnail: "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=800&h=500&fit=crop", date: "Nov 20, 2024", category: "Health" },
  { slug: "farm-animal-health", title: "Managing Livestock Health on Commercial Farms", excerpt: "Expert advice on dairy and livestock health, prevention, and disease management.", thumbnail: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=500&fit=crop", date: "Nov 15, 2024", category: "Farm" },
];

const Blogs = () => {
  return (
    <main className="bg-background">
      <SEO
        title="Pet Care Blog | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Expert pet care tips, veterinary advice, and animal health articles."
        canonical="/blogs"
      />

      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">News & Updates</span>
          </div>
          <h1 className="display-font text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
            The<br />Journal
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 border-b-4 border-foreground pb-4">
            <h2 className="display-font text-3xl md:text-4xl font-bold uppercase tracking-tight">Latest Articles</h2>
            <span className="mono-label opacity-40">{String(blogs.length).padStart(2, "0")} Items</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((b) => <CardBlog key={b.slug} {...b} />)}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stats pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="display-font text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
            Schedule<br />A Visit
          </h2>
          <Link to="/appointment" className="bg-background text-foreground border-2 border-background px-10 py-5 mono-font text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-foreground hover:text-background transition-colors inline-block">
            Book Appointment →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
