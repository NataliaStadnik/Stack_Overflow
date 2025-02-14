import Key from "../../svg/Key";
import { loginElementArr } from "../Login/loginElementArr";
import { createRegisterForm } from "../../api/auth/registerUser";

export type RegisterFields = keyof createRegisterForm;

export interface ElementProps<T> {
  id: number;
  svg: JSX.Element;
  placeholder: string;
  type: string;
  name: T;
}

export const registerElementArr: Array<ElementProps<RegisterFields>> = [
  ...loginElementArr,
  {
    id: 3,
    svg: <Key />,
    placeholder: "Confirm password",
    type: "password",
    name: "confirm",
  },
];
