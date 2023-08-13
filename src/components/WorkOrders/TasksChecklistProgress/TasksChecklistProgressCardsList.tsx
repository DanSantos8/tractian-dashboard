import { Card } from "antd"
import { workorders } from "@/mock/datas"

export function TasksChecklistProgressCardsList() {
  return (
    <div className="flex gap-3">
      {workorders.map((workorder) => {
        return (
          <Card key={workorder.id} className="flex-1">
            <h4 className="font-semibold mb-3">{workorder.title}</h4>

            <ul>
              {workorder.checklist.map(({ task, completed }, i) => {
                return (
                  <li key={i}>
                    {task} -{" "}
                    <b
                      className={`font-semibold ${
                        completed ? "text-green" : "text-red"
                      }`}
                    >
                      {completed ? "completed" : "not completed"}
                    </b>
                  </li>
                )
              })}
            </ul>
          </Card>
        )
      })}
    </div>
  )
}
