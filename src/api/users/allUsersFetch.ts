import { instance } from "../config"
import { userType } from "../auth/authLogin"

export type Links = {
  current: string,
  last: string,
  next: string
}

export type Meta = {
  currentPage: string,
  itemsPerPage: string,
  sortBy: Array<[string]>,
  totalItems: string,
  totalPages: string
}

type allUsersType = {
  data: Array<userType>,
  links: Links,
  meta: Meta
}

export type PageNumber = Partial<string>

export async function allUsersFetch(page:PageNumber = '1'): Promise<allUsersType> {
  return (await instance.get(`/users?page=${page}`)
    .catch((err) => {
        throw new Error(err.response.data.message)
      })).data.data
}
