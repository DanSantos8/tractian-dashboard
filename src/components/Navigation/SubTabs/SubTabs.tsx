import { Button } from "antd"
import useSubTabs from "./useSubTabs"
import { createSlug } from "@/utils/helpers"

export const SubTabs = () => {
  const { subTabsValues, handleChangeSubTab, currentSubTab } = useSubTabs()

  return (
    <div className="flex gap-3">
      {subTabsValues.map((subtab, i: number) => (
        <Button
          key={subtab.id}
          className={`bg-[#fff] ${
            i === currentSubTab ? " text-blue border-blue" : ""
          }`}
          onClick={() => handleChangeSubTab(createSlug(subtab.title), i)}
        >
          {subtab.title}
        </Button>
      ))}
    </div>
  )
}
