import { instance } from "../../api/config"
import { userType } from "../../Widgets/Login/authLogin"

type Links = {
  current: string,
  last: string,
  next: string
}

type Meta = {
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

export async function allUsersFetch(): Promise<allUsersType> {
  return (await instance.get(`/users`)
    .catch((err) => {
        throw new Error(err.response.data.message)
      })).data.data
}
