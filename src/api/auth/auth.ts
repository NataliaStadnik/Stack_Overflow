import { instance } from "../config";
import { userType } from "./authLogin";


export async function auth(): Promise<userType> {
  return (await instance.get(`/auth`)).data.data
}

