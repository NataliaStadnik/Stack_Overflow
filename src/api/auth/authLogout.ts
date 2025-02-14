import { instance } from "../config"

export async function authLogout(): Promise<void> {
  await instance.post(`/auth/logout`)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
