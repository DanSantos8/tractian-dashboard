import * as WorkOrders from "@/components/WorkOrders/Management"
import { WorkOrdersProvider } from "@/context/workOrders/workOrdersContext"
export function BrowserWorkOrdersManagement() {
  return (
    <WorkOrdersProvider>
      <div className="flex flex-col flex-1 max-w-5xl mx-auto">
        <WorkOrders.AddWorkOrder />
        <WorkOrders.WorkOrdersList />
      </div>
    </WorkOrdersProvider>
  )
}
