import { instance } from "../../../api/config"
import { AllSnippets } from "../typesSnippetComment"

export async function fetchSnippets(): Promise<AllSnippets> {
  return (await instance.get(`/snippets`)
    .catch((err) => {
        throw new Error(err.response.data.message)
      })).data.data
}
