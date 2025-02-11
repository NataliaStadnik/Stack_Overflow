import "./header.css";
import Favicon from "../../svg/Favicon";
import Language from "../../svg/Language";
import { Link, useNavigate } from "react-router";
import { Button } from "ui-components_innowise";
import useLoginState from "../../hooks/useLoginState";
import Loader from "../../Shared/Loader/Loader";
import useLogout from "../../hooks/useLogout";
import { authLogout } from "../../api/auth/authLogout";

const Header = () => {
  const authState = useLoginState();
  const navigate = useNavigate();
  const logoutMutation = useLogout(authLogout);

  const handleClick = () => {
    if (!authState) {
      navigate("/login");
    } else {
      logoutMutation.mutate();
    }
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to={"/"} className="header__left">
          <Favicon classes="header__svg" color="#fff" />
          <h2 className="name header__name">CODELANG</h2>
        </Link>

        <div className="header__right">
          <Button
            onClick={handleClick}
            classes={`btn-header ${
              logoutMutation.isPending ? "btn-loading" : ""
            }`}
          >
            {logoutMutation.isPending ? (
              <Loader type="small" />
            ) : authState ? (
              "Sign Out"
            ) : (
              "Sign in"
            )}
          </Button>
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
