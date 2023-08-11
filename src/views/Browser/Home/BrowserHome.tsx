import * as Home from "@/components/Home/index"

export default function BrowserHome() {
  return (
    <div className="flex flex-1 h-full flex-col gap-3 max-w-7xl bg-gray-light p-6 mx-auto">
      <div className="flex flex-col mx-auto text-center">
        <h1 className="text-xl">Hey! Welcome</h1>
        <h2 className="text-base">What&apos;s your plan for today?</h2>
      </div>
      <Home.CardsList />
      <Home.Chart />
    </div>
  )
}
