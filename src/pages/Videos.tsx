
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

type VideoCategory = "all" | "tutorials" | "presentations" | "demos";

type Video = {
  id: number;
  title: string;
  description: string;
  embedId: string;
  category: VideoCategory[];
};

const videos: Video[] = [
  {
    id: 1,
    title: "Introduction to Quantum Open Systems",
    description: "An overview of key concepts in quantum open system dynamics and decoherence.",
    embedId: "dQw4w9WgXcQ", // This is just a placeholder YouTube ID
    category: ["tutorials"],
  },
  {
    id: 2,
    title: "Pulse Optimization Techniques for Quantum Control",
    description: "Advanced methods for designing and optimizing quantum control pulses.",
    embedId: "dQw4w9WgXcQ", // This is just a placeholder YouTube ID
    category: ["tutorials", "demos"],
  },
  {
    id: 3,
    title: "Cross-Platform Quantum Computing: Challenges & Solutions",
    description: "Presentation on our approach to quantum computing across different hardware platforms.",
    embedId: "dQw4w9WgXcQ", // This is just a placeholder YouTube ID
    category: ["presentations"],
  },
  {
    id: 4,
    title: "Live Demo: Quantum Noise Characterization",
    description: "Demonstration of our software tools for analyzing and visualizing quantum noise profiles.",
    embedId: "dQw4w9WgXcQ", // This is just a placeholder YouTube ID
    category: ["demos"],
  },
];

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("all");

  const filteredVideos = videos.filter((video) =>
    activeCategory === "all" ? true : video.category.includes(activeCategory as VideoCategory)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">Videos</h1>
            <p className="text-quantum-text-gray text-center max-w-3xl mx-auto mb-16">
              Watch tutorials, presentations, and demonstrations about our quantum research and technologies.
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
                  All Videos
                </button>
                <button
                  onClick={() => setActiveCategory("tutorials")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "tutorials" 
                      ? "bg-quantum-gradient text-white" 
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  Tutorials
                </button>
                <button
                  onClick={() => setActiveCategory("presentations")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "presentations" 
                      ? "bg-quantum-gradient text-white" 
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  Presentations
                </button>
                <button
                  onClick={() => setActiveCategory("demos")}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === "demos" 
                      ? "bg-quantum-gradient text-white" 
                      : "bg-black/30 text-quantum-text-gray hover:text-white border border-white/10"
                  }`}
                >
                  Demos
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVideos.map((video) => (
                <div key={video.id} className="quantum-card overflow-hidden glow">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube-nocookie.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-quantum-electric-blue">{video.title}</h2>
                    <p className="text-quantum-text-gray">{video.description}</p>
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

export default Videos;
