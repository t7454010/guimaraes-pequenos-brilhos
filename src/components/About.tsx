
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    {
      name: "Dra. Ana Silva",
      role: "Terapeuta Ocupacional Sénior",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=200&h=200&auto=format&fit=crop&crop=faces",
      bio: "Especialista em integração sensorial com mais de 15 anos de experiência no trabalho com crianças."
    },
    {
      name: "Dr. Miguel Costa",
      role: "Terapeuta Ocupacional",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=200&h=200&auto=format&fit=crop&crop=faces",
      bio: "Especializado em desenvolvimento motor e cognitivo, com foco em crianças com atrasos de desenvolvimento."
    },
    {
      name: "Dra. Sofia Martins",
      role: "Terapeuta Ocupacional",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=200&h=200&auto=format&fit=crop&crop=faces",
      bio: "Especialista em intervenção precoce, com formação específica em abordagens lúdicas para crianças pequenas."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos uma clínica especializada em terapia ocupacional pediátrica, dedicada a ajudar crianças a alcançar seu pleno potencial através de intervenções personalizadas.
          </p>
        </div>

        <div className="md:flex md:items-center md:gap-12 mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-gray-700 mb-6">
              Nossa missão é proporcionar serviços de terapia ocupacional de alta qualidade para crianças em Guimarães, utilizando abordagens baseadas em evidências e centradas na família para promover o desenvolvimento, independência e participação em todas as áreas da vida.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Nossa Clínica</h3>
            <p className="text-gray-700 mb-6">
              Nossa clínica foi projetada especificamente para criar um ambiente acolhedor e estimulante para crianças de todas as idades. Contamos com:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-terapia-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Salas sensoriais completas com equipamentos especializados</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-terapia-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Espaços de terapia individuais para concentração e foco</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-terapia-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Área motora com equipamentos adaptados para diferentes necessidades</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-terapia-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Sala de observação para pais e familiares</span>
              </li>
            </ul>
            
            <Button className="bg-terapia-blue hover:bg-terapia-green text-white">
              Agendar Visita à Clínica
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop" 
                alt="Nossa clínica de terapia ocupacional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <span className="font-comfort text-lg">Ambiente seguro e acolhedor para o desenvolvimento infantil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Nossa Equipa</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-terapia-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
