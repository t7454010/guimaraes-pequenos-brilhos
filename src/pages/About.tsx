
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Sobre Nós | Terapia Infantil Guimarães";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-terapia-blue py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Sobre Nós</h1>
          </div>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
