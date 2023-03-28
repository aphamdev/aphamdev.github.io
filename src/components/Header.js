import NavLinks from "./NavLinks";
import logo from "../images/AP.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" style={{ filter: "invert(100%)" }} />
      <NavLinks />
    </header>
  );
};

export default Header;
