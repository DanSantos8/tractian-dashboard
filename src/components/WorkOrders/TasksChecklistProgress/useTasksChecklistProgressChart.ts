import { useGlobalContext } from "@/context/global/GlobalContext"
import { useMemo } from "react"

interface Checklist {
  completed: boolean
}
export default function useTasksChecklistProgressChart() {
  const context = useGlobalContext()
  const {
    state: { workOrders },
  } = context!
  const seriesData = useMemo(() => {
    const getTasksProgress = (checklist: Checklist[]) => {
      const completed = checklist.filter((item) => item.completed).length

      return [completed, checklist.length - completed]
    }

    return workOrders.map((workorder) => {
      return {
        name: workorder.title,
        data: getTasksProgress(workorder.checklist),
      }
    })
  }, [workOrders])

  return {
    seriesData,
  }
}
