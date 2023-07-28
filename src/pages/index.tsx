import Head from "next/head"
import { AuthLayout } from "@/components/auth/layout"
import { LoginForm } from "@/components/auth/forms/loginForm"

export default function Home() {
  return (
    <>
      <Head>
        <title>Recuration | Curate your recipes today</title>
      </Head>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  )
}
