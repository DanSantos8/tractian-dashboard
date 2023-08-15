import { BrowserHealthHistory } from "@/views/Browser/Reports/SubTabs/BrowserHealthHistory"
import BrowserHelthScore from "@/views/Browser/Reports/SubTabs/BrowserHealthScore"
import BrowserHealthStatus from "@/views/Browser/Reports/SubTabs/BrowserHealthStatus"

enum ReportsSubTabsEnum {
  health_history = "Health History",
  health_score = "Health Score",
  health_status = "Health Status",
}

enum ReportsSubTabsSlugEnum {
  health_history = "health-history",
  health_score = "health-score",
  health_status = "health-status",
}

export const reportsSubTabs = [
  {
    id: 1,
    title: ReportsSubTabsEnum.health_score,
    slug: ReportsSubTabsSlugEnum.health_score,
  },
  {
    id: 2,
    title: ReportsSubTabsEnum.health_status,
    slug: ReportsSubTabsSlugEnum.health_status,
  },
  {
    id: 0,
    title: ReportsSubTabsEnum.health_history,
    slug: ReportsSubTabsSlugEnum.health_history,
  },
]

export function getCurrentSubTabContent(slug: string) {
  switch (slug) {
    case ReportsSubTabsSlugEnum.health_history:
      return <BrowserHealthHistory />
    case ReportsSubTabsSlugEnum.health_status:
      return <BrowserHealthStatus />
    case ReportsSubTabsSlugEnum.health_score:
      return <BrowserHelthScore />
  }
}
