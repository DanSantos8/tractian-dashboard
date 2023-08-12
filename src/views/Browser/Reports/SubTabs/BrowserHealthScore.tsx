import { HealthscoreBarChart } from "@/components/Reports/Charts"

export default function BrowserHelthScore() {
  return (
    <>
      <h2 className="text-xl font-semibold"> Assets Health Score</h2>
      <div className="mt-auto">
        <HealthscoreBarChart />
      </div>
    </>
  )
}
