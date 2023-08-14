import { useClientsService } from "@/services/useClientsService"
import { createContext, useContext, useReducer, useEffect } from "react"

export interface Company {
  id: number
  name: string
}

export interface Unit {
  companyId: number
  id: number
  name: string
}

interface ClientsState {
  companies: Company[]
  units: Unit[]
}

type Action =
  | { type: "ADD_COMPANY"; payload: Company | Company[] }
  | { type: "ADD_UNIT"; payload: Unit | Unit[] }

const ClientsContext = createContext<{
  state: ClientsState
  dispatch: React.Dispatch<Action>
} | null>(null)

const clientsReducer = (state: ClientsState, action: Action): ClientsState => {
  switch (action.type) {
    case "ADD_COMPANY": {
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          companies: [...state.companies, ...action.payload],
        }
      }

      return {
        ...state,
        companies: [...state.companies, action.payload],
      }
    }
    case "ADD_UNIT": {
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          units: [...state.units, ...action.payload],
        }
      }
      return {
        ...state,
        units: [...state.units, action.payload],
      }
    }

    default:
      return state
  }
}

const INITIAL_CLIENTS_VALUES: ClientsState = {
  companies: [],
  units: [],
}

export const ClientsContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [state, dispatch] = useReducer(clientsReducer, INITIAL_CLIENTS_VALUES)
  const { callbacks } = useClientsService()

  const { fetchClients } = callbacks

  useEffect(() => {
    const initialFetch = async () => {
      const response = await fetchClients()

      if (!response.length) {
        return
      }
      const [units, companies] = response
      dispatch({ type: "ADD_UNIT", payload: units as Unit[] })
      dispatch({ type: "ADD_COMPANY", payload: companies as Company[] })
    }
    initialFetch()
  }, [fetchClients])

  return (
    <ClientsContext.Provider value={{ state, dispatch }}>
      {children}
    </ClientsContext.Provider>
  )
}

export const useClientsContext = () => useContext(ClientsContext)
