import { instance } from "../config"

export async function authLogout(): Promise<void> {
  return await instance.post(`/auth/logout`)
}
