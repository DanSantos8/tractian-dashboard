import * as Navigation from "@/components/Navigation"

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className=" flex flex-1 min-h-screen">
      <div className="flex flex-1 min-h-screen flex-col gap-3 max-w-7xl bg-gray-light p-3 mx-auto lg:h-auto">
        <div className="flex flex-col mx-auto text-center">
          <h1 className="text-xl">Hey! Welcome</h1>
          <h2 className="text-base">What&apos;s your plan for today?</h2>
        </div>
        <Navigation.Tabs />
        <main className="flex-1 p-3">{children}</main>
      </div>
    </div>
  )
}
