import { instance } from "../../../api/config";

export async function fetchComments(id:string) {
  return ((await instance.get(`/snippets/${id}`))).data.data
}
