import Link from "next/link"
import { Logo } from "../Images"
import { Button } from "antd"

export default function SideBar() {
  const routes = [
    { title: "Reports", link: "/reports" },
    { title: "Work Orders", link: "/work-orders" },
    { title: "Companies", link: "/companies" },
    { title: "Units", link: "/units" },
    { title: "Users management", link: "/users-management" },
  ]
  return (
    <nav className="flex flex-1 flex-col py-4 px-6 bg-blue max-w-xs gap-6">
      <div className="text-center bg-gray-light flex justify-center p-2">
        <Logo size={200} />
      </div>

      <ul className="flex flex-col gap-3">
        {routes.map((route) => (
          <li key={route.title}>
            <Link
              href={route.link}
              className="text-gray-light font-semibold text-xl"
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>

      <Button className="bg-gray-light mt-auto text-xs font-semibold">
        Logout
      </Button>
    </nav>
  )
}
