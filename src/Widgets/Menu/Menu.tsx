import "./menu.css";
import NavElement from "../../Shared/NavElement/NavElement";
import UserNav from "../../Shared/UserNav/UserNav";
import { menuElements } from "./menuElements";
import { FC } from "react";

interface MenuProps {
  isOpen: boolean;
  setOpen: (a: boolean) => void;
}

const Menu: FC<MenuProps> = ({ isOpen, setOpen }) => {
  return (
    <nav className="menu container">
      <UserNav isOpen={isOpen} setOpen={setOpen} to="/user" />
      <ul className="menu__list">
        {menuElements.map((elem) => (
          <NavElement
            key={elem.id}
            label={elem.label}
            icon={elem.icon}
            to={elem.to}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
