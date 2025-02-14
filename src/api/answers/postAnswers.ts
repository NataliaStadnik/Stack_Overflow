import { createCommentForm } from "../comments/commentPost"
import { instance } from "../config"

export type AnswerPost = {
  content: string,
  questionId: string
}

export async function postAnswers(data: createCommentForm) {
  const newData:AnswerPost = {content: data.content, questionId: data.snippetId}
  await instance.post('/answers', newData)
  .catch((err) => {
    throw new Error(err.response.data.message)
  })
}
