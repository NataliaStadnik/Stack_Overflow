import { FC, HTMLAttributes } from "react";
import "./IconButton.css";

interface IconButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  svg?: JSX.Element;
  classes?: string;
  label?: string;
  to?: string;
  disabled?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  svg,
  classes,
  label,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`btn__svg ${classes ? classes : ""}`}
    >
      {label}
      {svg}
    </button>
  );
};

export default IconButton;
