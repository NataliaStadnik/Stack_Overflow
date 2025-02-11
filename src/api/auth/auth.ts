import { instance } from "../config";
import { userType } from "../../Widgets/Login/authLogin";

export async function auth(): Promise<userType> {
  return (await instance.get(`/auth`)).data.data
}

