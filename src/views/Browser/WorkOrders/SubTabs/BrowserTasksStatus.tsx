import * as WorkOrders from "@/components/WorkOrders"

export function BrowserTasksStatus() {
  return (
    <>
      <WorkOrders.TasksStatusCardsList />
      <div className="mt-auto h-full">
        <WorkOrders.TaskStatusChart />
      </div>
    </>
  )
}
