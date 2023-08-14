import Layout from "@/components/Layout/layout"
import { ChartsContextProvider } from "@/context/charts/ChartsContext"
import { GlobalContextProvider } from "@/context/global/GlobalContext"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ChartsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChartsContextProvider>
    </GlobalContextProvider>
  )
}
