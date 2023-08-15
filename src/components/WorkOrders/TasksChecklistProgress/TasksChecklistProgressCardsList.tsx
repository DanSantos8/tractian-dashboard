import { useGlobalContext } from "@/context/global/GlobalContext"
import { Card } from "antd"

export function TasksChecklistProgressCardsList() {
  const context = useGlobalContext()
  const {
    state: { workOrders },
  } = context!
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {workOrders.map((workorder) => {
        return (
          <Card key={workorder.id}>
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
