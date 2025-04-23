
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Zap, Globe } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const featureCards = [
  {
    icon: <Activity size={40} className="text-quantum-electric-blue" />,
    title: "Open Systems",
    description:
      "We characterize quantum noise and decoherence to better understand and control open quantum systems.",
  },
  {
    icon: <Zap size={40} className="text-quantum-electric-blue" />,
    title: "Pulse-Level Control",
    description:
      "Precise manipulation of quantum systems through optimized control pulses for high-fidelity quantum operations.",
  },
  {
    icon: <Globe size={40} className="text-quantum-electric-blue" />,
    title: "Cross-Platform Focus",
    description:
      "Solutions adaptable across superconducting, trapped ion, and neutral atom quantum computing platforms.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Engineering Quantum Openness
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-quantum-text-gray max-w-3xl mx-auto">
            Characterizing decoherence. Controlling quantum pulses.
          </p>
          <Link to="/research" className="btn-quantum">
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-quantum-electric-blue">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="quantum-card p-6 flex flex-col items-center text-center glow"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-quantum-electric-blue">
                  {card.title}
                </h3>
                <p className="text-quantum-text-gray">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-quantum-electric-blue">
            Featured Research
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="quantum-card aspect-video overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="w-20 h-20 rounded-full bg-quantum-electric-blue/20 backdrop-blur-sm flex items-center justify-center cursor-pointer animate-pulse-glow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-quantum-electric-blue">
                Quantum Pulse Optimization
              </h3>
              <p className="text-quantum-text-gray mb-6">
                Our latest research introduces novel techniques for optimizing quantum control pulses
                that significantly reduce decoherence effects while maintaining high operation
                fidelity across different quantum hardware platforms.
              </p>
              <Link
                to="/research"
                className="inline-flex items-center text-quantum-electric-blue hover:text-quantum-neon-blue transition-colors duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
