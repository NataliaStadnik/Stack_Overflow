import { instance } from "../../api/config";

export async function authDelete(): Promise<void> {
  return await instance.delete(`/me`)
}
