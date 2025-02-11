import { instance } from "../../api/config";

export async function deleteComment(id: string): Promise<void> {
  return await instance.delete(`/comments/${id}`)
}
