interface WorkOrder {
  status: string
}
export default function useTasksStatusChart() {
  const getStatusCounts = (data: WorkOrder[]) => {
    const statusCounts = {
      pending: 0,
      inProgress: 0,
      completed: 0,
    }

    data.forEach((order) => {
      switch (order.status) {
        case "pending":
          statusCounts.pending++
          break
        case "in progress":
          statusCounts.inProgress++
          break
        case "completed":
          statusCounts.completed++
          break
        default:
          break
      }
    })

    return statusCounts
  }

  return {
    getStatusCounts,
  }
}
