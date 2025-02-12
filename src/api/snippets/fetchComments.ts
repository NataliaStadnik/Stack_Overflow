import { instance } from "../config";
import { DataSnippet } from "../typesSnippetComment";

export async function fetchComments(id:string): Promise<DataSnippet> {
  return ((await instance.get(`/snippets/${id}`))).data.data
}
