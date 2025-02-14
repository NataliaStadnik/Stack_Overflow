import { createLoginForm } from "../../api/auth/authLogin";
import Key from "../../svg/Key";
import User from "../../svg/User";
import { ElementProps } from "../Register/registerElementArr";

type LoginField = keyof createLoginForm;

export const loginElementArr: Array<ElementProps<LoginField>> = [
  {
    id: 1,
    svg: <User classes="user-svg" color="black" />,
    placeholder: "User name",
    type: "text",
    name: "username",
  },
  {
    id: 2,
    svg: <Key />,
    placeholder: "Password",
    type: "password",
    name: "password",
  },
];
