import { instance } from "../config";

export async function deleteSnippet(id: string): Promise<void> {
  return await instance.delete(`/snippets/${id}`)
}
