
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, Info, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-terapia-blue font-comfort font-bold text-2xl">Terapia</span>
              <span className="text-terapia-green font-comfort font-bold text-2xl">Infantil</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-terapia-blue transition-colors font-medium"
            >
              <Home className="mr-1 h-4 w-4" />
              <span>Início</span>
            </Link>
            <Link 
              to="/for-parents" 
              className="flex items-center text-gray-700 hover:text-terapia-blue transition-colors font-medium"
            >
              <User className="mr-1 h-4 w-4" />
              <span>Para Pais</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center text-gray-700 hover:text-terapia-blue transition-colors font-medium"
            >
              <Info className="mr-1 h-4 w-4" />
              <span>Sobre Nós</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center text-gray-700 hover:text-terapia-blue transition-colors font-medium"
            >
              <Phone className="mr-1 h-4 w-4" />
              <span>Contacto</span>
            </Link>

            <Button className="bg-terapia-blue hover:bg-terapia-green text-white transition-colors">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-terapia-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-100">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-700 hover:bg-terapia-lightBlue hover:text-terapia-blue rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                <span>Início</span>
              </div>
            </Link>
            <Link 
              to="/for-parents" 
              className="block py-2 px-4 text-gray-700 hover:bg-terapia-lightBlue hover:text-terapia-blue rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Para Pais</span>
              </div>
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-gray-700 hover:bg-terapia-lightBlue hover:text-terapia-blue rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                <span>Sobre Nós</span>
              </div>
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-gray-700 hover:bg-terapia-lightBlue hover:text-terapia-blue rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Contacto</span>
              </div>
            </Link>
            <div className="mt-4 px-4">
              <Button className="w-full bg-terapia-blue hover:bg-terapia-green text-white">
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
