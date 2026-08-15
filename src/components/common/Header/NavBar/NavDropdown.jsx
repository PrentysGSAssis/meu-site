import { Link } from "react-router";

export const NavDropdown = ({
  title,
  action1,
  href1 = "#",
  action2,
  href2 = "#",
  action3,
  href3 = "#",
}) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </a>

      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={href1}>
            {action1}
          </Link>
        </li>

        <li>
          <Link className="dropdown-item" to={href2}>
            {action2}
          </Link>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link className="dropdown-item" to={href3}>
            {action3}
          </Link>
        </li>
      </ul>
    </li>
  );
};
