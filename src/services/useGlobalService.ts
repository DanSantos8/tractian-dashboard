import { useCallback } from "react"
import {
  assetsRequest,
  companiesRequest,
  unitsRequest,
  usersRequest,
  workOrdersRequest,
} from "@/utils/requests"
import { useState } from "react"
import { Company, Unit } from "@/utils/types"

export function useGlobalService() {
  const [isLoading, setIsLoading] = useState(true)

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
    },
  }
}
