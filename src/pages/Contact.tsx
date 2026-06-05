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

  const inputCls = "w-full bg-transparent border-b-2 border-foreground py-4 mono-font text-base focus:outline-none focus:border-b-[3px] placeholder:italic placeholder:text-foreground/40";

  return (
    <main className="bg-background">
      <SEO
        title="Contact Us | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Contact Horizon Vet Clinic & Pet Shop in Nepalganj. Surkhet Road, Nepalgunj-2, Banke. Call +977-9869369273."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Nepalgunj, Banke</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h1 className="display-font text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
              Get In<br />Touch
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-lg italic">
              Have a question or need to schedule a priority consultation? Our specialists are available 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Tiles */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 border border-foreground">
          {[
            { icon: MapPin, label: "Location", value: "Surkhet Road\nNepalgunj-2, Banke" },
            { icon: Phone, label: "Phone", value: "+977-9869369273" },
            { icon: Clock, label: "Hours", value: "08:00 — 20:00\n7 Days a Week" },
          ].map((c, i) => (
            <div key={c.label} className={`p-10 flex flex-col gap-6 ${i < 2 ? "border-b md:border-b-0 md:border-r border-foreground" : ""}`}>
              <c.icon className="w-12 h-12 stroke-[1.5]" />
              <div>
                <span className="mono-label opacity-40 mb-3 block">{c.label}</span>
                <p className="display-font text-xl md:text-2xl font-bold uppercase whitespace-pre-line">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-font text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16">Send Us A Message</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            <div>
              <label className="mono-label opacity-40 block mb-2">Full Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your name" className={inputCls} />
            </div>
            <div>
              <label className="mono-label opacity-40 block mb-2">Phone Number *</label>
              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Enter your number" className={inputCls} />
            </div>
            <div>
              <label className="mono-label opacity-40 block mb-2">Email Address *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email" className={inputCls} />
            </div>
            <div>
              <label className="mono-label opacity-40 block mb-2">Subject</label>
              <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Inquiry type" className={inputCls} />
            </div>
            <div className="md:col-span-2">
              <label className="mono-label opacity-40 block mb-2">Message *</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help?" className={`${inputCls} resize-none`} />
            </div>
            <div className="md:col-span-2">
              <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-font text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Visit Us</h2>
          <div className="border-2 border-foreground w-full h-[500px]">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.709084335404!2d81.6232509!3d28.063906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998677b25c0c72d%3A0x8596256d8a3a25cf!2sHorizon%20Vet%20Clinic%20%26%20Pet%20Shop!5e0!3m2!1sen!2snp!4v1764936701774!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) brightness(0.95)" }}
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
