import { instance } from "../config";

export async function deleteSnippet(id: string): Promise<void> {
  await instance.delete(`/snippets/${id}`)
  .catch((err) => {
    throw new Error(err.response.data.message)
  })
}
