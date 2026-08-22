import { Link } from "react-router";

const Dashboard = () => {
  return (
    // Container principal: Altura total da tela e fundo cinza claro (estilo SaaS)
    <div className="d-flex vh-100 bg-light text-body">
      {/* 1. BARRA LATERAL (ASIDE) - Desktop apenas (oculta no mobile) */}
      <aside
        className="d-none d-md-flex flex-column bg-white shadow-sm h-100 flex-shrink-0"
        style={{ width: "260px" }} // Único estilo inline necessário para fixar a largura do menu
      >
        <div className="p-4 border-bottom">
          <h4 className="m-0 fw-bold text-primary">
            Meu<span className="text-dark">Sistema</span>
          </h4>
          <Link to="/"><small>Retornar ao Portal</small></Link>
        </div>

        <div className="p-3 flex-grow-1 overflow-auto">
          <small
            className="text-muted fw-bold text-uppercase px-3 mb-2 d-block"
            style={{ fontSize: "11px" }}
          >
            Menu Principal
          </small>
          <ul className="nav nav-pills flex-column mb-4 gap-1">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active bg-primary bg-opacity-10 text-primary fw-semibold rounded-3"
              >
                <i className="bi bi-grid me-2"></i> Dashboard Geral
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark fw-medium rounded-3 custom-hover"
              >
                <i className="bi bi-cart me-2"></i> Pedidos e Vendas
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium rounded-3">
                <i className="bi bi-box-seam me-2"></i> Gestão de Estoque
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium rounded-3">
                <i className="bi bi-currency-dollar me-2"></i> Financeiro
              </a>
            </li>
          </ul>

          <small
            className="text-muted fw-bold text-uppercase px-3 mb-2 d-block"
            style={{ fontSize: "11px" }}
          >
            Relatórios
          </small>
          <ul className="nav nav-pills flex-column gap-1">
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium rounded-3">
                Faturamento Mensal
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium rounded-3">
                Curva ABC de Produtos
              </a>
            </li>
          </ul>
        </div>

        <div className="p-3 border-top">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none text-dark"
          >
            <img
              src="https://placehold.co/40x40"
              alt="Usuário"
              className="rounded-circle me-2"
            />
            <div>
              <h6 className="m-0 fw-semibold fs-6">João Silva</h6>
              <small className="text-muted">Administrador</small>
            </div>
          </a>
        </div>
      </aside>

      {/* 2. ÁREA PRINCIPAL (HEADER + CONTEÚDO EMBUTIDO) */}
      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        {/* HEADER (Barra Superior) */}
        <header className="bg-white shadow-sm px-3 px-md-4 py-3 d-flex align-items-center justify-content-between z-1">
          {/* Esquerda: Botão Mobile + Busca */}
          <div className="d-flex align-items-center gap-3 w-50">
            {/* Botão Hambúrguer (Visível apenas no Mobile) */}
            <button
              className="btn btn-light d-md-none p-2 border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
            >
              <span className="navbar-toggler-icon fw-bold">☰</span>
            </button>

            {/* Input de Busca (Estilo Pílula) */}
            <input
              type="text"
              className="form-control rounded-pill bg-light border-0 px-4"
              placeholder="Pesquisar pedidos, clientes ou produtos..."
            />
          </div>

          {/* Direita: Notificações e Perfil rápido */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light rounded-circle position-relative p-2 border-0">
              🔔
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">Novos alertas</span>
              </span>
            </button>
            <button className="btn btn-light rounded-circle p-2 border-0">
              ⚙️
            </button>
          </div>
        </header>

        {/* 3. O "PALCO" (Conteúdo da Direita) */}
        <main className="flex-grow-1 overflow-auto p-3 p-md-4">
          {/* Breadcrumbs de Navegação */}
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">
                  Início
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">
                  Dashboard
                </a>
              </li>
              <li
                className="breadcrumb-item active fw-semibold text-dark"
                aria-current="page"
              >
                Visão Geral
              </li>
            </ol>
          </nav>

          {/* CARTÃO FLUTUANTE DE CONTEÚDO (A grande sacada do estilo SaaS) */}
          <div className="bg-white rounded-4 shadow-sm p-4 min-vh-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0 fs-3">Visão Geral do Faturamento</h2>
              <button className="btn btn-primary px-4 rounded-pill fw-medium text-white shadow-sm">
                + Novo Pedido
              </button>
            </div>

            <p className="text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Cards de Indicadores (KPIs) */}
            <div className="row g-4 mb-5">
              <div className="col-12 col-md-4">
                <div className="p-4 bg-light rounded-4 border border-light-subtle">
                  <h6
                    className="text-muted text-uppercase mb-2"
                    style={{ fontSize: "12px" }}
                  >
                    Faturamento do Mês
                  </h6>
                  <h3 className="fw-bold mb-0">R$ 124.500,00</h3>
                  <small className="text-success fw-semibold">
                    ↑ 12% em relação ao mês anterior
                  </small>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-4 bg-light rounded-4 border border-light-subtle">
                  <h6
                    className="text-muted text-uppercase mb-2"
                    style={{ fontSize: "12px" }}
                  >
                    Pedidos Pendentes
                  </h6>
                  <h3 className="fw-bold mb-0">45</h3>
                  <small className="text-danger fw-semibold">
                    Atenção requerida em 5 pedidos
                  </small>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-4 bg-light rounded-4 border border-light-subtle">
                  <h6
                    className="text-muted text-uppercase mb-2"
                    style={{ fontSize: "12px" }}
                  >
                    Novos Clientes
                  </h6>
                  <h3 className="fw-bold mb-0">128</h3>
                  <small className="text-success fw-semibold">
                    ↑ 3% conversão de leads
                  </small>
                </div>
              </div>
            </div>

            {/* Imagens Placeholders simulando Gráficos/Tabelas */}
            <div className="row g-4">
              <div className="col-12 col-md-8">
                <h5 className="fw-bold mb-3">Evolução de Vendas</h5>
                {/* Simulação de um Gráfico Grande */}
                <img
                  src="https://placehold.co/800x400/f8f9fa/adb5bd?text=Grafico+de+Linhas+(Placeholder)"
                  alt="Gráfico de Vendas"
                  className="img-fluid rounded-4 border"
                />
              </div>
              <div className="col-12 col-md-4">
                <h5 className="fw-bold mb-3">Produtos Mais Vendidos</h5>
                {/* Simulação de um Gráfico Menor / Tabela */}
                <img
                  src="https://placehold.co/400x400/f8f9fa/adb5bd?text=Grafico+de+Pizza"
                  alt="Produtos mais vendidos"
                  className="img-fluid rounded-4 border w-100"
                />
              </div>
            </div>

            <div className="mt-5">
              <h5 className="fw-bold mb-3">Últimas Movimentações</h5>
              <p className="text-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              {/* Tabela de exemplo super simples */}
              <img
                src="https://placehold.co/1000x300/f8f9fa/adb5bd?text=Tabela+de+Dados+(Placeholder)"
                alt="Tabela"
                className="img-fluid rounded-4 border w-100"
              />
            </div>
          </div>
        </main>
      </div>

      {/* 4. MENU OFFCANVAS (Apenas para Mobile) - Fica invisível até ser acionado */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5
            className="offcanvas-title fw-bold text-primary"
            id="mobileMenuLabel"
          >
            ERP<span className="text-dark">Cloud</span>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          {/* Mesmo conteúdo da Sidebar, replicado para o celular */}
          <div className="p-3">
            <ul className="nav nav-pills flex-column mb-4 gap-1">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link active bg-primary bg-opacity-10 text-primary fw-semibold rounded-3"
                >
                  Dashboard Geral
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark fw-medium rounded-3">
                  Pedidos e Vendas
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark fw-medium rounded-3">
                  Gestão de Estoque
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
