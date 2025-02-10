import { FC, useState } from "react";
import "./inputElement.css";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputElementProps {
  svg?: JSX.Element;
  placeholder?: string;
  type: string;
  errorMessage?: string;
  inputProp?: UseFormRegisterReturn<string>;
  newValue?: string;
}

const InputElement: FC<InputElementProps> = ({
  svg,
  placeholder,
  type,
  errorMessage,
  inputProp,
  newValue = "",
}) => {
  const [value, setValue] = useState(newValue);
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {svg}

      {errorMessage && (
        <span className="inputs-text--error">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputElement;
