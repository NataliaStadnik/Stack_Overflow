import { instance } from "../config";

export async function authDelete(): Promise<void> {
  await instance.delete(`/me`)
  .catch((err) => {
    throw new Error(err.response.data.message)
  })
}
