interface Checklist {
  completed: boolean
}

export type TColors = {
  in_progress: string
  completed: string
  pending: string
}

export function useCardsList() {
  const colors: TColors = {
    in_progress: "text-blue",
    completed: "text-green",
    pending: "text-red",
  }
  const getPendingTasks = (checklist: Checklist[]) => {
    return checklist.filter((task) => !task.completed).length
  }

  return {
    getPendingTasks,
    colors,
  }
}
