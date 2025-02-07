import { Button } from "ui-components_innowise";
import "./changeUsername.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import InputElement from "../../Shared/InputElement/InputElement";
import {
  changeUserName,
  createChangeNameForm,
  createChangeNameShema,
} from "./fetchNewName";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loader from "../../Shared/Loader/Loader";
import { queryCLient } from "../../api/queryClients";
import { loginElementArr } from "../Login/loginElementArr";

const ChangeUsername = () => {
  const userName = useSelector(
    (state: RootState) => state.userState.value.username
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createChangeNameForm>({
    resolver: zodResolver(createChangeNameShema),
  });

  console.log(userName);
  const registerMutation = useMutation({
    mutationFn: changeUserName,
    onSuccess(data) {
      reset();
      queryCLient.invalidateQueries({ queryKey: ["me"] });
      console.log(data);
    },
  });

  return (
    <form
      className="edit-name"
      onSubmit={handleSubmit((data) => {
        registerMutation.mutate(data);
      })}
    >
      <h4 {...register("username")}>Change your username:</h4>

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

      {registerMutation.error && (
        <span className="register--error">
          {registerMutation.error.message}
        </span>
      )}

      <Button
        classes="edit-user--btn"
        children={registerMutation.isPending ? <Loader type="small" /> : "Save"}
      />
    </form>
  );
};

export default ChangeUsername;
