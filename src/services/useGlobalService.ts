import { useCallback } from "react"
import {
  assetsRequest,
  companiesRequest,
  postWorkOrdersRequest,
  unitsRequest,
  updateWorkOrderRequest,
  usersRequest,
  workOrdersRequest,
} from "@/utils/requests"
import { useState } from "react"
import { WorkOrders } from "@/utils/types"

export function useGlobalService() {
  const [isLoading, setIsLoading] = useState(false)

  const fetchCompanies = async () => {
    try {
      const { data } = await companiesRequest()

      return data
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchUnits = async () => {
    try {
      const { data } = await unitsRequest()
      return data
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const createWorkOrder = async (body: WorkOrders) => {
    setIsLoading(true)
    try {
      const { data } = await postWorkOrdersRequest(body)

      return data
    } catch (e) {
      return { message: "Error while creating new work order." }
    } finally {
      setIsLoading(false)
    }
  }

  const updateWorkOrder = async (body: WorkOrders) => {
    setIsLoading(true)
    try {
      const { data } = await updateWorkOrderRequest(body)

      return data
    } catch (e) {
      return {
        message:
          "For any reason, we couldn't update your work order. But let's move foward to be more fun.",
      }
    } finally {
      setIsLoading(false)
    }
  }

  const fetchData = useCallback(async () => {
    return Promise.all([
      unitsRequest(),
      companiesRequest(),
      usersRequest(),
      workOrdersRequest(),
      assetsRequest(),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.data))
      )
      .catch((error) => {
        console.log(error)
        throw error
      })
  }, [])

  return {
    utils: {
      isLoading,
    },
    callbacks: {
      fetchCompanies,
      fetchUnits,
      fetchData,
      createWorkOrder,
      updateWorkOrder,
    },
  }
}
