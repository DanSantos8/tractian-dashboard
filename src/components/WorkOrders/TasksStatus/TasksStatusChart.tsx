import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useTasksStatusChart from "./useTasksStatusChart"
import { useGlobalContext } from "@/context/global/GlobalContext"

export const TaskStatusChart = () => {
  const context = useGlobalContext()
  const {
    state: { workOrders },
  } = context!
  const { getStatusCounts } = useTasksStatusChart()
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

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
