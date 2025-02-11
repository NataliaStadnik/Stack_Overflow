import { Button } from "ui-components_innowise";
import "./updateBtnComment.css";
import { FC } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteComment } from "./deleteComment";
import Loader from "../Loader/Loader";
import { queryCLient } from "../../api/queryClients";
import useLastIdLocation from "../../hooks/useLastIdLocation";
import ErrorMessageFetch from "../ErrorMessageFetch/ErrorMessageFetch";

interface UpdateBtnCommentProps {
  commentId: string;
  setStatus: (a: boolean) => void;
}

const UpdateBtnComment: FC<UpdateBtnCommentProps> = ({
  commentId,
  setStatus,
}) => {
  const locationId = useLastIdLocation();

  const deleteMutation = useMutation({
    mutationFn: () => deleteComment(commentId),
    onSuccess() {
      queryCLient.invalidateQueries({ queryKey: [`snippets/${locationId}}`] });
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleEdit = () => {
    setStatus(true);
  };

  return (
    <div>
      {deleteMutation.isError && (
        <ErrorMessageFetch mutation={deleteMutation} />
      )}
      <Button
        classes="comment__update"
        size="small"
        variant="text"
        children={"Edit"}
        onClick={handleEdit}
      />
      <Button
        classes="comment__update"
        size="small"
        variant="text"
        children={deleteMutation.isPending ? <Loader type="small" /> : "Delete"}
        onClick={handleDelete}
      />
    </div>
  );
};

export default UpdateBtnComment;
