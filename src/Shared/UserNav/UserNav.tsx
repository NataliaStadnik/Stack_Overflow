import Arrow from "../../svg/Arrow";
import User from "../../assets/img/man.jpg";
import "./userNav.css";
import { Link } from "react-router";
import { FC, useState } from "react";
import useAuthNavigate from "../../hooks/useAuthNavigate";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface UserNavProps {
  to: string;
  isOpen?: boolean;
  setOpen?: (a: boolean) => void;
}

const UserNav: FC<UserNavProps> = ({ to, isOpen, setOpen }) => {
  const userName = useSelector((state: RootState) => state.userState.username);
  const [href, setHref] = useState(to);
  useAuthNavigate(to, setHref);

  return (
    <Link onClick={() => setOpen?.(!isOpen)} to={href} className="menu__user">
      <img className="menu__img" src={User} alt="User photo" />
      <span className="name menu__name">{userName}</span>
      <Arrow classes="menu__user--svg" color="#fff" />
    </Link>
  );
};

export default UserNav;
