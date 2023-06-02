import { axiosInstance } from "@/utils/axios"
import { LOGIN_PATH } from "@/config"

export const getUserAndToken = async (email: string, password: string) => {
  const { data, status } = await axiosInstance.post(LOGIN_PATH, {
    email,
    password,
  })

  if (status != 200) {
    return null
  }

  return data
}
