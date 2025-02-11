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
import { useRef, useState } from "react";
import { queryCLient } from "../../api/queryClients";

// не очищается форма
const CreateQuestion = () => {
  const [code, setCode] = useState("");
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<createPostQuestionForm>({
    resolver: zodResolver(createPostQuestionShema),
  });

  const registerMutation = useMutation({
    mutationFn: (data: createPostQuestionForm) => postQuestion(data, code),
    onSuccess() {
      reset();
      resetField("title");
      queryCLient.invalidateQueries({ queryKey: ["questions"] });
    },
  });

  return (
    <form
      ref={ref}
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
      />
      <InputElement
        classes="ask-form__input"
        type="text"
        placeholder="Question description"
        inputProp={{ ...register("description") }}
        errorMessage={errors["description"]?.message}
      />

      <div className="ask-form__body">
        <p className="ask-form__title">Attached code:</p>
        <SnippetBody value={code} setValue={setCode} forNewSnippet />
      </div>

      <ErrorMessageFetch mutation={registerMutation} />

      {registerMutation.isSuccess && (
        <span className="register--correct">
          Question created successfully!"
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
