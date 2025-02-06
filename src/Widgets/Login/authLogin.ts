import { instance } from "../../api/config"
import { z } from "zod";

export const createLoginShema = z.object({
  username: z.string().min(5, "Username should be at least 5 characters"),
  password: z.string().min(6, "Password should be at least 6 characters"),
});

export type createLoginForm = z.infer<typeof createLoginShema>;

export async function authLogin(data: createLoginForm): Promise<void> {
    await instance.post('/auth/login', data)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
