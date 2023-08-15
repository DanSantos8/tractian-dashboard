import { Button } from "antd"
import useSubTabs from "./useSubTabs"
import { createSlug } from "@/utils/helpers"

export const SubTabs = () => {
  const { subTabsValues = [], handleChangeSubTab, currentSubTab } = useSubTabs()

  return (
    <div className="flex w-full flex-nowrap overflow-x-auto">
      <ul className="flex gap-3 mx-auto">
        {subTabsValues.map((subtab, i: number) => (
          <li key={subtab.id}>
            <Button
              className={`bg-[#fff] ${
                i === currentSubTab ? " text-blue border-blue" : ""
              }`}
              onClick={() => handleChangeSubTab(createSlug(subtab.title), i)}
            >
              {subtab.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
