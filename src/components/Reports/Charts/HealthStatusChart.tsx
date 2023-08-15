import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGlobalContext } from "@/context/global/GlobalContext"

enum StatusEnum {
  inAlert = "In Alert",
  unplannedStop = "Unplanned Stop",
  plannedStop = "Planned Stop",
  inDowntime = "In Downtime",
  inOperation = "In Operation",
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
    name: StatusEnum[status as keyof typeof StatusEnum],
    y: statusCounts[status],
  }))

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "white",
      style: {
        fontFamily: "Montserrat, sans-serif",
      },
      spacing: [10, 10, 10, 10], // Adjust spacing for responsiveness
    },
    title: {
      text: "Health Status Distribution",
      style: {
        color: "#333",
        fontSize: "28px",
        fontWeight: "bold",
      },
    },
    legend: {
      enabled: true,
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        color: "#555",
        fontWeight: "normal",
      },
      itemHoverStyle: {
        color: "#111",
      },
    },
    series: [
      {
        type: "pie",
        name: "Health Status",
        data: pieData,
        colors: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"],
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f}%",
          style: {
            color: "#444",
            textOutline: "none",
            fontSize: "14px", // Default font size
          },
        },
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768, // Adjust the maximum width as needed
          },
          chartOptions: {
            title: {
              style: {
                fontSize: "20px", // Adjust title font size for responsiveness
              },
            },
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
              itemStyle: {
                fontSize: "12px", // Adjust legend item font size for responsiveness
              },
            },
            series: [
              {
                type: "pie",
                dataLabels: {
                  style: {
                    fontSize: "10px", // Adjust data label font size for responsiveness
                  },
                },
              },
            ],
          },
        },
      ],
    },
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[420px]">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}
