import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { assets } from "@/mock/datas"

interface Asset {
  name: string
  healthscore: number
}

export const HealthscoreBarChart: React.FC = () => {
  const data: Asset[] = assets

  const categories = data.map((asset) => asset.name)
  const healthscores = data.map((asset) => asset.healthscore)

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
