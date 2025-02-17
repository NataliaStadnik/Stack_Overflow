import { z } from "zod";
import { instance } from "../config";

export const statisticShema = z.object({
  commentsCount: z.string(),
  correctAnswersCount: z.string(),
  dislikesCount: z.string(),
  likesCount: z.string(),
  questionsCount: z.string(),
  rating: z.string(),
  regularAnswersCount: z.string(),
  snippetsCount: z.string(),
})

export type statisticType = z.infer<typeof statisticShema>;

export async function fetchStatistic(id: string): Promise<statisticType> {
  return (await instance.get(`users/${id}/statistic`)
  .catch((err) => {
      throw new Error(err.response.data.message)
    })).data.data.statistic
}
