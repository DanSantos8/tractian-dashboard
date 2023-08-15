import { WorkOrders } from "@/utils/types"
import React, { createContext, useContext, useState } from "react"

interface ChecklistSteps {
  [key: string]: {
    task: string
    completed: boolean
  }
}

interface WorkOrdersContextProps {
  showModal: () => void
  handleOk: () => void
  handleCancel: () => void
  handleCurrentWorkOrder: (workOrder: WorkOrders) => void
  handleResetCurrentWorkOrder: () => void
  isModalVisible: boolean
  currentWorkOrder: any
}

const WorkOrdersContext = createContext<WorkOrdersContextProps>(undefined!)

export const WorkOrdersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentWorkOrder, setCurrentWorkOrder] = useState({})

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCurrentWorkOrder = (workOrder: WorkOrders) => {
    const getChecklistSteps = () => {
      const checklistSteps: ChecklistSteps = {}

      workOrder.checklist.forEach((item, index) => {
        const stepKey = `step-${index + 1}`
        checklistSteps[stepKey] = {
          task: item.task,
          completed: item.completed,
        }
      })

      return checklistSteps
    }

    const current = {
      id: workOrder.id,
      title: workOrder.title,
      description: workOrder.description,
      assetId: workOrder.assetId,
      users: workOrder.assignedUserIds,
      priority: workOrder.priority,
      status: workOrder.status,
      ...getChecklistSteps(),
    }

    setCurrentWorkOrder(current)
  }

  const handleResetCurrentWorkOrder = () => setCurrentWorkOrder({})

  const handleCancel = () => {
    setIsModalVisible(false)
    handleResetCurrentWorkOrder()
  }

  return (
    <WorkOrdersContext.Provider
      value={{
        showModal,
        handleOk,
        handleCancel,
        isModalVisible,
        currentWorkOrder,
        handleCurrentWorkOrder,
        handleResetCurrentWorkOrder,
      }}
    >
      {children}
    </WorkOrdersContext.Provider>
  )
}

export const useWorkOrdersContext = () => useContext(WorkOrdersContext)
