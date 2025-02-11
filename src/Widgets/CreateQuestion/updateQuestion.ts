import { instance } from "../../api/config"
import { createPostQuestionForm } from "./postQuestion"

export async function updateQuestion(data: createPostQuestionForm, code: string, id: string): Promise<void> {
  const dataObj = {...data, attachedCode: code}
  await instance.patch(`/questions/${id}`, dataObj)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
