import { Button } from "ui-components_innowise";
import "./createQuestion.css";
import SnippetBody from "../../Shared/SnippetBody/SnippetBody";
import InputElement from "../../Shared/InputElement/InputElement";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createPostQuestionForm,
  createPostQuestionShema,
  postQuestion,
} from "./postQuestion";
import Loader from "../../Shared/Loader/Loader";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import { FC, useState } from "react";
import { queryCLient } from "../../api/queryClients";
import { updateQuestion } from "./updateQuestion";

interface CreateQuestionProps {
  newTitle?: string;
  newDescr?: string;
  newCode?: string;
  updateID?: string;
}

// не очищается форма
const CreateQuestion: FC<CreateQuestionProps> = ({
  newTitle = "",
  newCode = "",
  newDescr = "",
  updateID = "",
}) => {
  const [code, setCode] = useState(newCode);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createPostQuestionForm>({
    resolver: zodResolver(createPostQuestionShema),
  });

  const registerMutation = useMutation({
    mutationFn: (data: createPostQuestionForm) =>
      updateID
        ? updateQuestion(data, code, updateID)
        : postQuestion(data, code),
    onSuccess() {
      reset();
      queryCLient.invalidateQueries({ queryKey: ["questions"] });
    },
  });

  return (
    <form
      className="ask-form"
      onSubmit={handleSubmit((data) => {
        registerMutation.mutate(data);
      })}
    >
      <InputElement
        classes="ask-form__input"
        type="text"
        placeholder="Question title"
        inputProp={{ ...register("title") }}
        errorMessage={errors["title"]?.message}
        newValue={newTitle}
      />
      <InputElement
        classes="ask-form__input"
        type="text"
        placeholder="Question description"
        inputProp={{ ...register("description") }}
        errorMessage={errors["description"]?.message}
        newValue={newDescr}
      />

      <div className="ask-form__body">
        <p className="ask-form__title">Attached code:</p>
        <SnippetBody value={code} setValue={setCode} forNewSnippet />
      </div>

      <ErrorMessageFetch mutation={registerMutation} />

      {registerMutation.isSuccess && (
        <span className="register--correct">
          Question {updateID ? "updated" : "created"} successfully!"
        </span>
      )}

      <Button
        classes="ask-form__btn"
        children={
          registerMutation.isPending ? <Loader type="small" /> : "Confirm"
        }
      />
    </form>
  );
};

export default CreateQuestion;
