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
    <main className="bg-background relative overflow-x-hidden">
      <SEO
        title="Pet Care Blog | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Expert pet care tips, veterinary advice, and animal health articles."
        canonical="/blogs"
      />

      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-[#FFE4E1] -top-20 -left-10" />
        <div className="blob w-[300px] h-[300px] bg-[#E6E6FA] top-20 -right-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-5">News & Updates</span>
          <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-foreground">
            The <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">journal</span>
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="display-font text-2xl md:text-3xl font-bold tracking-tight text-foreground">Latest Articles</h2>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">{String(blogs.length).padStart(2, "0")} Items</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((b) => <CardBlog key={b.slug} {...b} />)}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-[#292524] text-white card-rounded py-24 px-6 text-center soft-shadow-lg relative overflow-hidden">
          <div className="blob w-[500px] h-[500px] bg-[#FFB7B2]/25 -top-60 -left-32" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="display-font text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-10">
              Schedule a <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">visit</span>
            </h2>
            <Link to="/appointment" className="btn-primary">Book Appointment →</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
