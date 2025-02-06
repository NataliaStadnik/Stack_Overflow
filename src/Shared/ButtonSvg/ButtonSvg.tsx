import { FC, HTMLAttributes } from "react";
import "./buttonSvg.css";
import { Link } from "react-router";

interface ButtonSvgProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  svg?: JSX.Element;
  classes?: string;
  label?: string;
  type?: "button" | "link";
  to?: string;
}

const ButtonSvg: FC<ButtonSvgProps> = ({
  svg,
  classes,
  label,
  type = "button",
  to = "",
  ...props
}) => {
  if (type === "button") {
    return (
      <button className={`btn__svg ${classes ? classes : ""}`} {...props}>
        {label}
        {svg}
      </button>
    );
  } else {
    <Link to={to} className={`btn__svg ${classes ? classes : ""}`} {...props}>
      {label}
      {svg}
    </Link>;
  }
};

export default ButtonSvg;
