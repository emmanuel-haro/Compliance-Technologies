import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary/20 top-[-200px] right-[-100px] animate-glow-pulse" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/15 bottom-[-100px] left-[-100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Compliance Technologies" className="h-12 w-auto rounded-lg" />
            <span className="font-display font-bold text-xl hidden sm:block">Compliance Technologies</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#clients" className="text-muted-foreground hover:text-foreground transition-colors">Clients</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button variant="glow" size="sm" className="gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Get In Touch</span>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32 lg:pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted Since 2004 • 100% Kenyan Owned</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Engineering Excellence in{' '}
            <span className="text-gradient">Telecommunications</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kenya's premier provider of communications, electrical, and electronics solutions. 
            From GSM installations to fiber optics, we deliver end-to-end telecom infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="glow" size="lg" className="gap-2">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">20+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Sites Deployed</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">6+</div>
              <div className="text-sm text-muted-foreground mt-1">Major Clients</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Kenyan Owned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
