import { BrowserHealthHistory } from "@/views/Browser/Reports/SubTabs/BrowserHealthHistory"
import BrowserHelthScore from "@/views/Browser/Reports/SubTabs/BrowserHealthScore"
import BrowserHealthStatus from "@/views/Browser/Reports/SubTabs/BrowserHealthStatus"
import * as BrowserWorkOrdersSubTabs from "@/views/Browser/WorkOrders/SubTabs"
enum WorkOrdersSubTabsEnum {
  tasks_status = "Tasks status",
  tasks_status_slug = "tasks-status",
  tasks_priorities = "Tasks priorities",
  tasks_priorities_slug = "tasks-priorities",
  tasks_checklist = "Checklist progress",
  tasks_checklist_slug = "checklist-progress",
  tasks_assets_status = "Assets status",
  tasks_assets_status_slug = "assets-status",
  work_orders_management = "Work Orders Management",
  work_orders_management_slug = "work-orders-management",
}

export const workOrdersSubTabs = [
  {
    id: 0,
    title: WorkOrdersSubTabsEnum.tasks_status,
    slug: WorkOrdersSubTabsEnum.tasks_status_slug,
  },
  {
    id: 1,
    title: WorkOrdersSubTabsEnum.tasks_priorities,
    slug: WorkOrdersSubTabsEnum.tasks_priorities_slug,
  },
  {
    id: 2,
    title: WorkOrdersSubTabsEnum.tasks_checklist,
    slug: WorkOrdersSubTabsEnum.tasks_checklist_slug,
  },
  {
    id: 3,
    title: WorkOrdersSubTabsEnum.work_orders_management,
    slug: WorkOrdersSubTabsEnum.work_orders_management_slug,
  },
]

export function getWorkOrderCurrentSubTabContent(slug: string) {
  switch (slug) {
    case WorkOrdersSubTabsEnum.tasks_status_slug:
      return <BrowserWorkOrdersSubTabs.BrowserTasksStatus />
    case WorkOrdersSubTabsEnum.tasks_priorities_slug:
      return <BrowserWorkOrdersSubTabs.BrowserTasksPriorities />
    case WorkOrdersSubTabsEnum.tasks_checklist_slug:
      return <BrowserWorkOrdersSubTabs.BrowserChecklistProgress />
    case WorkOrdersSubTabsEnum.work_orders_management_slug:
      return <BrowserWorkOrdersSubTabs.BrowserWorkOrdersManagement />

    default:
      return null
  }
}
