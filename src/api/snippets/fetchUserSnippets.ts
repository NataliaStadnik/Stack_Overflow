import { instance } from "../../api/config";
import { AllSnippets, DataSnippet } from "../typesSnippetComment";
import { PageNumber } from "../users/allUsersFetch";
import { fetchComments } from "./fetchComments";


export async function fetchUserSnippets(id:string, page: PageNumber): Promise<AllSnippets> {
  const data = (await instance.get(`/snippets?userId=${id}&page=${page}`)).data
  const clone: AllSnippets = JSON.parse(JSON.stringify(data.data))

  await Promise.all(
    clone.data.map(async(elem:DataSnippet) => {
      const data = await fetchComments(elem.id);
      elem['comments'] = data.comments;
    })
  )
  return clone;
}
