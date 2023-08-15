import { useGlobalContext } from "@/context/global/GlobalContext"

export default function useHealthHistoryChart() {
  const context = useGlobalContext()
  const {
    state: { assets },
  } = context!

  const seriesData = assets.map((asset) => {
    const series = asset.healthHistory.map((history) => {
      const timestamp = new Date(history.timestamp).getTime()
      const statusValue = history.status === "inOperation" ? 1 : 0
      return [timestamp, statusValue]
    })

    return { name: asset.name, data: series }
  })

  const options: Highcharts.Options = {
    chart: {
      type: "line",
      backgroundColor: "#f5f5f5",
      borderRadius: 8,
      height: 500,
    },
    title: {
      text: "Operation Time Line",
      style: {
        color: "#333",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Time Line",
        style: {
          color: "#555",
          fontSize: "16px",
        },
      },
      labels: {
        style: {
          color: "#555",
          fontSize: "14px",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      min: -0.1,
      max: 1.1,
      labels: {
        formatter: function () {
          switch (this.value) {
            case 1:
              return "In Operation"
            case 0:
              return "In Downtime"
            default:
              return ""
          }
        },
        style: {
          color: "#555",
          fontSize: "14px",
        },
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
      },
    },
    series: seriesData as Highcharts.SeriesOptionsType[],
  }
  return { options }
}
