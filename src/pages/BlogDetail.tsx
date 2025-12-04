import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    slug: "heart-health-tips",
    title: "10 Essential Tips for Maintaining Heart Health",
    excerpt: "Learn simple lifestyle changes that can significantly improve your cardiovascular health.",
    thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=600&fit=crop",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    author: "Dr. Sarah Johnson",
    category: "Health Tips",
    content: `
      <p>Heart disease remains one of the leading causes of death worldwide, but the good news is that many risk factors are within your control. By making simple lifestyle changes, you can significantly reduce your risk and improve your overall cardiovascular health.</p>
      
      <h2>1. Eat a Heart-Healthy Diet</h2>
      <p>Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit saturated fats, trans fats, sodium, and added sugars. The Mediterranean diet has been shown to be particularly beneficial for heart health.</p>
      
      <h2>2. Exercise Regularly</h2>
      <p>Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week. Even small amounts of activity can provide significant benefits.</p>
      
      <h2>3. Maintain a Healthy Weight</h2>
      <p>Excess weight, especially around the midsection, increases the risk of heart disease. A combination of healthy eating and regular exercise can help you achieve and maintain a healthy weight.</p>
      
      <h2>4. Don't Smoke</h2>
      <p>Smoking is a major risk factor for heart disease. If you smoke, quitting is the single best thing you can do for your heart health.</p>
      
      <h2>5. Limit Alcohol</h2>
      <p>If you drink alcohol, do so in moderation. For most adults, this means up to one drink a day for women and up to two drinks a day for men.</p>
      
      <h2>6. Manage Stress</h2>
      <p>Chronic stress may contribute to heart disease. Find healthy ways to manage stress, such as exercise, meditation, or spending time with loved ones.</p>
      
      <h2>7. Get Quality Sleep</h2>
      <p>Poor sleep quality and insufficient sleep are linked to increased heart disease risk. Aim for 7-9 hours of quality sleep per night.</p>
      
      <h2>8. Monitor Your Blood Pressure</h2>
      <p>High blood pressure is a major risk factor for heart disease. Have your blood pressure checked regularly and work with your doctor to keep it in a healthy range.</p>
      
      <h2>9. Control Cholesterol</h2>
      <p>High cholesterol can lead to plaque buildup in your arteries. Know your cholesterol numbers and take steps to keep them in a healthy range.</p>
      
      <h2>10. Schedule Regular Checkups</h2>
      <p>Regular health screenings can help detect problems early when they're easier to treat. Don't skip your annual checkup!</p>
      
      <p>Remember, it's never too early or too late to start taking care of your heart. Small changes can lead to big improvements in your cardiovascular health over time.</p>
    `,
  },
  {
    slug: "flu-season-guide",
    title: "Your Complete Guide to Flu Season Prevention",
    excerpt: "Stay protected this flu season with our comprehensive prevention strategies.",
    thumbnail: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=600&fit=crop",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    author: "Dr. Michael Chen",
    category: "Prevention",
    content: `
      <p>Flu season typically runs from October through May, with peak activity between December and February. Taking preventive measures can help protect you and your family from this contagious respiratory illness.</p>
      
      <h2>Get Vaccinated</h2>
      <p>The flu vaccine is your best defense against influenza. It's recommended for everyone 6 months and older. The vaccine is updated each year to match circulating strains.</p>
      
      <h2>Practice Good Hygiene</h2>
      <p>Wash your hands frequently with soap and water for at least 20 seconds. Use hand sanitizer when soap isn't available. Avoid touching your face, especially your eyes, nose, and mouth.</p>
      
      <h2>Boost Your Immune System</h2>
      <p>Support your immune system by eating a balanced diet rich in fruits and vegetables, getting regular exercise, managing stress, and getting adequate sleep.</p>
      
      <h2>Avoid Close Contact</h2>
      <p>Stay away from people who are sick when possible. If you're ill, limit contact with others to prevent spreading the virus.</p>
      
      <h2>Keep Surfaces Clean</h2>
      <p>Regularly disinfect frequently touched surfaces like doorknobs, light switches, and phones, especially if someone in your household is sick.</p>
      
      <h2>Know the Symptoms</h2>
      <p>Flu symptoms include fever, cough, sore throat, body aches, headache, fatigue, and sometimes vomiting and diarrhea. If you experience these symptoms, stay home and consult with your healthcare provider.</p>
    `,
  },
  {
    slug: "mental-health-awareness",
    title: "Understanding Mental Health: Breaking the Stigma",
    excerpt: "Mental health is just as important as physical health. Learn how to take care of both.",
    thumbnail: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=1200&h=600&fit=crop",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    author: "Dr. Amanda Lee",
    category: "Wellness",
    content: `
      <p>Mental health is an essential component of overall well-being. Just like physical health, mental health requires attention, care, and sometimes professional support. Unfortunately, stigma surrounding mental health often prevents people from seeking the help they need.</p>
      
      <h2>Understanding Mental Health</h2>
      <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also influences how we handle stress, relate to others, and make choices.</p>
      
      <h2>Common Mental Health Conditions</h2>
      <p>Anxiety disorders, depression, bipolar disorder, and PTSD are among the most common mental health conditions. These are real medical conditions that can be effectively treated.</p>
      
      <h2>Signs to Watch For</h2>
      <p>Pay attention to changes in mood, sleep patterns, appetite, energy levels, and social behavior. Persistent feelings of sadness, anxiety, or hopelessness warrant professional attention.</p>
      
      <h2>Breaking the Stigma</h2>
      <p>Talking openly about mental health helps reduce stigma. Remember that seeking help is a sign of strength, not weakness. Mental health conditions are treatable, and recovery is possible.</p>
      
      <h2>Self-Care Strategies</h2>
      <p>Regular exercise, adequate sleep, healthy eating, mindfulness practices, and maintaining social connections all support mental well-being. It's important to make time for activities you enjoy.</p>
      
      <h2>When to Seek Help</h2>
      <p>If mental health challenges are interfering with your daily life, relationships, or work, it's time to seek professional help. Your primary care doctor can provide referrals to mental health specialists.</p>
    `,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blogs">
            <Button className="btn-primary">View All Articles</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
            <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background max-w-4xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-8">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <article
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-foreground font-medium">
                  <Share2 className="w-4 h-4" />
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
                    <Facebook className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
                    <Twitter className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
                    <Linkedin className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 card-base text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Have Questions About Your Health?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our expert physicians today.
              </p>
              <Link to="/appointment">
                <Button className="btn-primary">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
