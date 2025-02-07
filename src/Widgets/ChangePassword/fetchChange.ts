import { z } from "zod";
import { instance } from "../../api/config";

export const createChangePasswordShema = z.object({
  oldPassword: z.string().min(6, "Password should be at least 6 characters"),
  newPassword: z.string().min(6, "Password should be at least 6 characters"),
  confirm: z.string().min(6, "Password should be at least 6 characters"),
})
.refine((data) => data.newPassword === data.confirm, {
    message: "The passwords don't match",
    path: ['confirm']
})


export type createChangePasswordForm = z.infer<typeof createChangePasswordShema>;

export async function changePassword(data: createChangePasswordForm): Promise<void> {
  const postData = Object.fromEntries(Object.entries(data).filter(([key]) => key !== 'confirm'));
  await instance.patch(`/me/password`, postData)
    .catch((err) => {
      throw new Error(err.response.data.message)
    })
}
