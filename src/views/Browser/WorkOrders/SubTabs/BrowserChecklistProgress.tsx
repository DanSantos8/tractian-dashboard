import * as TasksChecklistProgress from "@/components/WorkOrders/TasksChecklistProgress"

export function BrowserChecklistProgress() {
  return (
    <>
      <TasksChecklistProgress.TasksChecklistProgressCardsList />
      <div className="mt-auto h-full">
        <TasksChecklistProgress.TasksChecklistProgressChart />
      </div>
    </>
  )
}
