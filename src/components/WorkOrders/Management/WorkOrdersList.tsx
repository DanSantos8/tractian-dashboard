import { Card } from "antd"
import useWorkOrdersList from "./useWorkOrdersList"

enum PriorityEnum {
  high = "high",
  low = "low",
}

enum StatusColorsEnum {
  in_progress = "text-blue",
  completed = "text-green",
}

export function WorkOrdersList() {
  const {
    workOrders,
    getCompletedLabel,
    mapUsersIdToUsersName,
    handleUpdateWorkOrder,
  } = useWorkOrdersList()

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3  ">
      {workOrders.map((workOrder) => {
        const status = workOrder.status.split(" ").join("_")
        const assignedUsersNames = mapUsersIdToUsersName(
          workOrder.assignedUserIds
        )
        return (
          <Card
            title={workOrder.title}
            key={workOrder.id}
            size="small"
            className="flex-1 min-w-min cursor-pointer"
            onClick={() => handleUpdateWorkOrder(workOrder)}
          >
            <span>{workOrder.description}</span>

            <div className="flex flex-col mt-auto">
              <div className="flex flex-col mt-3">
                <span>
                  Priority:{" "}
                  <b
                    className={`font-semibold ${
                      workOrder.priority === PriorityEnum.high
                        ? "text-red"
                        : "text-blue"
                    }`}
                  >
                    {workOrder.priority.toUpperCase()}
                  </b>
                </span>

                <span>
                  Status:{" "}
                  <b
                    className={`font-semibold ${
                      StatusColorsEnum[status as keyof typeof StatusColorsEnum]
                    }`}
                  >
                    {workOrder.status}
                  </b>
                </span>
              </div>

              <div className="flex flex-col mt-3">
                <span className="font-semibold">Checklist: </span>
                <ul className="flex flex-col gap-2">
                  {workOrder.checklist.map((item) => {
                    return (
                      <li
                        className="flex gap-2 justify-between text-xs items-center"
                        key={item.task}
                      >
                        <span>{item.task}</span>
                        <span className=" text-right">
                          {getCompletedLabel(item.completed)}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="flex flex-col mt-3">
                <span className="font-semibold">Assigned Users: </span>
                <ul className="flex flex-col">
                  {assignedUsersNames.map((user) => (
                    <li key={user.value}>{user.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
