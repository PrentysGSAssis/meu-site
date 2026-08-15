import Card from "../../../ui/Card";

const SaaSSection = () => {
  const propsCardProjeto = [
    {
      title: "Projeto Meu Primeiro SaaS",
      text: "Confio em Deus e vai dar certo",
      linkUrl: "https://google.com",
      linkText: "Visite meu projeto",
      imageSrc: "https://placehold.co/350x350",
    },
    {
      title: "Projeto Meu Segundo SaaS",
      text: "Mais um projeto incrível",
      linkUrl: "https://github.com",
      linkText: "Ver GitHub",
      imageSrc: "https://placehold.co/350x350",
    },
  ];

  return (
    <section id="saassection" className="container bg-secondary">
      <h2>Meu SaaS</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing;</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus id ut</p>

      <div className="row">
        <div className="col">
          <div className="row p-2 gap-3">
            {propsCardProjeto.map((projeto, index) => (
              <Card className="col" key={index} {...projeto} />
            ))}
          </div>
        </div>
        <div className="col text-start m-auto">

          <h4>Titulo</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <hr />

          <h4>Titulo 02</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam, aspernatur totam reiciendis nobis perspiciatis, eveniet officia delectus eaque labore debitis? Sed, neque voluptates velit nisi cum distinctio eligendi commodi!</p>
        </div>
      </div>
    </section>
  );
};

export default SaaSSection;
