
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl md:text-2xl text-quantum-electric-blue mb-6">Page Not Found</p>
          <p className="text-quantum-text-gray mb-8 max-w-lg mx-auto">
            The quantum state you're looking for seems to have collapsed or doesn't exist in this reality.
          </p>
          <Link to="/" className="btn-quantum">
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
