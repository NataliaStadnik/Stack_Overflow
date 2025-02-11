import { FC } from "react";
import "./newComment.css";
import { Button } from "ui-components_innowise";
import { useMutation } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { queryCLient } from "../../api/queryClients";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import {
  commentPost,
  createCommentForm,
  createCommentShema,
} from "./commentPost";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputElement from "../InputElement/InputElement";
import Message from "../../svg/Message";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import Close from "../../svg/Close";
import { updateComment } from "./updateComment";
import ErrorMessageFetch from "../ErrorMessageFetch/ErrorMessageFetch";

interface NewCommentProps {
  snippetId: string;
  setStatus: (a: boolean) => void;
  commentString?: string;
  commentId?: string;
}
//  перенести в виджеты
const NewComment: FC<NewCommentProps> = ({
  snippetId,
  setStatus,
  commentString,
  commentId = "",
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
        queryKey: [`snippets/${snippetId}}`],
      });
      setStatus(false);
    },
  });

  return (
    <form
      className={`comment`}
      onSubmit={handleSubmit((data) => {
        return registerMutation.mutate(data);
      })}
    >
      <div className={`comment__field comment__input`}>
        {registerMutation.isError && (
          <ErrorMessageFetch mutation={registerMutation} />
        )}

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
          value={snippetId}
          {...register("snippetId")}
        />
      </div>

      <Button
        classes="comment-send"
        children={registerMutation.isPending ? <Loader type="small" /> : "Send"}
      />
    </form>
  );
};

export default NewComment;
