import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useChartsContext } from "@/context/charts/ChartsContext"
import useTasksChecklistProgressChart from "./useTasksChecklistProgressChart"
import { useGlobalContext } from "@/context/global/GlobalContext"

export const TasksChecklistProgressChart = () => {
  const { styles } = useChartsContext()
  const { seriesData } = useTasksChecklistProgressChart()

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      ...styles.chart,
    },
    title: {
      text: "Checklist progress",
    },
    xAxis: {
      labels: {
        ...styles.labels,
      },
      categories: ["Concluído", "Não Concluído"],
      ...styles.gridLines,
    },
    yAxis: {
      labels: {
        ...styles.labels,
      },
      title: {
        text: "Items quantity",
      },
      ...styles.gridLines,
      tickInterval: 1,
    },
    series: seriesData.map((serie) => ({
      type: "column",
      name: serie.name,
      data: serie.data,
    })),
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
