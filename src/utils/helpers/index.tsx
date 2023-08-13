import { reportsSubTabs } from "./reports.helpers"
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

export function getSubTabs(pathname: string) {
  switch (getSlug(pathname)) {
    case "reports":
      return reportsSubTabs
    case "work-orders":
      return workOrdersSubTabs
    case "users":
      return []
    case "companies-units":
      return []
    default:
      return []
  }
}
