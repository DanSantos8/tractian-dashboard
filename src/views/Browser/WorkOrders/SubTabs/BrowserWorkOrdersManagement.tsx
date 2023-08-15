import * as WorkOrders from "@/components/WorkOrders/Management"

export function BrowserWorkOrdersManagement() {
  return (
    <div className="flex flex-col flex-1 max-w-5xl mx-auto">
      <WorkOrders.AddWorkOrder />
      <WorkOrders.WorkOrdersList />
    </div>
  )
}
