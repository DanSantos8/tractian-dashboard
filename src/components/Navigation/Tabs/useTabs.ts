import { getSlug } from "@/utils/helpers"
import { useRouter } from "next/router"
import { useMemo, useState } from "react"

export enum TabsEnum {
  home = 0,
  reports = 1,
  work_orders = 2,
  users_management = 3,
  clients = 4,
}

export default function useTabs() {
  const { pathname } = useRouter()

  const initialTabSlug = useMemo(() => {
    return getSlug(pathname)?.replace("-", "_") || "home"
  }, [pathname])

  const initialTabValue: TabsEnum =
    TabsEnum[initialTabSlug as keyof typeof TabsEnum]

  const [currentTab, setCurrentTab] = useState<TabsEnum>(
    initialTabValue || TabsEnum.home
  )

  const tabs = [
    {
      link: "reports",
      title: "Assets",
      description: "Check the assets informations",
    },
    {
      link: "work-orders",
      title: "Work orders",
      description: "Track the maintenance",
    },
    {
      link: "users-management",
      title: "Users",
      description: "Manage your users activities",
    },

    {
      link: "clients",
      title: "Companies and Units",
      description: "Manage your clients",
    },
  ]

  return { currentTab, setCurrentTab, tabs }
}
