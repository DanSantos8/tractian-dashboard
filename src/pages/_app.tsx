import Layout from "@/components/Layout/layout"
import { ChartsContextProvider } from "@/context/charts/ChartsContext"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChartsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChartsContextProvider>
  )
}
