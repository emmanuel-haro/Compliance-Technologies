import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({ title: "Please fill in required fields", description: "Name, email and message are required." });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        toast({ title: "Message sent", description: "We received your message and will get back to you soon." });
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
      } else {
        const errMsg = data?.errors?.[0]?.msg || data?.error || "Failed to send message";
        toast({ title: "Error", description: errMsg });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Network or server error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 bottom-0 left-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your telecommunications infrastructure? 
            Contact us today for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Our Location</h3>
                <p className="text-muted-foreground">
                  Compliance Building, Ground Floor<br />
                  Magadi Road, Ongata Rongai<br />
                  P.O. Box 3760-00506, Nairobi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">
                  Office: 0747 109 747<br />
                  Mobile: 0722 710 072
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">info@compliancetech.co.ke</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient rounded-2xl p-8 border border-border">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" className="bg-background/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." rows={4} className="bg-background/50" />
              </div>
              <Button type="submit" disabled={isLoading} variant="glow" className="w-full">
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
