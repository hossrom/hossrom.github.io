
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import { Link } from "react-router-dom";

type Partner = {
  id: number;
  name: string;
  description: string;
  logo: string;
};

const partners: Partner[] = [
  {
    id: 1,
    name: "Quantum Research Institute",
    description: "Joint research on noise characterization methodologies for superconducting quantum circuits.",
    logo: "/placeholder.svg",
  },
  {
    id: 2,
    name: "TechQuantum Labs",
    description: "Collaboration on cross-platform pulse optimization techniques and benchmarking.",
    logo: "/placeholder.svg",
  },
  {
    id: 3,
    name: "University of Quantum Physics",
    description: "Academic partnership focused on theoretical foundations of open quantum systems.",
    logo: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Quantum Computing Solutions",
    description: "Industry partnership developing practical applications of our pulse control techniques.",
    logo: "/placeholder.svg",
  },
];

const Collaborations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">Collaborations</h1>
            <p className="text-quantum-text-gray text-center max-w-3xl mx-auto mb-16">
              We work closely with academic institutions, research laboratories, and industry partners to advance quantum technology.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {partners.map((partner) => (
                <div key={partner.id} className="quantum-card p-6 flex flex-col items-center text-center glow">
                  <div className="mb-4 w-32 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-full max-h-full"
                      onError={(e) => {
                        // Fallback for image loading errors
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-4 text-quantum-electric-blue">{partner.name}</h2>
                  <p className="text-quantum-text-gray">{partner.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-quantum-electric-blue">Interested in Collaborating?</h2>
              <p className="text-quantum-text-gray mb-8 max-w-2xl mx-auto">
                We're always open to new research partnerships and collaborative projects. Reach out to discuss how we can work together to advance quantum computing technology.
              </p>
              <Link to="/contact" className="btn-quantum">
                Collaborate With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collaborations;
