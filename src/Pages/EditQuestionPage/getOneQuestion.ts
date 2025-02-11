import { instance } from "../../api/config"
import { OneQuestion } from "../QuestionsPage/getAllQuestions"

export async function getOneQuestion(id: string):Promise<OneQuestion> {
 return (await instance.get(`/questions/${id}`)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
  ).data.data
}
