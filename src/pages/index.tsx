import Image from "next/image"
import { Inter } from "next/font/google"
import BrowserHome from "@/views/Browser/Home/BrowserHome"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return <BrowserHome />
}
