import Home from "../../svg/Home";
import QuestionUser from "../../svg/QuestionUser";
import Snippet from "../../svg/Snippet";
import User from "../../svg/User";
import Users from "../../svg/Users";

export const menuElements = [
  {
    id: 1,
    label: "Home",
    icon: <Home classes="svg-menu" />,
    to: "/",
  },
  {
    id: 2,
    label: "My Account",
    icon: <User classes="svg-menu" />,
    to: "/me",
  },
  {
    id: 3,
    label: "Post Snippet",
    icon: <Snippet classes="svg-menu" />,
    to: "/snippet/new",
  },
  {
    id: 4,
    label: "My Snippets",
    icon: <Snippet classes="svg-menu" />,
    to: "/snippets/me",
  },
  {
    id: 5,
    label: "Questions",
    icon: <QuestionUser classes="svg-menu" />,
    to: "/questions",
  },
  {
    id: 6,
    label: "Users",
    icon: <Users classes="svg-menu" />,
    to: "/users",
  },
];
