import Card from "../../../ui/Card";

const propsCardProjeto = {
  title: "Meu Projeto JS",
  text: "O projeto que comecei com o Prentys",
  linkUrl: "https://google.com",
  linkText: "Visite meu projeto",
  imageSrc: "https://placehold.co/250x250",
};

const ProjectSection = () => {
  return (
    <section id="projeto">
      <h3>Seção de Projetos</h3>
      <p>Lorem</p>
      <Card {...propsCardProjeto} />
    </section>
  );
};

export default ProjectSection;