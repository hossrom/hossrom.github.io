
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import { ExternalLink, Download } from "lucide-react";

type ResearchArea = "all" | "noise" | "pulse" | "hardware";

type Paper = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  doi: string;
  abstract: string;
  category: ResearchArea[];
  pdfLink?: string;
  externalLink: string;
};

const papers: Paper[] = [
  {
    id: 1,
    title: "Characterizing and Mitigating Quantum Noise Through Pulse Engineering",
    authors: "A. Müller, B. Schmidt, C. Weber",
    journal: "Quantum Information Processing, Vol. 12, Issue 3",
    doi: "10.1038/s41567-021-01339-6",
    abstract:
      "We present a comprehensive framework for characterizing environmental noise in superconducting quantum circuits and demonstrate how tailored pulse sequences can mitigate its effects, leading to a 40% improvement in gate fidelity.",
    category: ["noise", "pulse"],
    pdfLink: "#",
    externalLink: "#",
  },
  {
    id: 2,
    title: "Cross-Platform Pulse Optimization for Quantum Control",
    authors: "D. Fischer, E. König, F. Bauer",
    journal: "Physical Review Applied, Vol. 8, Issue 2",
    doi: "10.1103/PhysRevApplied.8.024019",
    abstract:
      "This work introduces a universal approach to pulse optimization that can be applied across different quantum computing architectures, demonstrating comparable performance improvements in both superconducting and trapped-ion systems.",
    category: ["pulse", "hardware"],
    externalLink: "#",
  },
  {
    id: 3,
    title: "Quantum Noise Spectroscopy in Open Systems",
    authors: "G. Wagner, H. Klein, I. Zimmermann",
    journal: "npj Quantum Information, Vol. 6",
    doi: "10.1038/s41534-020-00346-2",
    abstract:
      "We develop and experimentally validate a new spectroscopic technique for mapping the frequency-dependent noise profile in quantum devices, revealing previously undetectable sources of decoherence.",
    category: ["noise"],
    pdfLink: "#",
    externalLink: "#",
  },
];

const Research = () => {
  const [activeCategory, setActiveCategory] = useState<ResearchArea>("all");

  const filteredPapers = papers.filter((paper) =>
    activeCategory === "all" ? true : paper.category.includes(activeCategory)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />

      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">
              Research & Papers
            </h1>
            <p className="text-quantum-text-gray text-center max-w-3xl mx-auto mb-16">
              Explore our publications on quantum system characterization, pulse optimization, and
              cross-platform quantum control methodologies.
            </p>

            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "all"
                      ? "bg-quantum-gradient text-white"
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  All Papers
                </button>
                <button
                  onClick={() => setActiveCategory("noise")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "noise"
                      ? "bg-quantum-gradient text-white"
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  Noise Characterization
                </button>
                <button
                  onClick={() => setActiveCategory("pulse")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "pulse"
                      ? "bg-quantum-gradient text-white"
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  Pulse Optimization
                </button>
                <button
                  onClick={() => setActiveCategory("hardware")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "hardware"
                      ? "bg-quantum-gradient text-white"
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  Hardware Integration
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {filteredPapers.map((paper) => (
                <div key={paper.id} className="quantum-card p-6 relative glow">
                  <h2 className="text-2xl font-semibold mb-2 text-quantum-electric-blue">
                    {paper.title}
                  </h2>
                  <p className="text-quantum-text-gray mb-2">{paper.authors}</p>
                  <p className="text-sm text-quantum-text-gray/70 mb-4">
                    {paper.journal} • DOI: {paper.doi}
                  </p>
                  <p className="text-quantum-text-gray mb-6">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={paper.externalLink}
                      className="inline-flex items-center text-quantum-electric-blue hover:text-quantum-neon-blue transition-colors"
                    >
                      Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    {paper.pdfLink && (
                      <a
                        href={paper.pdfLink}
                        className="inline-flex items-center text-quantum-electric-blue hover:text-quantum-neon-blue transition-colors"
                      >
                        Download PDF <Download className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
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

export default Research;
