import { FC } from "react";
import "./inputElement.css";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputElementProps {
  svg?: JSX.Element;
  placeholder?: string;
  type: string;
  errorMessage?: string;
  inputProp: UseFormRegisterReturn<string>;
}

const InputElement: FC<InputElementProps> = ({
  svg,
  placeholder,
  type,
  errorMessage,
  inputProp,
}) => {
  return (
    <div className={`inputs-login`}>
      <input
        className={
          !errorMessage
            ? "inputs-login__field"
            : "inputs-login__field inputs-login--error"
        }
        type={type}
        placeholder={placeholder}
        {...inputProp}
      />
      {svg}

      {errorMessage && (
        <span className="inputs-text--error">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputElement;
