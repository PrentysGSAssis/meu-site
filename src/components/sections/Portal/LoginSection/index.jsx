import { Link } from "react-router";

const LoginSection = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">Meu Sistema - Login</h4>
            </div>

            <div className="card-body p-4">
              <form>
                <div className="mb-4 row">
                  <label
                    htmlFor="inputEmail"
                    className="col-sm-3 col-form-label fw-bold"
                  >
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="email@hospedagem.com"
                    />
                  </div>
                </div>

                <div className="mb-4 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label fw-bold"
                  >
                    Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Sua senha secreta"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-9 offset-sm-3">
                    <button type="button" className="btn btn-primary w-100">
                      <Link className="text-white" to="/dashboard/overview">Entrar no Sistema</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;