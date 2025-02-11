import { instance } from "../../api/config";
import { fetchComments } from "../HomePage/api/fetchComments";
import { AllSnippets, DataSnippet } from "../HomePage/typesSnippetComment";


export async function fetchUserSnippets(id:string): Promise<AllSnippets> {
  const data = (await instance.get(`/snippets?userId=${id}`)).data
  const clone: AllSnippets = JSON.parse(JSON.stringify(data.data))

  await Promise.all(
    clone.data.map(async(elem:DataSnippet) => {
      const data = await fetchComments(elem.id);
      elem['comments'] = data.comments;
    })
  )
  return clone;
}
