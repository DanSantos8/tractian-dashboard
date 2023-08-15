import { useGlobalContext } from "@/context/global/GlobalContext"
import { useWorkOrdersContext } from "@/context/workOrders/workOrdersContext"
import { transformWorkOrders } from "@/utils/transform/dataSourceTransform"
import { usersIdToUsersNameTransform } from "@/utils/transform/globalTransform"
import { WorkOrders } from "@/utils/types"

export default function useWorkOrdersList() {
  const { showModal, handleCurrentWorkOrder } = useWorkOrdersContext()
  const context = useGlobalContext()
  const { state } = context!

  const getCompletedLabel = (completed: boolean) => {
    return completed ? (
      <span className="text-green">completed</span>
    ) : (
      <span className="text-red">pending</span>
    )
  }

  const handleUpdateWorkOrder = (workOrder: WorkOrders) => {
    handleCurrentWorkOrder(workOrder)
    showModal()
  }

  const mapUsersIdToUsersName = (usersId: number[]) =>
    usersIdToUsersNameTransform(usersId, state.users)

  return {
    workOrders: transformWorkOrders(state.workOrders),
    getCompletedLabel,
    mapUsersIdToUsersName,
    showModal,
    handleUpdateWorkOrder,
  }
}
