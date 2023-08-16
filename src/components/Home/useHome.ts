import { useGlobalContext } from "@/context/global/GlobalContext"

export default function useHome() {
  const context = useGlobalContext()
  const { state } = context!

  const statusCounts: { [key: string]: number } = {
    inOperation: 0,
    inDowntime: 0,
    inAlert: 0,
    unplannedStop: 0,
    plannedStop: 0,
  }

  const statusColors = {
    inOperation: "#1f77b4", // Blue
    inAlert: "#ff7f0e", // Orange
    inDowntime: "#2ca02c", // Green
    unplannedStop: "#d62728", // Red
    plannedStop: "#9467bd", // Purple
  }

  const formattedStatusLabels = {
    inOperation: "In Operation",
    inAlert: "Alert",
    inDowntime: "In Downtime",
    unplannedStop: "Unplanned Stop",
    plannedStop: "Planned Stop",
  }

  state.assets.forEach((asset) => {
    statusCounts[asset.status]++
  })

  const assetsInAlert = state.assets.filter(
    (asset) => asset.status === "inAlert"
  )

  const options = {
    chart: {
      type: "column",
      spacing: [30, 20, 30, 20],
      style: {
        fontFamily: "Arial, sans-serif",
      },
    },
    title: {
      text: "Asset Status Distribution",
      style: {
        color: "#333",
        fontWeight: "bold",
        fontSize: "18px",
      },
    },
    xAxis: {
      categories: Object.keys(statusCounts).map(
        (status) =>
          formattedStatusLabels[status as keyof typeof formattedStatusLabels]
      ),
      labels: {
        style: {
          color: "#555",
        },
      },
      gridLineWidth: 0,
    },
    yAxis: {
      title: {
        text: "",
        style: {
          color: "#555",
        },
      },
      labels: {
        style: {
          color: "#555",
        },
      },
      gridLineWidth: 0,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        colors: Object.keys(statusCounts).map(
          (status) => statusColors[status as keyof typeof statusColors]
        ),
        borderRadius: 5,
        pointWidth: 50,
      },
    },
    series: [
      {
        name: "Assets",
        data: Object.values(statusCounts),
      },
    ],
  }

  return {
    assets: state.assets,
    formattedStatusLabels,
    assetsInAlert,
    options,
  }
}
