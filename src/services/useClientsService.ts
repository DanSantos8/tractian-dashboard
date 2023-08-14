import { useCallback } from "react"
import { Company, Unit } from "@/context/clients/ClientsContext"
import { companiesRequest, unitsRequest } from "@/utils/requests"
import { useState } from "react"

export function useClientsService() {
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

  const fetchClients = useCallback((): Promise<(Company[] | Unit[])[]> => {
    return Promise.all([unitsRequest(), companiesRequest()])
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
      fetchClients,
    },
  }
}
