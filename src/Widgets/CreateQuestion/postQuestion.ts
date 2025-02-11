import { instance } from "../../api/config"
import { z } from "zod";

export const createPostQuestionShema = z.object({
  title: z.string().min(1, "Title should be at least 5 characters"),
  description: z.string().min(1, "Description should be at least 5 characters"),
});

export type createPostQuestionForm = z.infer<typeof createPostQuestionShema>;

export async function postQuestion(data: createPostQuestionForm, code: string): Promise<void> {
  const dataObj = {...data, attachedCode: code}
  await instance.post('/questions', dataObj)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
