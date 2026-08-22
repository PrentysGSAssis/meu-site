// INFERÊNCIA DE SEÇÃO: A estrutura sugere uma seção padrão de "Feature/Showcase" (Apresentação de Produto/Serviço). 
// O layout foi reorganizado para um cabeçalho centralizado seguido de duas colunas responsivas (Cards à esquerda, detalhes à direita).

import Card from "../../../ui/Card";

const SaaSSection = () => {
  const propsCardProjeto = [
    {
      title: "Título do Produto 01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
      linkUrl: "#",
      linkText: "Call to Action 1",
      imageSrc: "https://placehold.co/600x400",
    },
    {
      title: "Título do Produto 02",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkUrl: "#",
      linkText: "Call to Action 2",
      imageSrc: "https://placehold.co/600x400",
    },
  ];

  return (
    <section id="saassection" className="py-5 bg-light">
      <div className="container">
        
        {/* Cabeçalho da Seção */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="display-5 fw-bold text-dark mb-3">Título Principal da Seção</h2>
            <p className="lead text-secondary mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing.
            </p>
            <p className="text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus id ut.
            </p>
          </div>
        </div>

        {/* Corpo da Seção */}
        <div className="row align-items-center g-5">
          
          {/* Coluna Esquerda: Cards */}
          <div className="col-12 col-lg-6">
            <div className="row g-4">
              {propsCardProjeto.map((projeto, index) => (
                <Card 
                  className="col-12 col-md-6 col-lg-12 col-xl-6 h-100 shadow-sm border-0" 
                  key={index} 
                  {...projeto} 
                />
              ))}
            </div>
          </div>
          
          {/* Coluna Direita: Informações Detalhadas */}
          <div className="col-12 col-lg-6">
            <div className="p-lg-4">
              <h4 className="fw-semibold text-dark mb-3">Subtítulo de Destaque</h4>
              <p className="text-secondary mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio aliquid voluptatibus exercitationem suscipit facilis.
              </p>

              <hr className="my-4 text-muted" />

              <h4 className="fw-semibold text-dark mb-3">Outro Subtítulo Relevante</h4>
              <p className="text-secondary mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam, aspernatur totam reiciendis nobis perspiciatis, eveniet officia delectus eaque labore debitis? Sed, neque voluptates velit nisi cum distinctio eligendi commodi!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SaaSSection;