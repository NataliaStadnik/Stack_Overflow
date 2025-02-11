import { instance } from "../../api/config"
import { createNewSnippetForm } from "./postNewSnippet"

export async function updateSnippet(data: createNewSnippetForm, id:string) {
  await instance.patch(`/snippets/${id}`, data)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
