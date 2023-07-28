import SignUpForm from "@/components/auth/forms/signUpForm"
import { AuthLayout } from "@/components/auth/layout"
import "@/styles/components/LoginForm.scss"
import Link from "next/link"

const SignUp = () => (
  <AuthLayout>
    <SignUpForm />
  </AuthLayout>
)

export default SignUp
