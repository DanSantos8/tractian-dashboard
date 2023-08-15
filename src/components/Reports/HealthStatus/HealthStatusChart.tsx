import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useHealthStatusChart from "./useHealthStatusChart"

export const HealthStatusChart = () => {
  const { options } = useHealthStatusChart()

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[500px]">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}
