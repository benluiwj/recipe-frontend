import Head from "next/head"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import Layout from "@/components/layouts"
import { Landing } from "@/components/landing"

export default function Home() {
  return (
    <>
      <Head>
        <title>Recuration | Curate your recipes today</title>
      </Head>
      <Landing />
    </>
  )
}
