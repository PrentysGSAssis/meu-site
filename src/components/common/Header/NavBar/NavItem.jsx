{/* 1. Importamos o 'link' que vem do ReactRouter */}
import { Link } from "react-router";

{/* 2. Passamos como parametro agora o 'to' que é padrão do ReactRouter */}
const NavItem = ({ title, to = "#" }) => {
  return (
    <li className="nav-item">
      {/* 3. E agora, ao invés de 'a', utilizaremos o Link, recebendo o TO */}
      <Link className="nav-link" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;