import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGlobalContext } from "@/context/global/GlobalContext"

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

export const TasksPrioritiesChart = () => {
  const context = useGlobalContext()
  const {
    state: { workOrders },
  } = context!

  const priorityCounts = getPriorityCounts(workOrders)

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      height: 500,
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
