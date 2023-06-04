import { User } from "./User"

export type userLoginResponse = {
  user: User | undefined
  jwt: string
}
