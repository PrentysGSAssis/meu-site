import CardProjeto from "../../ui/CardProjeto";

const dadosDoProjeto = {
  title: "Meu Projeto JS",
  text: "O projeto que comecei com o Prentys",
  linkUrl: "https://google.com",
  linkText: "Visite meu projeto",
};

const ProjectSection = () => {
  return (
    <div id="projeto">
      <CardProjeto {...dadosDoProjeto} />
    </div>
  );
};

export default ProjectSection;
