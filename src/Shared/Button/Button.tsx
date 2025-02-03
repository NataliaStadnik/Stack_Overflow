import { FC } from "react";
import "./button.css";

interface ButtonProps {
  classes?: string;
  children?: React.ReactElement | string;
}

const Button: FC<ButtonProps> = ({ children, classes }) => {
  return (
    <button className={`btn ${classes ? classes : ""}`}>{children}</button>
  );
};

export default Button;
