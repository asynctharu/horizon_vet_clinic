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
    <div className="soft-card p-0 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 px-7 text-left"
      >
        <span className="display-font text-base md:text-lg font-semibold tracking-tight text-foreground">{q}</span>
        <span className={`w-9 h-9 shrink-0 pill-rounded flex items-center justify-center transition-colors ${open ? "bg-[#FFB7B2] text-white" : "bg-[#FFE4E1] text-foreground"}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="px-7 pb-6 text-base leading-relaxed text-muted-foreground animate-fade-in">{a}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="bg-background relative overflow-x-hidden">
      <SEO
        title="FAQ | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Frequently asked questions about Horizon Vet Clinic services, appointments, and pet care."
        canonical="/faq"
      />

      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-[#FFE4E1] -top-20 -left-10" />
        <div className="blob w-[300px] h-[300px] bg-[#E6E6FA] top-20 -right-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-5">Help Center</span>
          <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-foreground">
            Frequently <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">asked</span>
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-14">
          {faqs.map((section) => (
            <div key={section.category}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="display-font text-2xl md:text-3xl font-bold tracking-tight text-foreground">{section.category}</h2>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">{String(section.questions.length).padStart(2, "0")} Items</span>
              </div>
              <div className="space-y-3">
                {section.questions.map((f) => <FAQItem key={f.q} {...f} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-[#E8EFE8] card-rounded py-20 px-6 text-center soft-shadow">
          <h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight mb-5 text-foreground">
            Still have <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">questions</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">Our team is here to help with any concern about your pet or livestock.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <a href="tel:+9779869369273" className="btn-secondary">Call (+977) 9869369273</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
