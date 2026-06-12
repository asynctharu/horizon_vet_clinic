import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const GETFORM_ENDPOINT = "https://getform.io/f/bolqmdwa";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, form_type: "Contact Form", submitted_at: new Date().toISOString() }),
      });
      if (response.ok) {
        toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else throw new Error();
    } catch {
      toast({ title: "Submission Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = "w-full bg-white border border-stone-200 pill-rounded py-3.5 px-5 text-sm focus:outline-none focus:border-[#FFB7B2] focus:ring-4 focus:ring-[#FFB7B2]/15 placeholder:text-muted-foreground/60 placeholder:italic transition-all";
  const textareaCls = "w-full bg-white border border-stone-200 py-4 px-5 text-sm focus:outline-none focus:border-[#FFB7B2] focus:ring-4 focus:ring-[#FFB7B2]/15 placeholder:text-muted-foreground/60 placeholder:italic transition-all resize-none";

  const tiles = [
    { icon: MapPin, label: "Location", value: "Surkhet Road\nNepalgunj-2, Banke", tint: "bg-[#E8EFE8]" },
    { icon: Phone, label: "Phone", value: "+977-9869369273", tint: "bg-[#FFE4E1]" },
    { icon: Clock, label: "Hours", value: "08:00 — 20:00\n7 Days a Week", tint: "bg-[#EFEDF4]" },
  ];

  return (
    <main className="bg-background relative overflow-x-hidden">
      <SEO
        title="Contact Us | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Contact Horizon Vet Clinic & Pet Shop in Nepalganj. Surkhet Road, Nepalgunj-2, Banke. Call +977-9869369273."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-[#FFE4E1] -top-20 -right-10" />
        <div className="blob w-[300px] h-[300px] bg-[#E6E6FA] top-1/3 -left-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-5">Nepalgunj, Banke</span>
          <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-8 text-foreground">
            Get In <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question or need to schedule a priority consultation? Our specialists are available 7 days a week.
          </p>
        </div>
      </section>

      {/* Contact tiles */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {tiles.map((c) => (
            <div key={c.label} className="soft-card text-center">
              <div className={`w-14 h-14 mx-auto pill-rounded flex items-center justify-center ${c.tint} mb-5`}>
                <c.icon className="w-6 h-6 stroke-[1.5] text-foreground" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-3">{c.label}</span>
              <p className="display-font text-lg md:text-xl font-semibold text-foreground whitespace-pre-line">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form on lavender card */}
      <section className="px-4 md:px-6 my-12">
        <div className="max-w-7xl mx-auto bg-[#EFEDF4] card-rounded py-20 px-8 md:px-14 lg:px-20 soft-shadow">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center text-foreground">
              Send us a <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">message</span>
            </h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full name *" className={inputCls} />
              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone number *" className={inputCls} />
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email address *" className={inputCls} />
              <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Subject" className={inputCls} />
              <div className="md:col-span-2">
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help? *" className={textareaCls} style={{ borderRadius: "1.5rem" }} />
              </div>
              <div className="md:col-span-2 flex justify-center pt-2">
                <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight mb-10 text-foreground">
            Visit <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">us</span>
          </h2>
          <div className="card-rounded overflow-hidden soft-shadow w-full h-[500px] bg-white">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.709084335404!2d81.6232509!3d28.063906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998677b25c0c72d%3A0x8596256d8a3a25cf!2sHorizon%20Vet%20Clinic%20%26%20Pet%20Shop!5e0!3m2!1sen!2snp!4v1764936701774!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
