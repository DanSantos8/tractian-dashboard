import React, { useContext } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { assets } from "@/mock/datas"
import { useReportsContext } from "@/context/reports/ReportsContext"
import useHealthHistoryChart from "./useHealthHistoryChart"

interface Asset {
  healthHistory: { status: string; timestamp: string }[]
  name: string
}

export const HealthHistoryChart = () => {
  const data: Asset[] = assets
  const { teste } = useHealthHistoryChart()

  const seriesData = data.map((asset) => {
    const series = asset.healthHistory.map((history) => {
      const timestamp = new Date(history.timestamp).getTime()
      const statusValue = history.status === "inOperation" ? 1 : 0
      return [timestamp, statusValue]
    })

    return { name: asset.name, data: series }
  })

  const options: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Operation History during the Time",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Time line",
      },
    },
    yAxis: {
      title: {
        text: "Operation status",
      },
      min: 0,
      max: 1,
      labels: {
        formatter: function () {
          switch (this.value) {
            case 1:
              return "In operation"
            case 0:
              return "In downtime"
            default:
              return ""
          }
        },
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
      },
    },
    series: seriesData as Highcharts.SeriesOptionsType[],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
