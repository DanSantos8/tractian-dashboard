import { useGlobalContext } from "@/context/global/GlobalContext"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { Card } from "antd"
import useHome from "./useHome"

export default function Home() {
  const { assetsInAlert, formattedStatusLabels, options } = useHome()

  return (
    <div className="flex flex-col gap-3">
      {assetsInAlert.length && (
        <h2 className="text-2xl text-gray-800 font-semibold">
          There are some assets that need your attention...
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {assetsInAlert.map((asset) => (
          <Card
            key={asset.id}
            size="small"
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{asset.name}</h3>
              <p className="text-gray-600">
                <b className="text-sm">Status:</b>{" "}
                <b className="text-red">
                  {
                    formattedStatusLabels[
                      asset.status as keyof typeof formattedStatusLabels
                    ]
                  }
                </b>
              </p>
              <p className="text-gray-600">
                <b className="text-sm">Health Score:</b> {asset.healthscore}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
