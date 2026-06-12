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

  const inputCls = "w-full bg-white border border-stone-200 pill-rounded py-3.5 px-5 text-sm focus:outline-none focus:border-[#FFB7B2] focus:ring-4 focus:ring-[#FFB7B2]/15 transition-all";
  const labelCls = "text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground block mb-2 ml-2";

  if (isSubmitted) {
    return (
      <main className="bg-background pt-40 pb-24 px-6 md:px-12 lg:px-20 min-h-screen relative overflow-x-hidden">
        <div className="blob w-[400px] h-[400px] bg-[#FFE4E1] -top-20 -left-20" />
        <div className="blob w-[300px] h-[300px] bg-[#E6E6FA] bottom-20 -right-10" />
        <div className="max-w-3xl mx-auto text-center soft-card p-12 md:p-16 relative z-10">
          <div className="w-20 h-20 mx-auto pill-rounded bg-[#E8EFE8] flex items-center justify-center mb-8">
            <CheckCircle2 className="w-10 h-10 stroke-[1.5] text-foreground" />
          </div>
          <h1 className="display-font text-3xl md:text-4xl font-bold tracking-tight mb-5 text-foreground">
            Appointment Request <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">received</span>
          </h1>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Thank you! We'll confirm your appointment via phone within a few hours. If urgent, please call +977-9869369273.
          </p>
          <div className="inline-block text-xs font-bold tracking-[0.18em] uppercase px-5 py-2.5 pill-rounded bg-[#FFE4E1] text-foreground mb-8">
            REF #HZ-{Date.now().toString().slice(-6)}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary">Return Home</Link>
            <button onClick={() => setIsSubmitted(false)} className="btn-secondary">Book Another</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background relative overflow-x-hidden">
      <SEO
        title="Book Appointment | Horizon Vet Clinic & Pet Shop Nepalganj"
        description="Schedule an appointment with our expert veterinarians at Horizon Vet Clinic Nepalganj."
        canonical="/appointment"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-12 px-6 md:px-12 lg:px-20 text-center">
        <div className="blob w-[400px] h-[400px] bg-[#FFE4E1] -top-20 -left-10" />
        <div className="blob w-[300px] h-[300px] bg-[#E6E6FA] top-20 -right-10" style={{ animationDelay: "-3s" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-5">Scheduling System / Nepalgunj</span>
          <h1 className="display-font text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 text-foreground">
            Book an <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">appointment</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">Fill out the form below to reserve your specialist consultation.</p>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 md:px-6 my-12">
        <div className="max-w-4xl mx-auto bg-white card-rounded p-8 md:p-12 lg:p-16 soft-shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
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
              <div className="md:col-span-2">
                <label className={labelCls}>Service Needed *</label>
                <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={`${inputCls} appearance-none cursor-pointer`}>
                  <option value="">Select Service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
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

            <div>
              <label className={labelCls}>Additional Notes</label>
              <textarea rows={5} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Please describe your pet's current status..." className={`w-full bg-white border border-stone-200 py-4 px-5 text-sm focus:outline-none focus:border-[#FFB7B2] focus:ring-4 focus:ring-[#FFB7B2]/15 transition-all resize-y`} style={{ borderRadius: "1.5rem" }} />
            </div>

            <div className="flex justify-center pt-2">
              <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 px-12 py-5">
                {isSubmitting ? "Submitting..." : "Confirm Appointment →"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Walk in */}
      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-[#E8EFE8] card-rounded p-12 md:p-16 text-center soft-shadow">
          <h2 className="display-font text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            Prefer to <span className="cursive-font text-[#FFB7B2] font-normal text-[1.1em]">walk in</span>?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            No appointment needed for general consultations. Just walk in during our working hours.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white card-rounded p-7">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-2">Clinic Hours</span>
              <p className="display-font text-lg font-semibold text-foreground">8:00 AM – 8:00 PM<br />7 Days a Week</p>
            </div>
            <div className="bg-white card-rounded p-7">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-2">Address</span>
              <p className="display-font text-lg font-semibold text-foreground">Surkhet Road, Nepalgunj-2<br />Banke, Nepal</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
