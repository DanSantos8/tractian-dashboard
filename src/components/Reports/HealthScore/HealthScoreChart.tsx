import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useHealthScoreChart from "./useHealthScoreChart"

export function HealthscoreBarChart() {
  const { options } = useHealthScoreChart()

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
