import * as Navigation from "@/components/Navigation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { TractianLogo } from "../Icons"
import Link from "next/link"

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <div className="bg-blue h-12 w-full flex items-center justify-center">
        <Link href="/">
          <TractianLogo />
        </Link>
      </div>
      <div className="flex flex-1 w-full min-h-screen flex-col gap-3 max-w-7xl bg-gray-light px-3 py-8 mx-auto lg:h-auto">
        <div className="flex flex-col mx-auto text-center">
          <ToastContainer />
          <h1 className="text-xl">Hey! Welcome</h1>
          <h2 className="text-base">What&apos;s your plan for today?</h2>
        </div>
        <Navigation.Tabs />
        <main className="flex-1 p-3 w-full">{children}</main>
      </div>
    </div>
  )
}
