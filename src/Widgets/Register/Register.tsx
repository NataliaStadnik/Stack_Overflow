import { Link } from "react-router";
import { Button } from "ui-components_innowise";
import InputElement from "../../Shared/InputElement/InputElement";
import Key from "../../svg/Key";
import User from "../../svg/User";
import "./register.css";
import { FC, useState } from "react";

interface RegisterProps {
  type: string;
}

const Register: FC<RegisterProps> = ({ type }) => {
  const [state, updateState] = useState(type);

  return (
    <div className="modal">
      <h2 className="title">
        {`Sign ${state === "register" ? "up" : "in"} to Codelang`}
      </h2>
      <form className="modal-form">
        <InputElement
          svg={<User classes="user-svg" color="black" />}
          placeholder={"User name"}
          type={"text"}
        />
        <InputElement
          svg={<Key />}
          placeholder={"Password"}
          type={"password"}
        />

        {state === "register" && (
          <InputElement
            svg={<Key />}
            placeholder={"Confirm password"}
            type={"password"}
          />
        )}

        <Button classes="btn-confirm" children={"Confirm"} />
      </form>

      <div className="sign">
        {state === "login" && (
          <Link className="sign__link" to={""}>
            Create an account
          </Link>
        )}

        {state === "register" && (
          <>
            <p className="sign__text">Already have an account?</p>
            <Link className="sign__link" to={""}>
              Sign in
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
