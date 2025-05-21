
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Terapia Ocupacional Especializada para Crianças
            </h1>
            <p className="text-white text-lg mb-6">
              Ajudamos crianças a desenvolver habilidades essenciais para uma vida plena e independente em Guimarães.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-terapia-yellow hover:bg-terapia-orange text-gray-800 font-medium">
                Agendar Avaliação
              </Button>
              <Button variant="outline" className="bg-white text-terapia-blue hover:bg-terapia-lightBlue border-white">
                Conhecer Serviços
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-3 rounded-full shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600&auto=format&fit=crop" 
                alt="Terapia infantil" 
                className="rounded-full w-64 h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8 -mb-24 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-terapia-lightBlue rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terapia-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Profissionais Especializados</h3>
              <p className="text-gray-600">Equipa com formação específica em terapia ocupacional pediátrica.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-terapia-lightBlue rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terapia-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Abordagem Lúdica</h3>
              <p className="text-gray-600">Terapia através de brincadeiras e jogos adaptados às necessidades de cada criança.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-terapia-lightBlue rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-terapia-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Planos Personalizados</h3>
              <p className="text-gray-600">Programas de intervenção individualizados para atender às necessidades específicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
