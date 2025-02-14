import { instance } from "../../api/config"
import { OneMark } from "../typesSnippetComment"
import { fetchComments } from "./fetchComments"

type PostMark = {
  mark: OneMark
}

export async function postMark(mark: OneMark, id: string) {
  const obj:PostMark = {
    mark: mark
  }
  await instance.post(`/snippets/${id}/mark`, obj)
  return fetchComments(id)
}
