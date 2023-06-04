import axios from "axios"
import { BASE_URL } from "@/config"

export const getRequestHeader = (token: string) => {
  return {
    Authorization: token,
  }
}

export const axiosInstance = axios.create({ baseURL: BASE_URL })
