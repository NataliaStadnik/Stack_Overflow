import "./header.css";
import Favicon from "../../svg/Favicon";
import Button from "../../Shared/Button/Button";
import Language from "../../svg/Language";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to={"./"} className="header__left">
          <Favicon classes="header__svg" color="#fff" />
          <h2 className="name header__name">CODELANG</h2>
        </Link>

        <div className="header__right">
          <Button>SIGN OUT</Button>
          <div className="language">
            <Language classes="language__svg" />
            <span className="name language__name">EN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
