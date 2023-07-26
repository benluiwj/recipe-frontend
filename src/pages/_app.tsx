import ThemeProvider from "@/context/themeContext"
import type { AppProps } from "next/app"

import "@/styles/App.scss"
import "@/styles/index.dark.scss"
import "@/styles/index.scss"

import AuthProvider from "@/context/authContext"
import Layout from "@/components/layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  )
}
