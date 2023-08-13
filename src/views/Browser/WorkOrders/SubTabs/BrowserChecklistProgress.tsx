import * as TasksChecklistProgress from "@/components/WorkOrders/TasksChecklistProgress"

export default function BrowserTasksPriorities() {
  return (
    <>
      <TasksChecklistProgress.TasksChecklistProgressCardsList />
      <div className="mt-auto">
        <TasksChecklistProgress.TasksChecklistProgressChart />
      </div>
    </>
  )
}
