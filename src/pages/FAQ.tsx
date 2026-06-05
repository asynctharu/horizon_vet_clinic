import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SEO from "@/components/SEO";

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What are your clinic hours?", a: "Open 8:00 AM to 8:00 PM, seven days a week, including public holidays. Emergency line available 24/7." },
      { q: "Do I need an appointment to visit?", a: "Walk-ins are welcome for urgent care; appointments are recommended to minimize wait." },
      { q: "How do I access my pet's medical records?", a: "Contact our reception or request copies in person. Records are kept on file for follow-up consultations." },
      { q: "What should I bring to my first appointment?", a: "Bring any previous vaccination cards, a brief medical history, and a current medication list." },
    ],
  },
  {
    category: "Appointments",
    questions: [
      { q: "How do I schedule an appointment?", a: "Use the online form, call +977-9869369273, or visit us in person during clinic hours." },
      { q: "Can I reschedule or cancel?", a: "Yes — please notify us at least 24 hours in advance whenever possible." },
      { q: "How long are appointments?", a: "Initial consultations 30–45 minutes; follow-ups 15–20 minutes." },
      { q: "Do you offer remote consultations?", a: "Yes, we offer phone-based consultations for non-emergency follow-ups." },
    ],
  },
  {
    category: "Services",
    questions: [
      { q: "What services do you offer?", a: "Consultation, surgery, vaccinations, orthopedics, poultry services, farm consultation, and a full pet shop." },
      { q: "Do you provide emergency services?", a: "Yes — urgent care during clinic hours; the emergency line is reachable 24/7." },
      { q: "Can I get lab work done?", a: "Yes, basic diagnostics are available on-site, with results typically the same day." },
      { q: "Do you sell pet food and supplies?", a: "Yes — our in-house pet shop stocks premium food, supplements, and accessories." },
    ],
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-foreground">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-8 text-left"
      >
        <span className="display-font text-xl md:text-2xl font-bold uppercase tracking-tight">{q}</span>
        {open ? <Minus className="w-6 h-6 shrink-0" /> : <Plus className="w-6 h-6 shrink-0" />}
      </button>
      {open && (
        <div className="pb-8 pr-12 text-base leading-relaxed opacity-80 animate-fade-in">{a}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="bg-background">
      <SEO
        title="FAQ | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Frequently asked questions about Horizon Vet Clinic services, appointments, and pet care."
        canonical="/faq"
      />

      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Help Center</span>
          </div>
          <h1 className="display-font text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
            Frequently<br />Asked
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-4xl mx-auto space-y-20">
          {faqs.map((section) => (
            <div key={section.category}>
              <div className="flex items-center justify-between mb-10 border-b-4 border-foreground pb-4">
                <h2 className="display-font text-3xl md:text-4xl font-bold uppercase tracking-tight">{section.category}</h2>
                <span className="mono-label opacity-40">{String(section.questions.length).padStart(2, "0")} Items</span>
              </div>
              <div>
                {section.questions.map((f) => <FAQItem key={f.q} {...f} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center section-border bg-secondary">
        <h2 className="display-font text-4xl md:text-6xl font-black uppercase mb-6">Still Have Questions?</h2>
        <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto italic">Our team is here to help with any concern about your pet or livestock.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary">Contact Us</Link>
          <a href="tel:+9779869369273" className="btn-secondary">Call (+977) 9869369273</a>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
