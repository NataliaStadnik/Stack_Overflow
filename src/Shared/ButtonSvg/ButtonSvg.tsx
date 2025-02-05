import { FC } from "react";
import "./buttonSvg.css";
import { Link } from "react-router";

interface ButtonSvgProps {
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
}) => {
  if (type === "button") {
    return (
      <button className={`btn__svg ${classes ? classes : ""}`}>
        {label}
        {svg}
      </button>
    );
  } else {
    <Link to={to} className={`btn__svg ${classes ? classes : ""}`}>
      {label}
      {svg}
    </Link>;
  }
};

export default ButtonSvg;
