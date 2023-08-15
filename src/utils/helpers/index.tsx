import { clientsSubTabs } from "./clients.helpers"
import { reportsSubTabs } from "./reports.helpers"
import { UsersSubTabs } from "./users.helpers"
import { workOrdersSubTabs } from "./work-orders.helpers"

export function getSlug(pathname: string) {
  return pathname.split("/").pop()
}

export function createSlug(title: string) {
  return title.toLowerCase().split(" ").join("-")
}

export function asPathToSlug(asPath: string) {
  return asPath.split("=").at(-1)
}

export function updateUrl(updatedUrl: string): void {
  history.pushState({}, "", updatedUrl)
}

export function generateRandomNumberID() {
  const idLength = 6
  let id = ""

  for (let i = 0; i < idLength; i++) {
    id += Math.floor(Math.random() * 10)
  }

  return parseInt(id, 10)
}

export function getSubTabs(pathname: string) {
  switch (getSlug(pathname)) {
    case "reports":
      return reportsSubTabs
    case "work-orders":
      return workOrdersSubTabs
    case "users-management":
      return UsersSubTabs
    case "clients":
      return clientsSubTabs
    default:
      return []
  }
}
