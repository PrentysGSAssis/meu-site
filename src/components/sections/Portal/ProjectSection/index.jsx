import Card from "../../../ui/Card";

const projectsData = [
  {
    id: 1,
    title: "Meu Projeto JS",
    text: "O projeto que comecei com o Prentys. Focado em manipulação de DOM e consumo de APIs.",
    linkUrl: "https://google.com",
    linkText: "Visite meu projeto",
    imageSrc: "https://placehold.co/400x250",
  },
  {
    id: 2,
    title: "Sistema de Vendas",
    text: "Dashboard administrativo criado para gerenciamento de estoque e fluxo de caixa.",
    linkUrl: "https://google.com",
    linkText: "Ver Repositório",
    imageSrc: "https://placehold.co/400x250",
  },
  {
    id: 3,
    title: "App de Clima",
    text: "Aplicação responsiva que consome a API do OpenWeather para exibir a previsão do tempo.",
    linkUrl: "https://google.com",
    linkText: "Testar App",
    imageSrc: "https://placehold.co/400x250",
  }
];

const ProjectSection = () => {
  return (
    
    <section id="projetos" className="py-5 bg-light">
      <div className="container">
        
    
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="fw-bold text-uppercase mb-3">Meus Projetos</h2>
            <p className="text-secondary lead">
              Uma seleção dos meus melhores trabalhos e experimentações técnicas.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projectsData.map((project) => (

            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <Card 
                title={project.title}
                text={project.text}
                linkUrl={project.linkUrl}
                linkText={project.linkText}
                imageSrc={project.imageSrc}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;