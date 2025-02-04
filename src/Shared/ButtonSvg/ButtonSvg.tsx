import { FC } from "react";
import "./buttonSvg.css";

interface ButtonSvgProps {
  svg?: JSX.Element;
  classes?: string;
  label?: string;
}

const ButtonSvg: FC<ButtonSvgProps> = ({ svg, classes, label }) => {
  return (
    <button className={`btn__svg ${classes ? classes : ""}`}>
      {label}
      {svg}
    </button>
  );
};

export default ButtonSvg;
