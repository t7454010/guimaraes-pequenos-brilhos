
import Navbar from "@/components/Navbar";
import ForParents from "@/components/ForParents";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ForParentsPage = () => {
  useEffect(() => {
    document.title = "Para Pais | Terapia Infantil Guimarães";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-terapia-blue py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Para Pais</h1>
          </div>
        </div>
        <ForParents />
      </main>
      <Footer />
    </div>
  );
};

export default ForParentsPage;
