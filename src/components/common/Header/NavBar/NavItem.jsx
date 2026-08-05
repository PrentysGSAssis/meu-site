export const NavItem = ({ title, href = "#" }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={href}>
        {title}
      </a>
    </li>
  );
};