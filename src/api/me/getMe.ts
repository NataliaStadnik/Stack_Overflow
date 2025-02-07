import { AxiosResponse } from "axios";
import { instance } from "../config";
import { z } from "zod";

export const userShema = z.object({
  id: z.string(),
  role: z.string(),
  username: z.string(),
})

export type userType = z.infer<typeof userShema>;

export async function getMe(): Promise<AxiosResponse<userType>> {
  return (await instance.get(`/me`)).data
}

