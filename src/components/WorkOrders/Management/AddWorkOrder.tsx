import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import useAddWorkOrder from "./useAddWorkOrder"
import { AddWorkOrderForm } from "./AddWorkOrderForm"

export function AddWorkOrder() {
  const { showModal, isModalVisible, handleCancel, handleOk } =
    useAddWorkOrder()

  return (
    <div className="flex w-full mb-3 ">
      <Button
        type="primary"
        className="bg-green text-gray-light flex items-center ml-auto hover:bg-blue"
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        Add New Work Order
      </Button>
      <AddWorkOrderForm
        handleCancel={handleCancel}
        handleOk={handleOk}
        showModal={isModalVisible}
      />
    </div>
  )
}
