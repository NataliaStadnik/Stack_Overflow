import { z } from "zod";
import { instance } from "../config";
import { fetchMe, userType } from "../auth/authLogin";

export const createChangeNameShema = z.object({
  username: z.string().min(5, "Username should be at least 5 characters"),
  password: z.string().min(6, "Password should be at least 6 characters"),
})

export type createChangeNameForm = z.infer<typeof createChangeNameShema>;

export async function changeUserName(data: createChangeNameForm): Promise<userType> {
  await instance.patch(`/me`, data)
  return fetchMe();
}
