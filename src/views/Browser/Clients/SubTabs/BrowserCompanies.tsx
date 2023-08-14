import { useClientsContext } from "@/context/clients/ClientsContext"
import useTable from "@/hooks/useTable"

export function BrowserCompanies() {
  const context = useClientsContext()

  const { state } = context!

  const { renderTable } = useTable({ dataSource: state.companies })

  return <div className="w-full max-w-4xl mx-auto">{renderTable()}</div>
}
