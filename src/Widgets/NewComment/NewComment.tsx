import { FC } from "react";
import "./newComment.css";
import { Button } from "ui-components_innowise";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { queryCLient } from "../../api/queryClients";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputElement from "../../Shared/InputElement/InputElement";
import Message from "../../svg/Message";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import Close from "../../svg/Close";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import {
  commentPost,
  createCommentForm,
  createCommentShema,
} from "../../api/comments/commentPost";
import { updateComment } from "../../api/comments/updateComment";
import { postAnswers } from "../../api/answers/postAnswers";

interface NewCommentProps {
  snippetId?: string;
  setStatus: (a: boolean) => void;
  commentString?: string;
  commentId?: string;
  answerId?: string;
}

const NewComment: FC<NewCommentProps> = ({
  snippetId,
  setStatus,
  commentString,
  commentId = "",
  answerId = "",
}) => {
  const myUsername = useSelector(
    (state: RootState) => state.userState.username
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createCommentForm>({
    resolver: zodResolver(createCommentShema),
  });

  const registerMutation = useMutation({
    mutationFn: commentString
      ? (data: createCommentForm) => updateComment(data, commentId)
      : commentPost,
    onSuccess() {
      queryCLient.invalidateQueries({
        queryKey: [`snippets/${snippetId}`],
      });
      setStatus(false);
    },
  });

  const answerMutation = useMutation({
    mutationFn: postAnswers,
    onSuccess() {
      queryCLient.invalidateQueries({
        queryKey: [`/questions/${answerId}`],
      });
      setStatus(false);
    },
  });

  return (
    <form
      className={`comment`}
      onSubmit={handleSubmit((data) => {
        if (snippetId) {
          return registerMutation.mutate(data);
        }
        if (answerId) {
          return answerMutation.mutate(data);
        }
      })}
    >
      <div className={`comment__field comment__input`}>
        {registerMutation.isError ||
          (answerMutation.isError && (
            <ErrorMessageFetch mutation={registerMutation} />
          ))}

        <ButtonSvg
          classes="close-btn"
          svg={<Close classes="close-comment-svg" color="grey" />}
          onClick={() => setStatus(false)}
        />

        <p className="comment__text">{myUsername}</p>

        <InputElement
          placeholder="Comment..."
          svg={<Message classes="user-svg" color="#5053f4" />}
          type="text"
          inputProp={{ ...register("content") }}
          errorMessage={errors["content"]?.message}
          newValue={commentString}
        />

        <input
          className="visually-hidden"
          type="text"
          value={snippetId || answerId}
          {...register("snippetId")}
        />
      </div>

      <Button
        classes="comment-send"
        children={
          registerMutation.isPending || answerMutation.isPending ? (
            <Loader type="small" />
          ) : (
            "Send"
          )
        }
      />
    </form>
  );
};

export default NewComment;
