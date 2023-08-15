import { Html, Head, Main, NextScript } from "next/document"
import { useRouter } from "next/router"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Tractian - Dashboard</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
