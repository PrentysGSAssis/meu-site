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
          <a className="dropdown-item" href={href1}>
            {action1}
          </a>
        </li>

        <li>
          <a className="dropdown-item" href={href2}>
            {action2}
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item" href={href3}>
            {action3}
          </a>
        </li>
      </ul>
    </li>
  );
};
