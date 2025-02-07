import { Button } from "ui-components_innowise";
import "./changePassword.css";
import InputElement from "../../Shared/InputElement/InputElement";
import { changePasswordArr } from "./changePasswordArr";
import Loader from "../../Shared/Loader/Loader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  changePassword,
  createChangePasswordForm,
  createChangePasswordShema,
} from "./fetchChange";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createChangePasswordForm>({
    resolver: zodResolver(createChangePasswordShema),
  });

  const registerMutation = useMutation({
    mutationFn: changePassword,
    onSuccess() {
      reset();
    },
  });

  return (
    <form
      className="edit-password"
      onSubmit={handleSubmit((data) => {
        registerMutation.mutate(data);
      })}
    >
      <h4>Change your password:</h4>

      {changePasswordArr.map((elem) => (
        <InputElement
          key={elem.id}
          svg={elem.svg}
          placeholder={elem.placeholder}
          type={elem.type}
          inputProp={{ ...register(elem.name) }}
          errorMessage={errors[elem.name]?.message}
        />
      ))}

      {registerMutation.error && (
        <span className="register--error">
          {registerMutation.error.message}
        </span>
      )}

      <Button
        classes="edit-user--btn"
        children={
          registerMutation.isPending ? (
            <Loader type="small" />
          ) : (
            "Change password"
          )
        }
      />
    </form>
  );
};

export default ChangePassword;
