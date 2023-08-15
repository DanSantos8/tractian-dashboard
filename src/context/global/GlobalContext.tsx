import { useGlobalService } from "@/services/useGlobalService"
import { Asset, Company, Unit, User, WorkOrders } from "@/utils/types"
import { createContext, useContext, useReducer, useEffect } from "react"

interface ClientsState {
  companies: Company[]
  units: Unit[]
  workOrders: WorkOrders[]
  users: User[]
  assets: Asset[]
}

type Action =
  | { type: "INITIALIZE_STATE"; payload: ClientsState }
  | { type: "ADD_COMPANY"; payload: Company }
  | { type: "ADD_UNIT"; payload: Unit }
  | { type: "ADD_WORK_ORDER"; payload: WorkOrders }

const GlobalContext = createContext<{
  state: ClientsState
  dispatch: React.Dispatch<Action>
} | null>(null)

const globalReducer = (state: ClientsState, action: Action): ClientsState => {
  switch (action.type) {
    case "INITIALIZE_STATE": {
      return {
        ...action.payload,
      }
    }
    case "ADD_COMPANY": {
      return {
        ...state,
        companies: [...state.companies, action.payload],
      }
    }
    case "ADD_UNIT": {
      return {
        ...state,
        units: [...state.units, action.payload],
      }
    }
    case "ADD_WORK_ORDER": {
      return {
        ...state,
        workOrders: [...state.workOrders, action.payload],
      }
    }

    default:
      return state
  }
}

const INITIAL_CLIENTS_VALUES: ClientsState = {
  companies: [],
  units: [],
  workOrders: [],
  users: [],
  assets: [],
}

export const GlobalContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_CLIENTS_VALUES)
  const { callbacks } = useGlobalService()

  const { fetchData } = callbacks

  useEffect(() => {
    const initialFetch = async () => {
      const response = await fetchData()

      if (!response.length) {
        return
      }

      const [units, companies, users, workOrders, assets] = response

      const payload = {
        units: units as Unit[],
        companies: companies as Company[],
        users: users as User[],
        workOrders: workOrders as WorkOrders[],
        assets: assets as Asset[],
      }

      dispatch({ type: "INITIALIZE_STATE", payload: payload })
    }
    initialFetch()
  }, [fetchData])

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
