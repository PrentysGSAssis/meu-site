const AboutSection = () => {
  return (
    <section id="sobre" className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 order-2 order-lg-1">
          <h2 className="mb-4 f-prata f-g text-center text-lg-start">OLÁ!</h2>

          <p className="f-p text-center text-lg-start mb-0">
            Este sou eu! Eu nasci e cresci aqui! Estudo na minha escola e adoro
            fazer minhas coisas; Nas horas vagas eu me dedico ao que gosto, e
            tneho o sonho de um dia alcançar aquilo que quero!
          </p>
          <p className="f-p text-center text-lg-start mb-0">
            Aqui do lado tem algumas fotos minhas fazendo minhas coisas durante a minha vida
          </p>
        </div>

        <div className="col-lg-6 text-center order-1 order-lg-2">
          <div className="col-lg-6 text-center order-1 order-lg-2">
            <div
              id="carouselSobre"
              className="carousel slide shadow-lg rounded-4 overflow-hidden"
            >
              <div className="carousel-inner text-center d-block">
                <div className="carousel-item active">
                  <img
                    src="https://placehold.co/400x400"
                    className="d-block w-100"
                    alt="Imagem 1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://placehold.co/400x400"
                    className="d-block w-100"
                    alt="Imagem 2"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://placehold.co/400x400"
                    className="d-block w-100"
                    alt="Imagem 3"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselSobre"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselSobre"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Próximo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
