import { FC } from "react";
import { Link } from "react-router";
import "./navElement.css";

interface NavElementProps {
  label: string;
  icon?: JSX.Element;
  to: string;
}

const NavElement: FC<NavElementProps> = ({ label, icon, to }) => {
  return (
    <li className="menu__item">
      <Link className="menu__link" to={to}>
        {icon}
        <span className="menu__label">{label}</span>
      </Link>
    </li>
  );
};

export default NavElement;
