import ThemeProvider from "@/context/themeContext";
import type { AppProps } from "next/app";
import "@/styles/App.scss";
import "@/styles/index.scss";
import "@/styles/index.dark.scss";
import { NextPage } from "next/types";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
}
