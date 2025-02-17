import { FC } from "react";
import { Link } from "react-router";
import "./navElement.css";
import useAuthNavigate from "../../hooks/useAuthNavigate";

interface NavElementProps {
  label: string;
  icon?: JSX.Element;
  to: string;
  isOpen?: boolean;
  setOpen?: (a: boolean) => void;
}

const NavElement: FC<NavElementProps> = ({
  label,
  icon,
  to,
  isOpen,
  setOpen,
}) => {
  const { href } = useAuthNavigate(to);

  return (
    <li className="menu__item">
      <Link onClick={() => setOpen?.(!isOpen)} className="menu__link" to={href}>
        {icon}
        <span className="menu__label">{label}</span>
      </Link>
    </li>
  );
};

export default NavElement;
