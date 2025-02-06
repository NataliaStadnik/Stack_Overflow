import { z } from "zod";
import { instance } from "../../api/config";

export const createRegisterShema = z.object({
  username: z.string().min(5, "Username should be at least 5 characters"),
  password: z.string().min(6, "Password should be at least 6 characters"),
  confirm: z.string().min(6, "Password should be at least 6 characters"),
})
.refine((data) => data.password === data.confirm, {
    message: "The passwords don't match",
    path: ['confirm']
})


export type createRegisterForm = z.infer<typeof createRegisterShema>;

export async function registerUser(data: createRegisterForm): Promise<void> {
  const postData = Object.fromEntries(Object.entries(data).filter(([key]) => key !== 'confirm'));
  await instance.post(`/register`, postData)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
