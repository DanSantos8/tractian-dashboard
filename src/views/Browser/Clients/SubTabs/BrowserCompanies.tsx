import { useGlobalContext } from "@/context/global/GlobalContext"
import useTable from "@/hooks/useTable"

export function BrowserCompanies() {
  const context = useGlobalContext()

  const { state } = context!

  const { renderTable } = useTable()

  return (
    <div className="w-full max-w-4xl mx-auto">
      {renderTable(state.companies)}
    </div>
  )
}
