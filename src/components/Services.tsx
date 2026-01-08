import { Radio, Wifi, Cable, Server, Wrench, Building2 } from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Microwave & GSM Installations",
    description: "Expert installation and commissioning of microwave systems, GSM base stations, BSCs, and MSCs for seamless network coverage."
  },
  {
    icon: Cable,
    title: "Fiber Optic Solutions",
    description: "End-to-end fiber optic infrastructure including trenching, laying, joinery, and transmission equipment installations."
  },
  {
    icon: Server,
    title: "Data Center Services",
    description: "Deployment, maintenance, and support for servers, network routing, switching equipment within data centers and POPs."
  },
  {
    icon: Wifi,
    title: "Network Engineering",
    description: "Circuit integrations, ODFs, SDH equipment, and comprehensive network interconnectivity solutions."
  },
  {
    icon: Building2,
    title: "Civil & Electrical Works",
    description: "Complete tower construction, foundation work, equipment installations, and power system upgrades."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "First-line maintenance, troubleshooting, remote hand support, and 24/7 fault resolution services."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Comprehensive Telecom Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From consultancy to commissioning, we provide end-to-end engineering services 
            tailored to your telecommunications infrastructure needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
