
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">About QuantumOpen.de</h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-quantum-electric-blue">Our Mission</h2>
                <p className="text-quantum-text-gray mb-6">
                  At QuantumOpen.de, we focus on the characterization and control of open quantum systems. Our mission is to develop cutting-edge techniques for understanding and mitigating decoherence in quantum systems, while advancing pulse-level control methodologies to push the boundaries of quantum computing capabilities.
                </p>
                <p className="text-quantum-text-gray">
                  Through rigorous research and innovative approaches, we aim to bridge the gap between theoretical quantum physics and practical quantum computing applications, making quantum technology more reliable and accessible for scientific and commercial use.
                </p>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-quantum-electric-blue">Why Quantum Openness Matters</h2>
                <p className="text-quantum-text-gray mb-6">
                  Quantum systems inevitably interact with their environment, leading to decoherence – the loss of quantum information that limits the performance of quantum devices. Understanding these open system dynamics is crucial for developing robust quantum technologies.
                </p>
                <p className="text-quantum-text-gray">
                  By focusing on the characterization and control of quantum openness, we enable more efficient error correction, longer coherence times, and ultimately more powerful quantum computing capabilities. Our research directly addresses one of the fundamental challenges in the field of quantum information science.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-quantum-electric-blue">Our Approach</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="quantum-card p-6 glow">
                    <h3 className="text-xl font-semibold mb-4 text-quantum-electric-blue">Research</h3>
                    <p className="text-quantum-text-gray">
                      We develop theoretical frameworks and experimental protocols for characterizing quantum noise and optimizing control pulse sequences across different quantum computing platforms.
                    </p>
                  </div>
                  <div className="quantum-card p-6 glow">
                    <h3 className="text-xl font-semibold mb-4 text-quantum-electric-blue">Implementation</h3>
                    <p className="text-quantum-text-gray">
                      We translate our research into practical applications, creating tools and methodologies that can be integrated with existing quantum computing infrastructures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
