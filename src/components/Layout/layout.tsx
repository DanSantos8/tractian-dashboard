import SideBar from "../SideBar/sidebar"

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-1 min-h-screen">
      <SideBar />
      <main className="flex-1 p-3"> {children}</main>
    </div>
  )
}
