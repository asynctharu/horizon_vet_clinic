import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const Location = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-secondary px-3 py-1 rounded-full mb-4">
              Find Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Visit Our <span className="gradient-text">Medical Center</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Conveniently located in the heart of Healthcare City with easy access 
              to public transportation and ample parking.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="card-base h-[400px] lg:h-[500px] overflow-hidden p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2167682314374!2d-73.98784492397562!3d40.75797837138381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701864000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MediCare Location"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Medical Center Drive<br />
                      Healthcare City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      (123) 456-7890
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      Emergency: (123) 456-7899
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@medicare.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      info@medicare.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      appointments@medicare.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Saturday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Sunday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Directions"
            title="Getting Here"
            description="Multiple convenient options to reach our medical center."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* By Car */}
            <div className="card-base">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">By Car</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Free parking available in our multi-level garage. Enter from 
                Medical Center Drive. Valet parking also available at the main entrance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Take Exit 23 from Highway 101</li>
                <li>• Turn right onto Healthcare Boulevard</li>
                <li>• Left on Medical Center Drive</li>
                <li>• Parking garage entrance on right</li>
              </ul>
            </div>

            {/* Public Transit */}
            <div className="card-base">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Public Transit</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Our facility is easily accessible via bus and metro. 
                The Medical Center station is just a 2-minute walk away.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Metro: Blue Line - Medical Center Station</li>
                <li>• Bus Routes: 12, 45, 78 stop at our entrance</li>
                <li>• Bike racks available near main entrance</li>
                <li>• Wheelchair accessible routes throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-base max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Assistance?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our patient services team is available to help with directions, 
              parking validation, and any other questions you may have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+1234567890"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a 
                href="mailto:info@medicare.com"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
