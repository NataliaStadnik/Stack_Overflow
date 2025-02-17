import { Link, useNavigate } from "react-router";
import { Button } from "ui-components_innowise";
import InputElement from "../../Shared/InputElement/InputElement";
import "./register.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  createRegisterForm,
  createRegisterShema,
  registerUser,
} from "../../api/auth/registerUser";
import Loader from "../../Shared/Loader/Loader";
import { registerElementArr } from "./registerElementArr";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createRegisterForm>({
    resolver: zodResolver(createRegisterShema),
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess() {
      reset();
      navigate("/login");
    },
  });

  return (
    <div className="modal">
      <h2 className="title">Sign up to Codelang</h2>
      <form
        className="modal-form"
        onSubmit={handleSubmit((data) => {
          registerMutation.mutate(data);
        })}
      >
        {registerElementArr.map((elem) => (
          <InputElement
            key={elem.id}
            svg={elem.svg}
            placeholder={elem.placeholder}
            type={elem.type}
            inputProp={{ ...register(elem.name) }}
            errorMessage={errors[elem.name]?.message}
          />
        ))}

        <ErrorMessageFetch mutation={registerMutation} />

        <Button classes="btn-confirm">
          {registerMutation.isPending ? <Loader type="small" /> : "Confirm"}
        </Button>
      </form>

      <div className="sign">
        <p className="sign__text">Already have an account?</p>
        <Link className="sign__link" to={"/login"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
