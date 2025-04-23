
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log("Form submission:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      file: null,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">Contact Us</h1>
            <p className="text-quantum-text-gray text-center max-w-3xl mx-auto mb-16">
              Get in touch with our team to discuss collaboration opportunities, research inquiries, or any questions about our work.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="quantum-card p-6">
                <h2 className="text-2xl font-semibold mb-6 text-quantum-electric-blue">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-quantum-text-gray mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 text-quantum-text-gray focus:outline-none focus:ring-1 focus:ring-quantum-electric-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-quantum-text-gray mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 text-quantum-text-gray focus:outline-none focus:ring-1 focus:ring-quantum-electric-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-quantum-text-gray mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 text-quantum-text-gray focus:outline-none focus:ring-1 focus:ring-quantum-electric-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-quantum-text-gray mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 text-quantum-text-gray focus:outline-none focus:ring-1 focus:ring-quantum-electric-blue"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-quantum-text-gray mb-2">Attach File (optional)</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 rounded-md bg-black/50 border border-white/10 text-quantum-text-gray focus:outline-none focus:ring-1 focus:ring-quantum-electric-blue file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-quantum-deep-blue file:text-white hover:file:bg-quantum-electric-blue"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-quantum w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="space-y-10">
                <div className="quantum-card p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-quantum-electric-blue">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-quantum-electric-blue font-medium">Email</p>
                      <p className="text-quantum-text-gray">info@quantumopen.de</p>
                    </div>
                    <div>
                      <p className="text-quantum-electric-blue font-medium">Address</p>
                      <p className="text-quantum-text-gray">Quantum Research Center<br />Innovation Street 123<br />10115 Berlin, Germany</p>
                    </div>
                  </div>
                </div>
                
                <div className="quantum-card p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-quantum-electric-blue">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="text-quantum-text-gray hover:text-quantum-electric-blue transition-colors duration-300 p-2 border border-white/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="text-quantum-text-gray hover:text-quantum-electric-blue transition-colors duration-300 p-2 border border-white/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="#" className="text-quantum-text-gray hover:text-quantum-electric-blue transition-colors duration-300 p-2 border border-white/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
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

export default Contact;
