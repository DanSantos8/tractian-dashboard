import React from "react"
import { Table } from "antd"

export default function useTable() {
  const renderTable = (dataSource: any[] = []) => {
    const getDynamicColumns = () => {
      if (!dataSource.length) {
        return []
      }

      const keys = Object.keys(dataSource[0])
      if (keys.length === 0) {
        return []
      }

      return keys.map((data) => ({
        title: data,
        dataIndex: data,
        key: data,
      }))
    }

    const columns = [...getDynamicColumns()]

    return (
      <div className=" overflow-x-auto w-full">
        <div className="min-w-[700px]">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    )
  }

  return { renderTable }
}
