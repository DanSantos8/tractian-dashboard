import { workorders } from "@/mock/datas"
import { useMemo } from "react"

interface Checklist {
  completed: boolean
}
export default function useTasksChecklistProgressChart() {
  const seriesData = useMemo(() => {
    const getTasksProgress = (checklist: Checklist[]) => {
      const completed = checklist.filter((item) => item.completed).length

      return [completed, checklist.length - completed]
    }

    return workorders.map((workorder) => {
      return {
        name: workorder.title,
        data: getTasksProgress(workorder.checklist),
      }
    })
  }, [])

  return {
    seriesData,
  }
}
