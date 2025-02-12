import { instance } from "../config"
import { createNewSnippetForm } from "./postNewSnippet"

export async function updateSnippet(data: createNewSnippetForm, id:string) {
  console.log(data)
  await instance.patch(`/snippets/${id}`, data)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
