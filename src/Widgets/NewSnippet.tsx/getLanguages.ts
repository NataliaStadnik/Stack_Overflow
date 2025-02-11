import { instance } from "../../api/config"

export type Languages = Array<string>;

export async function getLanguages(): Promise<Languages> {
  return (await instance.get(`/snippets/languages`)
    .catch((err) => {
        throw new Error(err.response.data.message)
      })).data.data
}
