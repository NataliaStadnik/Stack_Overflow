import { z } from "zod";
import { instance } from "../../api/config";

export const createCommentShema = z.object({
  content: z.string().min(1, "Comment should be at least 1 characters"),
  snippetId: z.string(),
});

export type createCommentForm = z.infer<typeof createCommentShema>;

export async function commentPost(data: createCommentForm) {
  await instance.post('/comments', data)
  .catch((err) => {
    throw new Error(err.response.data.message)
  })
}
