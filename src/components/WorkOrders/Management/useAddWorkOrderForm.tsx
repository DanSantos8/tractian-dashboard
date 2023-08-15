import { useGlobalContext } from "@/context/global/GlobalContext"
import { useWorkOrdersContext } from "@/context/workOrders/workOrdersContext"
import { useGlobalService } from "@/services/useGlobalService"
import { generateRandomNumberID } from "@/utils/helpers"
import { useEffect, useMemo, useState } from "react"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function useAddWorkOrderForm() {
  const context = useGlobalContext()
  const { currentWorkOrder, handleCancel } = useWorkOrdersContext()
  const { handleSubmit, control, setValue, getValues } = useForm()

  const { dispatch } = context!

  const {
    utils: { isLoading },
    callbacks: { createWorkOrder, updateWorkOrder },
  } = useGlobalService()

  const { title, description, assetId, priority, status, ...rest } =
    currentWorkOrder
  const checklistSteps = useMemo(() => ["step-1", "step-2", "step-3"], [])

  const defaultValues = useMemo(() => {
    return {
      title,
      description,
      asset: assetId,
      users: rest.users,
      priority,
      status,
      ...rest,
    }
  }, [assetId, description, priority, rest, status, title])

  const showToastMessage = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const showToastErrorMessage = (message: string) => {
    toast(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const handleAddWorkOrder = useCallback(
    async (data: any) => {
      const payload = {
        assetId: data.asset,
        description: data.description,
        assignedUserIds: data.users,
        checklist: checklistSteps
          .map((item) => ({
            task: data[item],
            completed: data[`${item}-check`],
          }))
          .filter((item) => item.task),
        id: generateRandomNumberID(),
        priority: data.priority,
        status: data.status,
        title: data.title,
      }

      const response = await createWorkOrder(payload)
      dispatch({
        type: "ADD_WORK_ORDER",
        payload,
      })
      showToastMessage(response.message)
    },
    [checklistSteps, createWorkOrder, dispatch]
  )

  const handleUpdateWorkOrder = useCallback(
    async (data: any) => {
      const checklistSteps = ["step-1", "step-2", "step-3"]
      const payload = {
        assetId: data.asset,
        description: data.description,
        assignedUserIds: data.users,
        checklist: checklistSteps
          .map((item) => ({
            task: data[item],
            completed: data[`${item}-check`],
          }))
          .filter((item) => item.task),
        id: currentWorkOrder.id,
        priority: data.priority,
        status: data.status,
        title: data.title,
      }

      const response = await updateWorkOrder(payload)
      dispatch({
        type: "UPDATE_WORK_ORDER",
        payload,
      })

      showToastMessage(response.message)
    },
    [currentWorkOrder.id, dispatch, updateWorkOrder]
  )

  const onSubmit = useCallback(
    async (data: any) => {
      const excludedKeys = ["step-1-check", "step-2-check", "step-3-check"]

      const isEmpty = Object.entries(data).some(([key, value]) => {
        return !excludedKeys.includes(key) && !value
      })

      if (isEmpty) {
        showToastErrorMessage("Please, fill all the fields.")

        return
      }

      const shouldUpdate = !!currentWorkOrder.id

      shouldUpdate ? handleUpdateWorkOrder(data) : handleAddWorkOrder(data)

      handleCancel()
    },

    [
      currentWorkOrder.id,
      handleAddWorkOrder,
      handleCancel,
      handleUpdateWorkOrder,
    ]
  )

  useEffect(() => {
    setValue("title", defaultValues.title)
    setValue("description", defaultValues.description)
    setValue("asset", defaultValues.asset)
    setValue("users", defaultValues.users)
    setValue("priority", defaultValues.priority)
    setValue("status", defaultValues.status)
    ;["step-1", "step-2", "step-3"].forEach((item) => {
      setValue(item, defaultValues[item]?.task || "")
      setValue(`${item}-check`, defaultValues[item]?.completed || false)
    })
  }, [defaultValues, setValue])

  return {
    onSubmit,
    isLoading,
    defaultValues,
    checklistSteps,
    control,
    handleSubmit,
    getValues,
  }
}
