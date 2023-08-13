import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { workorders } from "@/mock/datas"
import { useChartsContext } from "@/context/charts/ChartsContext"
import useTasksStatusChart from "./useTasksStatusChart"

export const TaskStatusChart = () => {
  const { styles } = useChartsContext()
  const { getStatusCounts } = useTasksStatusChart()
  const statusCounts = getStatusCounts(workorders)

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      ...styles.chart,
    },
    title: {
      text: "Status das Tarefas",
    },
    xAxis: {
      categories: ["Pendente", "Em Progresso", "Concluído"],
      ...styles.gridLines,
      labels: {
        ...styles.labels,
      },
    },
    yAxis: {
      ...styles.gridLines,
      title: {
        text: "Número de Tarefas",
        margin: 24,
      },
      tickInterval: 1,
      labels: {
        ...styles.labels,
      },
    },
    series: [
      {
        type: "bar",
        name: "Tarefas",
        colorByPoint: true,
        showInLegend: false,
        data: [
          { y: statusCounts.pending, color: "#FF0000" },
          { y: statusCounts.inProgress, color: "#007AFF" },
          { y: statusCounts.completed, color: "#07BC0C" },
        ],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
