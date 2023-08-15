import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGlobalContext } from "@/context/global/GlobalContext"

interface Asset {
  healthHistory: { status: string }[]
}

export const HealthStatusChart = () => {
  const context = useGlobalContext()
  const {
    state: { assets },
  } = context!
  const statusCounts: { [status: string]: number } = {}

  assets.forEach((asset) => {
    asset.healthHistory.forEach((history) => {
      const status = history.status
      if (statusCounts[status]) {
        statusCounts[status]++
      } else {
        statusCounts[status] = 1
      }
    })
  })

  const pieData = Object.keys(statusCounts).map((status) => ({
    name: status,
    y: statusCounts[status],
  }))

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Health Status Distribution",
    },
    series: [
      {
        type: "pie",
        name: "Health Status",
        data: pieData,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
