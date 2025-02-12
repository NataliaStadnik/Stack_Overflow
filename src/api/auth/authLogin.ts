import { instance } from "../config"
import { z } from "zod";

export const createLoginShema = z.object({
  username: z.string().min(5, "Username should be at least 5 characters"),
  password: z.string().min(6, "Password should be at least 6 characters"),
});

export type createLoginForm = z.infer<typeof createLoginShema>;


export const userShema = z.object({
  id: z.string(),
  role: z.string(),
  username: z.string(),
})

export type userType = z.infer<typeof userShema>;

export async function fetchMe(): Promise<userType> {
  return (await instance.get(`/me`)
      .catch((err) => {
          throw new Error(err.response.data.message)
        })).data.data
}

export async function authLogin(data: createLoginForm): Promise<userType> {
    await instance.post('/auth/login', data)
    return fetchMe();
}
