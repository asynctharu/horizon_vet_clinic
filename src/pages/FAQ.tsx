import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What are your clinic hours?",
        a: "Our clinic is open from 8:00 AM to 8:00 PM, seven days a week, providing consistent access to care whenever you need it during regular hours. For situations that can’t wait, our emergency services remain available 24/7 to ensure you always have support, day or night.",
      },
      {
        q: "Do I need an appointment to visit?",
        a: "While we accept walk-ins for urgent care, we recommend scheduling an appointment to ensure minimal wait times and dedicated time with your physician. You can book online or call us.",
      },
      {
        q: "How do I access my medical records?",
        a: "You can request your medical records by contacting our patient services department. We also offer a secure online patient portal where you can view your records, test results, and appointment history.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records or test results from previous providers.",
      },
    ],
  },
  {
    category: "Appointments",
    questions: [
      {
        q: "How do I schedule an appointment?",
        a: "You can schedule an appointment through our website, by calling (+977) 9869369273, or by visiting our clinic in person. Online booking is available 24/7 for your convenience.",
      },
      {
        q: "Can I reschedule or cancel my appointment?",
        a: "Yes, you can reschedule or cancel your appointment up to 24 hours before your scheduled time without any fee. Please call us or use our online portal to make changes.",
      },
      {
        q: "How long are appointments typically?",
        a: "Initial consultations usually last 30-45 minutes, while follow-up appointments are typically 15-20 minutes. Specialized consultations may take longer depending on your needs.",
      },
      {
        q: "Do you offer telemedicine appointments?",
        a: "Yes, we offer telemedicine consultations for many non-emergency conditions. This service allows you to consult with our doctors from the comfort of your home via secure video call.",
      },
    ],
  },
  {
    category: "Insurance & Billing",
    questions: [
      {
        q: "What insurance plans do you accept?",
        a: "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, United Healthcare, Cigna, and many others. Please contact us to verify your specific coverage.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we offer flexible payment plans for patients who need financial assistance. Our billing department can work with you to create a plan that fits your budget.",
      },
      {
        q: "What if I don't have insurance?",
        a: "We welcome patients without insurance. We offer competitive self-pay rates and can provide cost estimates before your visit. Ask about our discount programs for uninsured patients.",
      },
      {
        q: "How do I get an itemized bill?",
        a: "You can request an itemized bill directly at our billing counter during regular clinic hours. Our staff will prepare and provide your detailed statement on the spot.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        q: "What medical services do you offer?",
        a: "We offer comprehensive healthcare services including general medicine, cardiology, neurology, pediatrics, orthopedics, dermatology, ophthalmology, and preventive care. Visit our Treatments page for a complete list.",
      },
      {
        q: "Do you provide emergency services?",
        a: "We provide urgent care services during clinic hours. For life-threatening emergencies, please call 911 or visit your nearest emergency room. Our emergency line (+977) 9869369273 is available 24/7 for guidance.",
      },
      {
        q: "Can I get lab work done at your facility?",
        a: "Yes, we have an on-site laboratory for routine blood work, urinalysis, and other common tests. Results are typically available within 24-48 hours and can be accessed through our patient portal.",
      },
      {
        q: "Do you offer vaccinations?",
        a: "Yes, we provide a full range of vaccinations for children and adults, including flu shots, COVID-19 vaccines, travel immunizations, and routine childhood vaccines.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="FAQ | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Find answers to frequently asked questions about Horizon Vet Clinic services, appointments, pet care, and more. Get help with your veterinary care needs."
        canonical="/faq"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full mb-4">
              Help Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services, appointments, 
              insurance, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${sectionIndex}-${index}`}
                      className="card-base border-none"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-0">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="card-base text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our patient services team is 
              here to help with any questions or concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
              <a href="tel:+9779869369273">
  <Button className="btn-secondary">Call (+977) 9869369273</Button>
              </a>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
