import { AxiosResponse } from "axios";
import { instance } from "../config";

export async function auth(): Promise<AxiosResponse> {
  return await instance.get(`/auth`)
}

