import "./menu.css";
import NavElement from "../../Shared/NavElement/NavElement";
import Home from "../../svg/Home";
import QuestionUser from "../../svg/QuestionUser";
import Snippet from "../../svg/Snippet";
import User from "../../svg/User";
import Users from "../../svg/Users";
import UserNav from "../../Shared/UserNav/UserNav";

const menuArr = [
  { id: 1, label: "Home", icon: <Home classes="svg-menu" /> },
  { id: 2, label: "My Account", icon: <User classes="svg-menu" /> },
  { id: 3, label: "Post Snippet", icon: <Snippet classes="svg-menu" /> },
  { id: 4, label: "My Snippets", icon: <Snippet classes="svg-menu" /> },
  { id: 5, label: "Questions", icon: <QuestionUser classes="svg-menu" /> },
  { id: 6, label: "Users", icon: <Users classes="svg-menu" /> },
];

const Menu = () => {
  return (
    <nav className="menu container">
      <UserNav />
      <ul className="menu__list">
        {menuArr.map((elem) => (
          <NavElement key={elem.id} label={elem.label} icon={elem.icon} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
