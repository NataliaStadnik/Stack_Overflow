import { userType } from "../../../Widgets/Login/authLogin";
import { AllSnippets, DataSnippet } from "../typesSnippetComment";
import { fetchComments } from "./fetchComments";
import { fetchSnippets } from "./fetchSnippets";

export type CommentsArray = Array<OneComment>

export type OneComment = {
  id: string,
  content: string,
  user: userType
}


export async function fetchSnippetsComments(){
  const data = await fetchSnippets();
  const clone: AllSnippets = JSON.parse(JSON.stringify(data))

  await Promise.all(
    clone.data.map(async(elem:DataSnippet) => {
      const data = await fetchComments(elem.id);
      elem['comments'] = data.comments;
    })
  )
  return clone;
}
