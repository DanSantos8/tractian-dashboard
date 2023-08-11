export function getSlug(pathname: string) {
  return pathname.split("/").pop()
}

export function createSlug(title: string) {
  return title.toLowerCase().split(" ").join("-")
}

enum ReportsSubTabsEnum {
  health_history = "Health History",
  health_score = "Health Score",
  health_status = "Health Status",
}

export function getSubTabs(pathname: string) {
  switch (getSlug(pathname)) {
    case "reports":
      return [
        {
          id: 0,
          title: ReportsSubTabsEnum.health_history,
          slug: createSlug(ReportsSubTabsEnum.health_history),
        },
        {
          id: 1,
          title: ReportsSubTabsEnum.health_score,
          slug: createSlug(ReportsSubTabsEnum.health_score),
        },
        {
          id: 2,
          title: ReportsSubTabsEnum.health_status,
          slug: createSlug(ReportsSubTabsEnum.health_status),
        },
      ]
    case "work-orders":
      return []
    case "users":
      return []
    case "companies-units":
      return []
    default:
      return []
  }
}
