import ThemeProvider from "@/context/themeContext"
import type { AppProps } from "next/app"

import "@/styles/App.scss"
import "@/styles/index.dark.scss"
import "@/styles/index.scss"

import AuthProvider from "@/context/authContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
