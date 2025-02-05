import { Link } from "react-router";
import { Button } from "ui-components_innowise";
import InputElement from "../../Shared/InputElement/InputElement";
import Key from "../../svg/Key";
import User from "../../svg/User";
import "./register.css";
import { FC } from "react";

interface RegisterProps {
  type: string;
}

const Register: FC<RegisterProps> = ({ type }) => {
  return (
    <div className="modal">
      <h2 className="title">
        {`Sign ${type === "register" ? "up" : "in"} to Codelang`}
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

        {type === "register" && (
          <InputElement
            svg={<Key />}
            placeholder={"Confirm password"}
            type={"password"}
          />
        )}

        <Button classes="btn-confirm" children={"Confirm"} />
      </form>

      <div className="sign">
        {type === "login" && (
          <Link className="sign__link" to={"/register"}>
            Create an account
          </Link>
        )}

        {type === "register" && (
          <>
            <p className="sign__text">Already have an account?</p>
            <Link className="sign__link" to={"/login"}>
              Sign in
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
