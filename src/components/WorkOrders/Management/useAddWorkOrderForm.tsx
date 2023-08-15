import { useGlobalContext } from "@/context/global/GlobalContext"
import { useGlobalService } from "@/services/useGlobalService"
import { generateRandomNumberID } from "@/utils/helpers"
import { useState } from "react"
import { useCallback } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function useAddWorkOrderForm({
  handleCancel,
}: {
  handleCancel: () => void
}) {
  const context = useGlobalContext()

  const { dispatch } = context!
  const [checklistItems, setChecklistItems] = useState([
    { task: "", completed: false },
  ])

  const {
    utils: { isLoading },
    callbacks: { createWorkOrder },
  } = useGlobalService()

  const showToastMessage = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const onSubmit = useCallback(
    async (data: any) => {
      const checklistSteps = ["step-1", "step-2", "step-3"]

      const payload = {
        assetId: data.asset,
        description: data.description,
        assignedUserIds: data.users,
        checklist: checklistSteps
          .map((item) => ({
            task: data[item],
            completed: false,
          }))
          .filter((item) => item.task),
        id: generateRandomNumberID(),
        priority: data.priority,
        status: data.status,
        title: data.title,
      }

      const response = await createWorkOrder(payload)

      showToastMessage(response.message)
      dispatch({ type: "ADD_WORK_ORDER", payload })
      handleCancel()
    },

    [createWorkOrder, dispatch, handleCancel]
  )

  const renderErrorMessage = (error: any) => (
    <span style={{ color: "red", fontSize: "12px" }}>{error.message}</span>
  )
  return {
    renderErrorMessage,
    onSubmit,
    setChecklistItems,
    checklistItems,
    isLoading,
  }
}
