import { instance } from "../config";

export async function deleteComment(id: string): Promise<void> {
  await instance.delete(`/comments/${id}`)
  .catch((err) => {
    throw new Error(err.response.data.message)
  })
}
