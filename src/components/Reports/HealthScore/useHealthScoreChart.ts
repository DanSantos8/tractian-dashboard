import { useGlobalContext } from "@/context/global/GlobalContext"

export default function useHealthScoreChart() {
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
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: categories,
      title: {
        text: "Assets",
        style: {
          color: "#555",
          fontSize: "10px",
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
          fontSize: "12px",
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
        color: "#3498DB",
        dataLabels: {
          enabled: true,
          format: "{y}",
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

  return {
    options,
  }
}
