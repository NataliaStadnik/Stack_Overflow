import Arrow from "../../svg/Arrow";
import User from "../../assets/img/man.jpg";
import "./userNav.css";
import { Link } from "react-router";

const UserNav = () => {
  return (
    <Link to={"/user"} className="menu__user">
      <img className="menu__img" src={User} alt="User photo" />
      <span className="name menu__name">denis</span>
      <Arrow classes="menu__user--svg" color="#fff" />
    </Link>
  );
};

export default UserNav;
