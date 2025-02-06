import Arrow from "../../svg/Arrow";
import User from "../../assets/img/man.jpg";
import "./userNav.css";
import { Link } from "react-router";
import { FC, useState } from "react";
import useAuthNavigate from "../../hooks/useAuthNavigate";

interface UserNavProps {
  to: string;
}

const UserNav: FC<UserNavProps> = ({ to }) => {
  const [href, setHref] = useState(to);
  useAuthNavigate(to, setHref);

  return (
    <Link to={href} className="menu__user">
      <img className="menu__img" src={User} alt="User photo" />
      <span className="name menu__name">denis</span>
      <Arrow classes="menu__user--svg" color="#fff" />
    </Link>
  );
};

export default UserNav;
