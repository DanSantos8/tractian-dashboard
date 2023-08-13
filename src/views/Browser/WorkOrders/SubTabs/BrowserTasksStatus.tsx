import * as WorkOrders from "@/components/WorkOrders"

export default function BrowserTasksStatus() {
  return (
    <>
      <WorkOrders.TasksStatusCardsList />
      <div className="mt-auto">
        <WorkOrders.TaskStatusChart />
      </div>
    </>
  )
}
