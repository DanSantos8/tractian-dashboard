import { WorkOrders } from "../types"

export function transformWorkOrders(workOrders: WorkOrders[]) {
  return workOrders.map((workOrder) => ({
    id: workOrder.id,
    title: workOrder.title,
    description: workOrder.description,
    priority: workOrder.priority,
    checklist: workOrder.checklist,
    status: workOrder.status,
    assignedUsers: workOrder.assignedUserIds,
  }))
}
