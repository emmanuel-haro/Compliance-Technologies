const clients = [
  {
    name: "SEACOM Kenya",
    description:
      "First level maintenance, data center support, fiber optics management, and storage inventory services.",
  },
  {
    name: "Safaricom Kenya",
    description:
      "Supply of engineering materials, fiber optics installations, microwave systems, and contractual maintenance.",
  },
  {
    name: "Airtel Kenya",
    description:
      "Microwave installations, SWAP contract projects, and NEC microwave integration services.",
  },
  {
    name: "Huawei Technologies",
    description:
      "CDMA installations, Optix and Metro transmission equipment, civil works supervision across Kenya.",
  },
  {
    name: "Jamii Telecoms",
    description:
      "Satellite core equipment installations, fiber cable infrastructure, and 3G equipment commissioning.",
  },
  {
    name: "Linksoft Telecom",
    description:
      "Complete BTS site solutions including tower construction, generator installations, and site integrations.",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Partners
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Trusted by Industry Leaders
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve built lasting partnerships with Kenya&apos;s leading
            telecommunications companies, delivering excellence across every
            project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full primary-gradient flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {client.name}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
