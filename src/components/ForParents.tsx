
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ForParents = () => {
  const faqs = [
    {
      question: "Como sei se meu filho precisa de terapia ocupacional?",
      answer: "Pode considerar uma avaliação de terapia ocupacional se notar que seu filho tem dificuldades em atividades diárias apropriadas para sua idade, como vestir-se, alimentar-se, escrever, brincar com outras crianças, ou demonstra sensibilidade incomum a sons, texturas ou movimentos."
    },
    {
      question: "Qual é a duração típica de uma sessão de terapia?",
      answer: "Nossas sessões geralmente duram 45 minutos, mas a duração pode variar dependendo das necessidades individuais da criança e do tipo de intervenção que está sendo realizada."
    },
    {
      question: "Com que frequência meu filho precisará de terapia?",
      answer: "A frequência das sessões é determinada individualmente após a avaliação inicial, mas geralmente varia de uma a três vezes por semana, dependendo das necessidades específicas da criança e dos objetivos terapêuticos."
    },
    {
      question: "Os pais podem participar das sessões?",
      answer: "Sim, incentivamos o envolvimento dos pais! Dependendo dos objetivos terapêuticos, os pais podem observar ou participar ativamente das sessões para aprender estratégias que podem ser implementadas em casa."
    },
    {
      question: "A terapia ocupacional é coberta pelo seguro de saúde?",
      answer: "Muitos planos de saúde cobrem terapia ocupacional. Recomendamos verificar com sua operadora de saúde sobre cobertura específica. Também oferecemos opções de pagamento particular."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-start md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Para os Pais</h2>
            <p className="text-lg text-gray-700 mb-6">
              Sabemos que os pais desempenham um papel crucial no desenvolvimento e sucesso da terapia. Trabalhamos em parceria próxima com as famílias para garantir os melhores resultados para seu filho.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa abordagem inclui:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terapia-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Orientações personalizadas para implementar estratégias em casa</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terapia-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Workshops educacionais para pais sobre diversos tópicos relevantes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terapia-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Grupos de apoio para famílias com desafios semelhantes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terapia-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Comunicação contínua sobre o progresso de seu filho</span>
              </li>
            </ul>
            <div className="space-x-4">
              <Button className="bg-terapia-blue hover:bg-terapia-green text-white">
                Agendar Consulta Inicial
              </Button>
              <Button variant="outline" className="border-terapia-blue text-terapia-blue hover:bg-terapia-lightBlue">
                Download Guia para Pais
              </Button>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForParents;
