import React, { useContext } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useHealthHistoryChart from "./useHealthHistory"

export const HealthHistoryChart = () => {
  const { options } = useHealthHistoryChart()

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[768px]">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}
