import { instance } from "../../api/config";
import { userType } from "../auth/authLogin";
import { Links, Meta, PageNumber } from "../users/allUsersFetch";

export type AllQuestionsObject = {
  data: AllQuestionsArr,
  links: Links,
  meta: Meta
}

export type AllQuestionsArr = Array<OneQuestion>

export type OneAnswer = undefined

export type OneQuestion = {
  answers: Array<OneAnswer>,
  attachedCode: string,
  description: string,
  id: string,
  isResolved: boolean,
  title: string
  user: userType
}

export async function getAllQuestions(page:PageNumber = '1'):Promise<AllQuestionsObject> {
 return (await instance.get(`/questions?page=${page}`)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
  ).data.data
}
