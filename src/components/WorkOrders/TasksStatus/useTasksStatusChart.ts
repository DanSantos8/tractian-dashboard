import { useGlobalContext } from "@/context/global/GlobalContext"

interface WorkOrder {
  status: string
}
export default function useTasksStatusChart() {
  const context = useGlobalContext()
  const {
    state: { workOrders },
  } = context!
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

  const statusCounts = getStatusCounts(workOrders)

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      backgroundColor: "#f5f5f5",
      borderRadius: 8,
      height: 500,
      spacing: [30, 10, 30, 10], // Reduce spacing around the chart
    },
    title: {
      text: "Work Order Progress",
      style: {
        color: "#333",
        fontSize: "24px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: ["Pending", "In Progress", "Completed"],
      labels: {
        style: {
          color: "#555",
          fontSize: "14px",
        },
      },
      title: {
        text: "",
        style: {
          color: "#555",
          fontSize: "16px",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      tickInterval: 1,
      labels: {
        style: {
          color: "#555",
          fontSize: "14px",
        },
      },
    },
    series: [
      {
        type: "bar",
        name: "Work Orders",
        colorByPoint: true,
        showInLegend: false,
        data: [
          { y: statusCounts.pending, color: "#FF0000" },
          { y: statusCounts.inProgress, color: "#007AFF" },
          { y: statusCounts.completed, color: "#07BC0C" },
        ],
        dataLabels: {
          enabled: true,
          format: "{y}",
          style: {
            color: "#444",
            fontSize: "14px",
          },
        },
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
  }

  return {
    workOrders,
    options,
  }
}
