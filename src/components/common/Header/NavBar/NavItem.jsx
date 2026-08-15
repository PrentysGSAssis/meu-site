export const NavItem = ({ title, href = "#" }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>{title}</a>
    </li>
  );
};
