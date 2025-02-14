import { userType } from "./auth/authLogin"
import { Links, Meta } from "./users/allUsersFetch"
import { CommentsArray } from "./snippets/fetchSnippetsComments"

export type AllSnippets = {
  links: Links,
  meta: Meta,
  data: AllDataSnippets
}

export type AllDataSnippets = Array<DataSnippet>

export type DataSnippet = {
  code: string,
  id: string,
  language: string,
  marks: MarkTypeArray,
  user: userType,
  comments?: CommentsArray
}

export type MarkType = {
  id: string,
  type: OneMark,
  user: userType
}

export type OneMark = 'like' | 'dislike' | 'none'
export type MarkTypeArray = Array<MarkType>



