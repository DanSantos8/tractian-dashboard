import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useHealthScoreChart from "./useHealthScoreChart"
import { Spin } from "antd"

export function HealthscoreBarChart() {
  const { options, assets } = useHealthScoreChart()

  if (!assets.length) {
    return (
      <div className="flex justify-center">
        <Spin />
      </div>
    )
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
