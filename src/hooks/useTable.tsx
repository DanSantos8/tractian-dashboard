import React from "react"
import { Button, Popconfirm, Space, Table } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

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
        <Table
          dataSource={dataSource}
          columns={columns}
          className="min-w-[1024px]"
        />
      </div>
    )
  }

  return { renderTable }
}
