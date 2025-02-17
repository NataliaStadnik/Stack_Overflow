import { Button } from "ui-components_innowise";
import "./updateBtnComment.css";
import { FC } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteComment } from "../../api/comments/deleteComment";
import Loader from "../../Shared/Loader/Loader";
import { queryCLient } from "../../api/queryClients";
import useLastIdLocation from "../../hooks/useLastIdLocation";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import { useLocation } from "react-router";

interface UpdateBtnCommentProps {
  commentId: string;
  setStatus: (a: boolean) => void;
}

const UpdateBtnComment: FC<UpdateBtnCommentProps> = ({
  commentId,
  setStatus,
}) => {
  const locationId = useLastIdLocation();
  const location = useLocation();

  const deleteMutation = useMutation({
    mutationFn: () => deleteComment(commentId),
    onSuccess() {
      queryCLient.invalidateQueries({ queryKey: [`snippets/${locationId}`] });
    },
  });

  if (location.pathname.includes("answers")) {
    return null;
  }

  return (
    <div>
      {deleteMutation.isError && (
        <ErrorMessageFetch mutation={deleteMutation} />
      )}
      <Button
        classes="comment__update"
        size="small"
        variant="text"
        onClick={() => setStatus(true)}
      >
        Edit
      </Button>
      <Button
        classes="comment__update"
        size="small"
        variant="text"
        onClick={() => deleteMutation.mutate()}
      >
        {deleteMutation.isPending ? <Loader type="small" /> : "Delete"}
      </Button>
    </div>
  );
};

export default UpdateBtnComment;
