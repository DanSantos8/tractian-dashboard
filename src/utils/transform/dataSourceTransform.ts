import { Company, Unit, User, WorkOrders } from "../types"

export function transformWorkOrders(workOrders: WorkOrders[]) {
  return workOrders.map((workOrder) => ({
    id: workOrder.id,
    assetId: workOrder.assetId,
    title: workOrder.title,
    description: workOrder.description,
    priority: workOrder.priority,
    checklist: workOrder.checklist,
    status: workOrder.status,
    assignedUserIds: workOrder.assignedUserIds,
  }))
}

export function transformUsers(
  users: User[],
  companies: Company[],
  units: Unit[]
) {
  const getUnitName = (unitId: number) => {
    return units.find((unit) => unit.id === unitId)?.name
  }

  const getCompanyName = (companyId: number) => {
    return companies.find((unit) => unit.id === companyId)?.name
  }

  return users.map((user) => ({
    id: user.id,
    email: user.email,
    company: getCompanyName(user.companyId),
    unit: getUnitName(user.unitId),
  }))
}
