import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import useTasksChecklistProgressChart from "./useTasksChecklistProgressChart"

export const TasksChecklistProgressChart = () => {
  const { seriesData } = useTasksChecklistProgressChart()

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "#f5f5f5",
      borderRadius: 8,
      height: 500,
    },
    title: {
      text: "Tasks Checklist",
      style: {
        color: "#333",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: ["Concluído", "Não Concluído"],
      labels: {
        style: {
          color: "#555",
          fontSize: "14px",
        },
      },
      title: {
        text: "",
        style: {
          color: "#555",
          fontSize: "16px",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
        style: {
          color: "#555",
          fontSize: "16px",
        },
      },
      tickInterval: 1,
      labels: {
        style: {
          color: "#555",
          fontSize: "14px",
        },
      },
    },
    series: seriesData.map((serie) => ({
      type: "column",
      name: serie.name,
      data: serie.data,
      dataLabels: {
        enabled: true,
        format: "{y}",
        style: {
          color: "#444",
          fontSize: "14px",
        },
      },
    })),
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        color: "#555",
        fontSize: "14px",
      },
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
