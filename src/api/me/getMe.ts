import { AxiosResponse } from "axios";
import { instance } from "../config";

export async function getMe(): Promise<AxiosResponse> {
  return await instance.get(`/me`)
}

