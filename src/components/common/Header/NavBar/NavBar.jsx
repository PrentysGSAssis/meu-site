import { Link } from "react-router";
import NavItem from "./NavItem";
import "./NavBar.styles.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="d-block align-items-center">
          {/* 1. Transformamos o <a> da logo em um <Link> */}
          <Link to="/">
            <img
              className="navbar-brand"
              width="50"
              height="44"
              src="favicon.png"
              alt="Logo Reino Confeitaria"
            />
          </Link>
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
            {/* 2. Substituímos 'href' por 'to' para alimentar nosso NavItem corretamente */}
            <NavItem title="Meu Portfólio" to="/" />

            <NavItem title="O Meu Projeto Principal" to="/meu-sistema" />

            {/* Atualizamos aqui para apontar para a rota do sistema que configuramos no App.jsx */}
            <NavItem title="Login" to="/login" />

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

export default NavBar;