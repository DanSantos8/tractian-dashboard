import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGlobalContext } from "@/context/global/GlobalContext"

interface Asset {
  name: string
  healthscore: number
}

export const HealthscoreBarChart = () => {
  const context = useGlobalContext()
  const {
    state: { assets },
  } = context!

  const categories = assets.map((asset) => asset.name)
  const healthscores = assets.map((asset) => asset.healthscore)

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      backgroundColor: "#f5f5f5",
      borderRadius: 8,
      height: 500,
    },
    title: {
      text: "Assets Healthscore",
      style: {
        color: "#333",
        fontSize: "20px", // Slightly larger title font size
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: categories,
      title: {
        text: "Assets",
        style: {
          color: "#555",
          fontSize: "10px", // Slightly larger X-axis title font size
        },
      },
      labels: {
        style: {
          color: "#555",
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      title: {
        text: "Healthscore",
        style: {
          color: "#555",
          fontSize: "12px", // Slightly larger Y-axis title font size
        },
      },
      labels: {
        style: {
          color: "#555",
          fontSize: "10px",
        },
      },
    },
    series: [
      {
        type: "column",
        name: "Healthscore",
        data: healthscores,
        color: "#3498DB", // Single color for all columns
        dataLabels: {
          enabled: true,
          format: "{y}", // Show the exact value on top of each column
          style: {
            color: "#444",
            fontSize: "12px",
          },
        },
      },
    ],
    credits: {
      enabled: false,
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
