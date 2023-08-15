import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useReportsContext } from "@/context/reports/ReportsContext"
import useHealthHistoryChart from "./useHealthHistoryChart"
import { useGlobalContext } from "@/context/global/GlobalContext"

interface Asset {
  name: string
  healthscore: number
}

export const HealthscoreBarChart = () => {
  const context = useGlobalContext()
  const {
    state: { assets },
  } = context!

  const categories = assets.map((asset) => asset.name)
  const healthscores = assets.map((asset) => asset.healthscore)

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Assets Healthscore",
    },
    xAxis: {
      categories: categories,
      title: {
        text: "Assets",
      },
    },
    yAxis: {
      title: {
        text: "Healthscore",
      },
    },
    series: [
      {
        type: "column",
        name: "Healthscore",
        data: healthscores,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
