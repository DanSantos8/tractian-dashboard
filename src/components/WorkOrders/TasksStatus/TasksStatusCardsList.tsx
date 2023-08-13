import { workorders } from "@/mock/datas"
import { Card } from "antd"
import { TColors, useCardsList } from "./useCardsList"

export function TasksStatusCardsList() {
  const { getPendingTasks, colors } = useCardsList()

  return (
    <div className="flex  gap-3 mb-3">
      {workorders.map((workorder) => (
        <Card key={workorder.id} className="flex-1">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">{workorder.title}</h4>
            <div className="flex flex-1 flex-col">
              <span className="block h-11">{workorder.description}</span>
              <span className="font-semibold">
                Pending tasks: {getPendingTasks(workorder.checklist)}
              </span>
              <span className="font-semibold">
                Status:{" "}
                <b
                  className={`font-semibold ${
                    colors[
                      workorder.status.split(" ").join("_") as keyof TColors
                    ]
                  }`}
                >
                  {workorder.status}
                </b>
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
