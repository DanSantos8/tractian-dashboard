import { useGlobalContext } from "@/context/global/GlobalContext"
import useTable from "@/hooks/useTable"
import { transformUsers } from "@/utils/transform/dataSourceTransform"

export function BrowserUsersList() {
  const context = useGlobalContext()
  const { state } = context!

  const { renderTable } = useTable()

  const users = transformUsers(state.users, state.companies, state.units)

  return <div className="w-full max-w-4xl mx-auto">{renderTable(users)}</div>
}
