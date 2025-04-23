
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

type Technology = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "Superconducting Circuits",
    description:
      "Our techniques optimize pulse sequences for superconducting qubits, reducing decoherence and improving gate fidelities through precise control of microwave pulses.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Trapped Ions",
    description:
      "We develop specialized noise characterization protocols for trapped ion systems, enabling high-precision quantum operations through laser pulse shaping.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Neutral Atoms",
    description:
      "Our control techniques for neutral atom arrays balance quantum manipulation speed with coherence preservation, optimized for large-scale quantum processing.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Pulse Control Software",
    description:
      "We provide integrated software tools for quantum pulse design, optimization, and implementation across different quantum hardware platforms.",
    image: "/placeholder.svg",
  },
];

const Technologies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">Technologies</h1>
            <p className="text-quantum-text-gray text-center max-w-3xl mx-auto mb-16">
              Our expertise spans multiple quantum computing platforms, with specialized techniques for each technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {technologies.map((tech) => (
                <div key={tech.id} className="quantum-card p-6 flex flex-col glow">
                  <div className="mb-6 overflow-hidden rounded-lg bg-black/50 aspect-video">
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        // Fallback for image loading errors
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 text-quantum-electric-blue">{tech.name}</h2>
                  <p className="text-quantum-text-gray">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Technologies;
