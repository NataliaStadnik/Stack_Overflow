import { instance } from "../config"
import { AllSnippets } from "../typesSnippetComment"
import { PageNumber } from "../users/allUsersFetch"

export async function fetchSnippets(page:PageNumber = '1'): Promise<AllSnippets> {
  return (await instance.get(`/snippets?page=${page}`)
    .catch((err) => {
        throw new Error(err.response.data.message)
      })).data.data
}
