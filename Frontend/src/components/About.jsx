import { Users, Award, Globe, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained engineers and technical personnel with minimum Diploma Level qualifications."
  },
  {
    icon: Globe,
    title: "Global Training",
    description: "Staff trained internationally in China, Australia, and Dubai on cutting-edge technologies."
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Two decades of excellence in the Kenyan telecommunications industry."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Regular training programs with major equipment suppliers and technology partners."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/15 top-0 right-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Building Kenya's Digital Future
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Compliance Technologies Limited was incorporated in Kenya in 2004 with a clear vision: 
              to become one of the top-performing companies in the Communications industry within 
              Kenya and the East African Region.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Located at Compliance Building, Magadi Road, Ongata Rongai, we offer tailored solutions 
              whether as comprehensive end-to-end turnkey solutions for full network deployment, or 
              particular solutions catering to specific project needs.
            </p>
            
            <div className="flex items-center gap-6 p-6 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full primary-gradient flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-2xl text-primary-foreground">AM</span>
              </div>
              <div>
                <div className="font-display font-semibold text-lg">Ann M. Maina</div>
                <div className="text-muted-foreground">Director</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
