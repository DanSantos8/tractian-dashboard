import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useGlobalContext } from "@/context/global/GlobalContext"

interface WorkOrder {
  priority: string
}

const getPriorityCounts = (data: WorkOrder[]) => {
  const priorityCounts: Record<string, number> = {}

  data.forEach((order) => {
    if (order.priority in priorityCounts) {
      priorityCounts[order.priority]++
    } else {
      priorityCounts[order.priority] = 1
    }
  })

  return priorityCounts
}

export const TasksPrioritiesChart = () => {
  const context = useGlobalContext()
  const {
    state: { workOrders },
  } = context!

  const priorityCounts = getPriorityCounts(workOrders)

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      height: 500,
      backgroundColor: "transparent",
      borderRadius: 10,
      spacing: [0, 0, 0, 0],
    },
    title: {
      text: "Task Priorities Overview",
      align: "center",
      style: {
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "32px",
        color: "#2c3e50",
      },
    },
    series: [
      {
        type: "pie",
        name: "Priority Distribution",
        data: Object.entries(priorityCounts).map(([priority, count]) => ({
          name: priority,
          y: count,
        })),
        borderWidth: 5,
        borderColor: "white",
      },
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        colors: ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"],
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f}%",
          distance: -20,
          style: {
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            color: "#34495e",
          },
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontFamily: "Arial, sans-serif",
        fontSize: "20px",
        color: "#7f8c8d",
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            title: {
              style: {
                fontSize: "20px",
              },
            },
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
              itemStyle: {
                fontSize: "12px",
              },
            },
            series: [
              {
                type: "pie",
                dataLabels: {
                  style: {
                    fontSize: "10px",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
