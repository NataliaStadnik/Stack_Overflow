import Key from "../../svg/Key";
import { ElementProps } from "../Register/registerElementArr";

export type ChangePassword = "newPassword" | "oldPassword" | "confirm";

export const changePasswordArr: Array<ElementProps<ChangePassword>> = [
  {
    id: 1,
    svg: <Key />,
    placeholder: "Old password",
    type: "password",
    name: "oldPassword",
  },
  {
    id: 2,
    svg: <Key />,
    placeholder: "New password",
    type: "password",
    name: "newPassword",
  },
  {
    id: 3,
    svg: <Key />,
    placeholder: "Confirm password",
    type: "password",
    name: "confirm",
  },
];
