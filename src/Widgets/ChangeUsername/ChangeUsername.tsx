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
import Loader from "../../Shared/Loader/Loader";
import { queryCLient } from "../../api/queryClients";
import { loginElementArr } from "../Login/loginElementArr";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";

const ChangeUsername = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createChangeNameForm>({
    resolver: zodResolver(createChangeNameShema),
  });

  const registerMutation = useMutation({
    mutationFn: changeUserName,
    onSuccess(data) {
      dispatch(setUserInfo(data));
      reset();
      queryCLient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  return (
    <form
      className="edit-name"
      onSubmit={handleSubmit((data) => {
        registerMutation.mutate(data);
      })}
    >
      <h4>Change your username:</h4>

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

      {registerMutation.isSuccess && (
        <span className="register--correct">
          Username successfully updated!"
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
