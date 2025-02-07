import { z } from "zod";
import { instance } from "../../api/config";

export const createChangeNameShema = z.object({
  username: z.string().min(5, "Username should be at least 5 characters"),
  password: z.string().min(6, "Password should be at least 6 characters"),
})

export type createChangeNameForm = z.infer<typeof createChangeNameShema>;

export async function changeUserName(data: createChangeNameForm): Promise<void> {
  await instance.patch(`/me`, data)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
