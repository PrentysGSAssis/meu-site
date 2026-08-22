const HeroSection = () => {
  return (
    <section
      id="hero"
      className="vh-100 bg-secondary d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img
              src="https://placehold.co/700x600"
              alt=""
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6 text-white">
            <h1 className=" display-3 fw-bold mb-4">Meu Nome</h1>

            <p className="text-start mb-0">
              O porfolio incrivel feito por mim!
              Ba Dum Ts!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
