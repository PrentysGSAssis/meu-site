const ContactSection = () => {
  return (
    <section id="contato" className="container py-5">
      <div className="container row">
        <h3>Seção de Contato</h3>
        <div className="col d-flex">
          <img className="p-3" src="https://placehold.co/150x150" alt="" />
          <p className="f-p m-auto text-center text-md-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="col">
          <form action="">
            <div className="mb-3 text-start">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3 text-start">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
