import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    slug: "pet-vaccination-guide",
    title: "Complete Vaccination Guide for Dogs and Cats",
    excerpt: "Learn about essential vaccines for your pets, vaccination schedules, and why regular immunization is crucial for their health.",
    thumbnail: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    author: "Dr. Shiva Prasad Bhusal",
    category: "Pet Care",
    content: `
      <p>Vaccinations are one of the most important preventive measures you can take to protect your beloved pets. Regular immunization helps prevent serious and potentially fatal diseases in dogs and cats.</p>
      
      <h2>Core Vaccines for Dogs</h2>
      <p>Core vaccines are essential for all dogs regardless of their lifestyle. These include:</p>
      <ul>
        <li><strong>Rabies:</strong> Required by law in most areas, protects against this fatal viral disease</li>
        <li><strong>Distemper:</strong> Protects against a serious viral illness affecting multiple organs</li>
        <li><strong>Parvovirus:</strong> Prevents a highly contagious and often fatal gastrointestinal disease</li>
        <li><strong>Adenovirus:</strong> Guards against infectious hepatitis and respiratory disease</li>
      </ul>
      
      <h2>Core Vaccines for Cats</h2>
      <p>Essential vaccines for all cats include:</p>
      <ul>
        <li><strong>Rabies:</strong> Critical for all cats, even indoor ones</li>
        <li><strong>Feline Panleukopenia:</strong> Protects against a severe and often fatal disease</li>
        <li><strong>Feline Calicivirus:</strong> Prevents respiratory infections</li>
        <li><strong>Feline Herpesvirus:</strong> Guards against viral respiratory disease</li>
      </ul>
      
      <h2>Vaccination Schedule</h2>
      <p>Puppies and kittens typically start their vaccination series at 6-8 weeks of age, with boosters given every 3-4 weeks until they are 16 weeks old. Adult pets need regular boosters, usually annually or every three years depending on the vaccine.</p>
      
      <h2>Why Timing Matters</h2>
      <p>Following the proper vaccination schedule is crucial. Young animals receive antibodies from their mother's milk, but these fade over time. Vaccines must be given at the right time to provide protection as maternal antibodies wane.</p>
      
      <h2>Schedule Your Pet's Vaccination</h2>
      <p>Contact Horizon Vet Clinic to ensure your pet is up-to-date on all necessary vaccinations. Our veterinarians will create a personalized vaccination plan based on your pet's age, health status, and lifestyle.</p>
    `,
  },
  {
    slug: "spaying-neutering-benefits",
    title: "Benefits of Spaying and Neutering Your Pets",
    excerpt: "Discover the health and behavioral benefits of castration and spaying for dogs and cats, and what to expect during recovery.",
    thumbnail: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=600&fit=crop",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    author: "Dr. Ashish Tharu",
    category: "Surgery",
    content: `
      <p>Spaying and neutering are common surgical procedures that offer numerous health and behavioral benefits for your pets. At Horizon Vet Clinic, we recommend these procedures for pets not intended for breeding.</p>
      
      <h2>Health Benefits for Female Pets</h2>
      <p>Spaying (ovariohysterectomy) provides significant health advantages:</p>
      <ul>
        <li>Eliminates the risk of uterine infections (pyometra)</li>
        <li>Greatly reduces the risk of mammary tumors if done before the first heat cycle</li>
        <li>Prevents unwanted pregnancies and complications</li>
        <li>Eliminates heat cycles and associated behaviors</li>
      </ul>
      
      <h2>Health Benefits for Male Pets</h2>
      <p>Neutering (castration) offers these benefits:</p>
      <ul>
        <li>Prevents testicular cancer</li>
        <li>Reduces the risk of prostate problems</li>
        <li>Decreases roaming behavior and risk of injuries</li>
        <li>Reduces marking and territorial behaviors</li>
      </ul>
      
      <h2>Behavioral Improvements</h2>
      <p>Both procedures can help reduce unwanted behaviors such as aggression, mounting, and the urge to roam. Neutered males are often calmer and more focused on their families.</p>
      
      <h2>What to Expect</h2>
      <p>These are routine surgeries performed under general anesthesia. Most pets go home the same day. Recovery typically takes 10-14 days, during which you should keep your pet calm and prevent licking of the incision site.</p>
      
      <h2>The Right Time</h2>
      <p>The ideal age for spaying or neutering depends on your pet's species, breed, and size. Generally, we recommend the procedure at 6-9 months of age. Contact us for personalized advice for your pet.</p>
    `,
  },
  {
    slug: "poultry-disease-prevention",
    title: "Poultry Disease Prevention: A Farmer's Guide",
    excerpt: "Essential tips for keeping your broilers and layers healthy through proper vaccination, biosecurity, and farm management.",
    thumbnail: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200&h=600&fit=crop",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    author: "Dr. Shiva Prasad Bhusal",
    category: "Poultry",
    content: `
      <p>Maintaining flock health is essential for successful poultry farming. Prevention is always better than cure, and implementing proper biosecurity measures can save you significant losses.</p>
      
      <h2>Essential Biosecurity Measures</h2>
      <p>Biosecurity is your first line of defense against disease:</p>
      <ul>
        <li>Control access to your farm - limit visitors and vehicle entry</li>
        <li>Require footbaths and hand washing before entering poultry areas</li>
        <li>Keep equipment clean and disinfected</li>
        <li>Separate age groups (all-in, all-out system)</li>
        <li>Control wild bird and rodent access</li>
      </ul>
      
      <h2>Vaccination Programs</h2>
      <p>Work with a veterinarian to develop an appropriate vaccination schedule. Common vaccines include:</p>
      <ul>
        <li>Newcastle Disease (ND)</li>
        <li>Infectious Bronchitis (IB)</li>
        <li>Infectious Bursal Disease (IBD/Gumboro)</li>
        <li>Marek's Disease (for layers)</li>
        <li>Fowl Pox</li>
      </ul>
      
      <h2>Nutrition and Water Quality</h2>
      <p>Proper nutrition is fundamental to maintaining immune health. Ensure birds have access to balanced feed appropriate for their age and production stage. Clean, fresh water should always be available.</p>
      
      <h2>Signs of Disease to Watch For</h2>
      <p>Early detection is crucial. Watch for decreased feed/water intake, drop in egg production, respiratory signs, abnormal droppings, or sudden deaths. Contact a veterinarian immediately if you notice these signs.</p>
      
      <h2>Regular Health Monitoring</h2>
      <p>Schedule regular veterinary visits for flock health assessments. We offer farm visits and can help develop customized health management plans for your operation.</p>
    `,
  },
  {
    slug: "pet-nutrition-essentials",
    title: "Pet Nutrition: Choosing the Right Food for Your Pet",
    excerpt: "A comprehensive guide to understanding pet nutrition, reading food labels, and selecting the best diet for your furry friends.",
    thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
    date: "Nov 25, 2024",
    readTime: "5 min read",
    author: "Dr. Ashish Tharu",
    category: "Nutrition",
    content: `
      <p>Proper nutrition is the foundation of your pet's health. Understanding what to feed your pet and how to read food labels can help you make the best choices for their wellbeing.</p>
      
      <h2>Understanding Pet Food Labels</h2>
      <p>Look for foods that meet AAFCO (Association of American Feed Control Officials) standards. The ingredient list shows components in order of weight - quality protein should be among the first ingredients.</p>
      
      <h2>Protein Requirements</h2>
      <p>Dogs and cats need high-quality animal protein. Dogs can thrive on about 18-25% protein, while cats require higher levels (26-30% or more) as obligate carnivores.</p>
      
      <h2>Age-Appropriate Nutrition</h2>
      <ul>
        <li><strong>Puppies/Kittens:</strong> Need higher calories and nutrients for growth</li>
        <li><strong>Adults:</strong> Require balanced maintenance diets</li>
        <li><strong>Seniors:</strong> May need adjusted protein and calorie levels</li>
      </ul>
      
      <h2>Common Nutritional Mistakes</h2>
      <p>Avoid these common errors:</p>
      <ul>
        <li>Overfeeding - obesity is a major health concern</li>
        <li>Feeding table scraps regularly</li>
        <li>Giving foods toxic to pets (chocolate, grapes, onions, etc.)</li>
        <li>Frequent diet changes without transition periods</li>
      </ul>
      
      <h2>Special Dietary Needs</h2>
      <p>Some pets require prescription diets for conditions like kidney disease, food allergies, or weight management. Consult with our veterinarians if your pet has specific health concerns.</p>
      
      <h2>Get Personalized Advice</h2>
      <p>Every pet is unique. Visit Horizon Vet Clinic for a nutritional consultation tailored to your pet's specific needs, age, and health status.</p>
    `,
  },
  {
    slug: "orthopedic-care-pets",
    title: "Understanding Orthopedic Issues in Pets",
    excerpt: "Learn about common bone and joint problems in dogs and cats, signs to watch for, and available treatment options.",
    thumbnail: "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=1200&h=600&fit=crop",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    author: "Dr. Shiva Prasad Bhusal",
    category: "Health",
    content: `
      <p>Orthopedic conditions are common in pets, especially as they age. Understanding these issues can help you recognize problems early and seek appropriate treatment.</p>
      
      <h2>Common Orthopedic Conditions</h2>
      <p>The most frequently seen orthopedic problems include:</p>
      <ul>
        <li><strong>Arthritis:</strong> Degenerative joint disease affecting older pets</li>
        <li><strong>Hip Dysplasia:</strong> Abnormal hip joint development, common in large breeds</li>
        <li><strong>Cruciate Ligament Injuries:</strong> Knee injuries often requiring surgery</li>
        <li><strong>Fractures:</strong> Broken bones from trauma</li>
        <li><strong>Luxating Patella:</strong> Kneecap displacement, common in small breeds</li>
      </ul>
      
      <h2>Signs of Orthopedic Problems</h2>
      <p>Watch for these warning signs:</p>
      <ul>
        <li>Limping or lameness</li>
        <li>Difficulty rising or lying down</li>
        <li>Reluctance to jump, climb stairs, or exercise</li>
        <li>Swelling around joints</li>
        <li>Crying out when touched</li>
        <li>Changes in gait or posture</li>
      </ul>
      
      <h2>Treatment Options</h2>
      <p>Treatment depends on the condition and may include:</p>
      <ul>
        <li>Pain management medications</li>
        <li>Anti-inflammatory drugs</li>
        <li>Physical therapy and rehabilitation</li>
        <li>Weight management</li>
        <li>Surgical intervention when needed</li>
        <li>Joint supplements</li>
      </ul>
      
      <h2>Prevention Tips</h2>
      <p>Maintain a healthy weight, provide appropriate exercise, and use joint supplements for at-risk breeds. Regular check-ups help catch problems early.</p>
    `,
  },
  {
    slug: "farm-animal-health",
    title: "Managing Livestock Health on Commercial Farms",
    excerpt: "Expert advice on maintaining animal health in dairy and livestock farms, including preventive care and disease management.",
    thumbnail: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&h=600&fit=crop",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    author: "Dr. Shiva Prasad Bhusal",
    category: "Farm",
    content: `
      <p>Effective health management is crucial for profitable livestock farming. A proactive approach to animal health can prevent losses and improve productivity.</p>
      
      <h2>Preventive Health Programs</h2>
      <p>Establish a comprehensive health program that includes:</p>
      <ul>
        <li>Regular vaccination schedules</li>
        <li>Parasite control programs (deworming)</li>
        <li>Hoof care and trimming</li>
        <li>Reproductive health monitoring</li>
        <li>Nutritional assessments</li>
      </ul>
      
      <h2>Common Livestock Diseases</h2>
      <p>Be aware of prevalent diseases in your area:</p>
      <ul>
        <li><strong>Foot and Mouth Disease:</strong> Highly contagious viral disease</li>
        <li><strong>Mastitis:</strong> Udder infection in dairy cattle</li>
        <li><strong>Respiratory infections:</strong> Common in housed animals</li>
        <li><strong>Parasitic diseases:</strong> Internal and external parasites</li>
        <li><strong>Metabolic disorders:</strong> Milk fever, ketosis in dairy cattle</li>
      </ul>
      
      <h2>Biosecurity on Farms</h2>
      <p>Implement strict biosecurity measures:</p>
      <ul>
        <li>Quarantine new animals before introducing to the herd</li>
        <li>Control visitor and vehicle access</li>
        <li>Maintain clean water and feed sources</li>
        <li>Properly dispose of dead animals and waste</li>
      </ul>
      
      <h2>Record Keeping</h2>
      <p>Maintain detailed records of treatments, vaccinations, breeding, and health events. Good records help identify patterns and make informed management decisions.</p>
      
      <h2>Working with Your Veterinarian</h2>
      <p>Regular veterinary visits are essential. We offer farm health consultations, emergency services, and can develop customized health management plans for your operation.</p>
    `,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  const baseUrl = "https://vetclinichorizon.com";
  const currentUrl = `${baseUrl}/blogs/${slug}`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(blog?.title || "");
    let shareUrl = "";
    switch (platform) {
      case "facebook": shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`; break;
      case "twitter": shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`; break;
      case "instagram": shareUrl = `https://www.instagram.com/`; break;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
  };

  if (!blog) {
    return (
      <main className="bg-background pt-32 pb-24 px-6 text-center min-h-screen">
        <h1 className="display-font text-4xl font-bold uppercase mb-8">Article Not Found</h1>
        <Link to="/blogs" className="btn-primary">View All Articles</Link>
      </main>
    );
  }

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-5xl mx-auto">
          <Link to="/blogs" className="inline-flex items-center gap-2 mono-label mb-12 hover:line-through">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label border border-foreground px-3 py-1.5">{blog.category}</span>
            <span className="mono-label opacity-50">{blog.date}</span>
            <span className="mono-label opacity-50">{blog.readTime}</span>
          </div>
          <h1 className="display-font text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
            {blog.title}
          </h1>
          <p className="mono-label">By {blog.author}</p>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 md:px-12 lg:px-20 py-12 section-border">
        <div className="max-w-5xl mx-auto border-4 border-foreground p-3">
          <img src={blog.thumbnail} alt={blog.title} className="w-full grayscale aspect-[16/9] object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-lg max-w-none text-foreground prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-h2:display-font prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-foreground/80 prose-li:mb-2 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Share */}
          <div className="mt-16 pt-8 border-t-2 border-foreground">
            <div className="flex flex-wrap items-center gap-6">
              <span className="mono-label inline-flex items-center gap-2">
                <Share2 className="w-3.5 h-3.5" /> Share
              </span>
              <div className="flex gap-3">
                <button onClick={() => handleShare("facebook")} aria-label="Facebook" className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><Facebook className="w-4 h-4" /></button>
                <button onClick={() => handleShare("twitter")} aria-label="Twitter" className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><Twitter className="w-4 h-4" /></button>
                <button onClick={() => handleShare("instagram")} aria-label="Instagram" className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><Instagram className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-24 text-center px-6">
        <h3 className="display-font text-3xl md:text-5xl font-bold uppercase mb-6">Questions About Your Pet?</h3>
        <p className="text-lg opacity-70 mb-10 italic max-w-xl mx-auto">Schedule a consultation with our expert veterinarians today.</p>
        <Link to="/appointment" className="bg-background text-foreground border-2 border-background px-10 py-5 mono-font text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-foreground hover:text-background transition-colors inline-block">
          Book Appointment →
        </Link>
      </section>
    </main>
  );
};

export default BlogDetail;