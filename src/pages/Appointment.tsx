import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const GETFORM_ENDPOINT = "https://getform.io/f/bolqmdwa";

const services = [
  "Pet & Animal Treatment", "Castration & Spaying", "Orthopedic Surgery",
  "Vaccination Services", "Poultry Services", "Farm Consultation", "Pet Shop", "Other",
];

const timeSlots = ["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];
const petTypes = ["Dog", "Cat", "Bird", "Poultry", "Farm Animal", "Other"];

const Appointment = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", petName: "", petType: "", petAge: "",
    service: "", date: "", time: "", notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, form_type: "Appointment Booking", submitted_at: new Date().toISOString() }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast({ title: "Appointment Request Sent!" });
      } else throw new Error();
    } catch {
      toast({ title: "Submission Failed", description: "Please try again or call us.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = "w-full bg-background border-2 border-foreground py-4 px-5 mono-font text-sm focus:outline-none focus:border-[3px]";
  const labelCls = "mono-label block mb-3";

  if (isSubmitted) {
    return (
      <main className="bg-background pt-32 pb-24 px-6 md:px-12 lg:px-20 min-h-screen">
        <div className="max-w-3xl mx-auto text-center border-2 border-foreground p-12 md:p-20">
          <CheckCircle2 className="w-20 h-20 mx-auto mb-8 stroke-[1.5]" />
          <h1 className="display-font text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Appointment Request Received
          </h1>
          <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">
            Thank you! We'll confirm your appointment via phone within a few hours. If urgent, please call +977-9869369273.
          </p>
          <div className="mono-label inline-block px-6 py-3 border border-foreground mb-10">
            REF #HZ-{Date.now().toString().slice(-6)}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">Return Home</Link>
            <button onClick={() => setIsSubmitted(false)} className="btn-secondary">Book Another</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <SEO
        title="Book Appointment | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Schedule an appointment with our expert veterinarians at Horizon Vet Clinic Nepalganj."
        canonical="/appointment"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 section-border min-h-[55vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-foreground" />
            <span className="mono-label">Scheduling System / Nepalgunj</span>
          </div>
          <h1 className="display-font text-5xl md:text-7xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase mb-10">
            Book An<br />Appointment
          </h1>
          <p className="mono-label opacity-60">Fill out the form below to reserve your specialist consultation.</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <label className={labelCls}>Your Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Phone Number *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+977" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Email Address (Optional)</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@domain.com" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Pet Name</label>
                <input type="text" value={formData.petName} onChange={(e) => setFormData({ ...formData, petName: e.target.value })} placeholder="Name" className={inputCls} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <label className={labelCls}>Pet Type</label>
                <select value={formData.petType} onChange={(e) => setFormData({ ...formData, petType: e.target.value })} className={`${inputCls} appearance-none cursor-pointer`}>
                  <option value="">Select Pet Type</option>
                  {petTypes.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Pet Age</label>
                <input type="text" value={formData.petAge} onChange={(e) => setFormData({ ...formData, petAge: e.target.value })} placeholder="e.g. 2 years" className={inputCls} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <label className={labelCls}>Service Needed *</label>
                <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={`${inputCls} appearance-none cursor-pointer`}>
                  <option value="">Select Service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Date *</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split("T")[0]} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Time *</label>
                  <select required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="">Slot</option>
                    {timeSlots.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className={labelCls}>Additional Notes</label>
              <textarea rows={5} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Please describe your pet's current status..." className={`${inputCls} resize-y`} />
            </div>

            <div className="flex justify-center pt-4">
              <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 px-16 py-6">
                {isSubmitting ? "Submitting..." : "Confirm Appointment →"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Walk in */}
      <section className="py-24 px-6 md:px-12 lg:px-20 section-border bg-secondary">
        <div className="max-w-4xl mx-auto border-2 border-foreground p-12 md:p-16 text-center bg-background">
          <h2 className="display-font text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Prefer To Walk In?</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto opacity-80">
            No appointment needed for general consultations. Just walk in during our working hours.
          </p>
          <div className="grid md:grid-cols-2 gap-10 border-t-2 border-foreground pt-10">
            <div>
              <span className="mono-label opacity-40 block mb-2">Clinic Hours</span>
              <p className="display-font text-xl font-medium">8:00 AM – 8:00 PM<br />7 Days a Week</p>
            </div>
            <div>
              <span className="mono-label opacity-40 block mb-2">Address</span>
              <p className="display-font text-xl font-medium">Surkhet Road, Nepalgunj-2<br />Banke, Nepal</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
