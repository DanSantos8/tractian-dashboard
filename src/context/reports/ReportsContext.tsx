import { createContext, useContext } from "react"

interface ReportsContextProps {
  teste: any
}

const ReportsContext = createContext<ReportsContextProps>(undefined!)

export const ReportsContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ReportsContext.Provider value={{ teste: [] }}>
      {children}
    </ReportsContext.Provider>
  )
}

export const useReportsContext = () => useContext(ReportsContext)
