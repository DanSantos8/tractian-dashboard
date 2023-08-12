import { HealthStatusChart } from "@/components/Reports/Charts"

export default function BrowserHealthStatus() {
  return (
    <>
      <h2 className="text-xl font-semibold"> Assets Health Status</h2>
      <div className="mt-auto">
        <HealthStatusChart />
      </div>
    </>
  )
}
