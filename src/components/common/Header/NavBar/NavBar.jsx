import { NavItem } from "./NavItem";
import "./NavBar.styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="pe-3">
          <a href="/">
            <img
              className="navbar-brand"
              width="50"
              height="44"
              src="favicon.png"
              alt=""
            />
          </a>
          <span className="navbar-text fs-4 ps-2">Reino Confeitaria</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem title="Home" href="/" />

            <NavItem title="Sobre" href="/#sobre" />

            <NavItem title="MeuSistema" href="" />
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busque seu sonho"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
