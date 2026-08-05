import { NavDropdown } from "./NavDropdown";
import { NavItem } from "./NavItem";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <img
          width="50"
          height="44"
          src="../../../../public/favicon.png"
          alt=""
        />
        <a className="navbar-brand" href="#">
          <span className="navbar-text fs-4 ps-2">Reino Confeitaria</span>
        </a>

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

            <NavItem title="Sobre" href="#sobre" />

            <NavDropdown
              title="Opções"
              action1="Minha Conta"
              href1="/perfil"
              action2="Configurações"
              href2="/settings"
              action3="Sair"
              href3="/logout"
            />
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
