import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useTasksStatusChart from "./useTasksStatusChart"
import { useGlobalContext } from "@/context/global/GlobalContext"
import { Spin } from "antd"

export const TaskStatusChart = () => {
  const { options, workOrders } = useTasksStatusChart()

  if (!workOrders.length) {
    return (
      <div className="flex justify-center">
        <Spin />
      </div>
    )
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
