import { useGlobalContext } from "@/context/global/GlobalContext"
import { transformWorkOrders } from "@/utils/transform/dataSourceTransform"
import { usersIdToUsersNameTransform } from "@/utils/transform/globalTransform"

export default function useWorkOrdersList() {
  const context = useGlobalContext()
  const { state } = context!

  const getCompletedLabel = (completed: boolean) => {
    return completed ? (
      <span className="text-green">completed</span>
    ) : (
      <span className="text-red">pending</span>
    )
  }

  const mapUsersIdToUsersName = (usersId: number[]) =>
    usersIdToUsersNameTransform(usersId, state.users)

  return {
    workOrders: transformWorkOrders(state.workOrders),
    getCompletedLabel,
    mapUsersIdToUsersName,
  }
}
