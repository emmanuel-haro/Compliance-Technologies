import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Compliance Technologies" className="h-10 w-auto rounded-lg" />
            <span className="font-display font-bold">Compliance Technologies Ltd</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#clients" className="hover:text-foreground transition-colors">Clients</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Compliance Technologies Ltd. All rights reserved.</p>
          <p className="mt-1">100% Kenyan Owned • Engineering Excellence Since 2004</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
