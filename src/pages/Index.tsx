
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ForParents from "@/components/ForParents";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Terapia Infantil | Clínica de Terapia Ocupacional em Guimarães";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ForParents />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
