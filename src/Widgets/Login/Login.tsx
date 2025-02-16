import { Link, useNavigate } from "react-router";
import { Button } from "ui-components_innowise";
import InputElement from "../../Shared/InputElement/InputElement";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { useDispatch } from "react-redux";
import { setAuthTrue } from "../../store/authSlice";
import { loginElementArr } from "./loginElementArr";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import { setUserInfo } from "../../store/userSlice";
import {
  authLogin,
  createLoginForm,
  createLoginShema,
} from "../../api/auth/authLogin";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginForm>({
    resolver: zodResolver(createLoginShema),
  });

  const registerMutation = useMutation({
    mutationFn: authLogin,
    onSuccess(data) {
      dispatch(setAuthTrue());
      reset();
      dispatch(setUserInfo(data));
      navigate("/");
    },
  });

  return (
    <div className="modal">
      <h2 className="title">Sign in to Codelang</h2>
      <form
        className="modal-form"
        onSubmit={handleSubmit((data) => {
          registerMutation.mutate(data);
        })}
      >
        {loginElementArr.map((elem) => (
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
        <Link className="sign__link" to={"/register"}>
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
