import { useState } from "react";
import { Calendar, Clock, User, Phone, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const GETFORM_ENDPOINT = "https://getform.io/f/bolqmdwa";

const services = [
  "Pet & Animal Treatment",
  "Castration & Spaying",
  "Orthopedic Surgery",
  "Vaccination Services",
  "Poultry Services",
  "Farm Consultation",
  "Pet Shop",
  "Other",
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

const Appointment = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          form_type: "Appointment Booking",
          submitted_at: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Appointment Request Sent!",
          description: "We'll contact you shortly to confirm your appointment.",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="pt-20 min-h-screen">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-lg mx-auto text-center card-base">
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Appointment Request Received!
              </h1>
              <p className="text-muted-foreground mb-6">
                Thank you for booking with Horizon Vet Clinic. Our team will contact you within 
                24 hours to confirm your appointment.
              </p>
              <div className="bg-muted/50 rounded-xl p-4 text-left mb-6">
                <h3 className="font-medium text-foreground mb-3">Appointment Details:</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                </div>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                className="btn-secondary"
              >
                Book Another Appointment
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full mb-4">
              Book Now
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Schedule Your <span className="gradient-text">Appointment</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Book a consultation with our expert veterinarians. We'll confirm your 
              appointment within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card-base space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="9XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Service Selection
                </h2>
                <div className="space-y-2">
                  <Label htmlFor="service">Select Service *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Preferred Date & Time
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Additional Information
                </h2>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific concerns or information we should know..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button type="submit" className="btn-primary w-full py-6 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  By submitting, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
