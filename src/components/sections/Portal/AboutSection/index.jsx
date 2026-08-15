const AboutSection = () => {
  return (
    <section id="sobre" className="container py-5">
          <h2 className="mb-4 f-prata f-g text-center text-md-start">
            OLÁ!
          </h2>
          <p className="f-p text-center text-md-start">
            Sou uma desenvolvedora de sistemas em formação, concluindo meus
            estudos na Escola Estadual Professora Sebastiana de Almeida e Silva.
            Participando do curso Desenvolvimento e Análise de Sistemas, no
            Ensino Médio Técnico Integral.
          </p>

            <img
              className="img-fluid rounded-2 shadow"
              src="https://placehold.co/600x400"
              alt="Foto de Ana Souza"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
    </section>
  );
};

export default AboutSection;