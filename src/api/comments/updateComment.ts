import { instance } from "../../api/config";
import { createCommentForm } from "./commentPost";

export async function updateComment(data: createCommentForm, id: string) {
  await instance.patch(`/comments/${id}`, data)
  .catch((err) => {
    throw new Error(err.response.data.message)
  })
}
