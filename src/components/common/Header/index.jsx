import NavBar from "./NavBar/NavBar";
import "./header.styles.css";

const Header = ({ children }) => {
  return (
    <header>
      <NavBar />

      { children }
      
    </header>
  );
};

export default Header;