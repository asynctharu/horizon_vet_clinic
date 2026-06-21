import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus, Minus, PhoneCall } from "lucide-react";
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
        <span className="text-base md:text-lg font-semibold tracking-tight" style={{ color: "#192a43" }}>{q}</span>
        <span className={`w-9 h-9 shrink-0 pill-rounded flex items-center justify-center transition-colors ${open ? "bg-[#FF8C42] text-white" : "bg-orange-100 text-[#192a43]"}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="px-7 pb-6 text-base leading-relaxed text-gray-500 animate-fade-in">{a}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="bg-[#FCF7F0] relative overflow-x-hidden">
      <SEO
        title="FAQ | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Frequently asked questions about Horizon Vet Clinic services, appointments, and pet care."
        canonical="/faq"
      />

      <section className="relative pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-orange-100 -top-20 -left-10" />
        <div className="blob w-[300px] h-[300px] bg-teal-100 top-20 -right-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block mb-5">Help Center</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight" style={{ color: "#192a43" }}>
            Frequently <span style={{ color: "#FF8C42" }}>asked</span>
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-14 animate-fade-up">
          {faqs.map((section) => (
            <div key={section.category}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#192a43" }}>{section.category}</h2>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">{String(section.questions.length).padStart(2, "0")} Items</span>
              </div>
              <div className="space-y-3">
                {section.questions.map((f) => <FAQItem key={f.q} {...f} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-teal-100/50 card-rounded py-20 px-6 text-center soft-shadow">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5" style={{ color: "#192a43" }}>
            Still have <span style={{ color: "#FF8C42" }}>questions</span>?
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">Our team is here to help with any concern about your pet or livestock.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#192a43] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl smooth-hover">Contact Us</Link>
            <a href="tel:+9779869369273" className="bg-white text-[#192a43] border-2 border-[#FF8C42] px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 smooth-hover inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#FF8C42]" /> Call (+977) 9869369273
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
