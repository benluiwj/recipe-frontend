import { getUserAndToken } from "@/services/auth/getUserAndToken"
import { User } from "@/types/User"
import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type Props = {
  children?: React.ReactNode
}

type AuthContextType = {
  isAuthorised: boolean
  isInitialised: boolean
  user: User | undefined
}

const defaultAuthContext: AuthContextType = {
  isAuthorised: false,
  isInitialised: false,
  user: undefined,
}

export default function AuthProvider({
  children,
}: Props): ReactElement<React.ReactNode> {
  const [isAuthorised, setIsAuthorised] = useState<boolean>(false)
  const [isInitialised, setIsInitialised] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  const loginUser = useCallback(async (email: string, password: string) => {
    const data = await getUserAndToken(email, password)
    if (data === null) {
      return
    }
    const { token, user } = data
    localStorage.setItem("token", token)
    setUser(user as User)
    setIsAuthorised(true)
    setIsInitialised(true)
  }, [])

  const value = useMemo(
    () => ({ isAuthorised, isInitialised, user, loginUser }),
    [isAuthorised, isInitialised, user, loginUser]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context)
    throw new Error("useAuthContext context must be use inside AuthProvider")

  return context
}
