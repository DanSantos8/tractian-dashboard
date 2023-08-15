import React, { useContext } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useChartsContext } from "@/context/charts/ChartsContext"
import { useGlobalContext } from "@/context/global/GlobalContext"

interface Asset {
  healthHistory: { status: string; timestamp: string }[]
  name: string
}

export const HealthHistoryChart = () => {
  const context = useGlobalContext()
  const {
    state: { assets },
  } = context!
  const { styles } = useChartsContext()

  const seriesData = assets.map((asset) => {
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
      ...styles.chart,
    },
    title: {
      text: "Operation History during the Time",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Time line",
      },
      labels: {
        ...styles.labels,
      },
      ...styles.gridLines,
    },
    yAxis: {
      ...styles.gridLines,
      title: {
        text: "Operation status",
      },
      min: 0,
      max: 1,
      labels: {
        ...styles.labels,
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
