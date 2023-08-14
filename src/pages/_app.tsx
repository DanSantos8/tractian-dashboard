import Layout from "@/components/Layout/layout"
import { ChartsContextProvider } from "@/context/charts/ChartsContext"
import { ClientsContextProvider } from "@/context/clients/ClientsContext"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientsContextProvider>
      <ChartsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChartsContextProvider>
    </ClientsContextProvider>
  )
}
