import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { AddWorkOrderForm } from "./AddWorkOrderForm"
import { useWorkOrdersContext } from "@/context/workOrders/workOrdersContext"

export function AddWorkOrder() {
  const { showModal, handleResetCurrentWorkOrder, currentWorkOrder } =
    useWorkOrdersContext()

  return (
    <div className="flex w-full mb-3 ">
      <Button
        type="primary"
        className="bg-green text-gray-light flex items-center ml-auto hover:bg-blue"
        icon={<PlusOutlined />}
        onClick={() => {
          showModal()
        }}
      >
        Add New Work Order
      </Button>
      <AddWorkOrderForm />
    </div>
  )
}
