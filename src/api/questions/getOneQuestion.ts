import { instance } from "../config"
import { OneQuestion } from "./getAllQuestions"

export async function getOneQuestion(id: string):Promise<OneQuestion> {
 return (await instance.get(`/questions/${id}`)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })
  ).data.data
}
