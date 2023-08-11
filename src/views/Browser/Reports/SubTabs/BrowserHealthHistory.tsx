import { HealthHistoryChart } from "@/components/Reports"

export function BrowserHealthHistory() {
  return (
    <>
      <h2 className="text-xl font-semibold"> Assets Health History</h2>
      <div className="mt-auto">
        <HealthHistoryChart />
      </div>
    </>
  )
}
