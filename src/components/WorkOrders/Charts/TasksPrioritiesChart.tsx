import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { workorders } from "@/mock/datas"
import { useChartsContext } from "@/context/charts/ChartsContext"

interface WorkOrder {
  priority: string
}

const getPriorityCounts = (data: WorkOrder[]) => {
  const priorityCounts: Record<string, number> = {}

  data.forEach((order) => {
    if (order.priority in priorityCounts) {
      priorityCounts[order.priority]++
    } else {
      priorityCounts[order.priority] = 1
    }
  })

  return priorityCounts
}

export const TasksPrioritiesChart: React.FC = () => {
  const { styles } = useChartsContext()

  const priorityCounts = getPriorityCounts(workorders)

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      ...styles.chart,
    },
    title: {
      text: "Prioridades das Tarefas",
    },
    series: [
      {
        type: "pie",
        name: "Prioridades",
        data: Object.entries(priorityCounts).map(([priority, count]) => ({
          name: priority,
          y: count,
        })),
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
