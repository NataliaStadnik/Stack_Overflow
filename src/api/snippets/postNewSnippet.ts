import { instance } from "../config"

export type createNewSnippetForm = {
  code: string,
  language: string
}

export async function postNewSnippet(data: createNewSnippetForm) {
  await instance.post('/snippets', data)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
