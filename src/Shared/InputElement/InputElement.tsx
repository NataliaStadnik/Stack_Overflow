import { FC } from "react";
import "./inputElement.css";

interface InputElementProps {
  svg?: JSX.Element;
  placeholder?: string;
  type: string;
}

const InputElement: FC<InputElementProps> = ({ svg, placeholder, type }) => {
  return (
    <div className={`inputs-login`}>
      <input
        className={"inputs-login__field"}
        type={type}
        placeholder={placeholder}
      />
      {svg}
    </div>
  );
};

export default InputElement;
