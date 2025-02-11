import { instance } from "../../api/config";
import { userType } from "../../Widgets/Login/authLogin";
import { Links, Meta } from "../AllUsersPage/allUsersFetch";

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

export async function getAllQuestions():Promise<AllQuestionsObject> {
 return (await instance.get('/questions')
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
  ).data.data
}
