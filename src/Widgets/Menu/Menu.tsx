import "./menu.css";
import NavElement from "../../Shared/NavElement/NavElement";
import UserNav from "../../Shared/UserNav/UserNav";
import { menuElements } from "./menuElements";

const Menu = () => {
  return (
    <nav className="menu container">
      <UserNav to="/user" />
      <ul className="menu__list">
        {menuElements.map((elem) => (
          <NavElement
            key={elem.id}
            label={elem.label}
            icon={elem.icon}
            to={elem.to}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
