import React from "react"
import { Button, Popconfirm, Space, Table } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

interface Props {
  dataSource: any[]
}

export default function useTable(props?: Props) {
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

    const columns = [
      ...getDynamicColumns(),
      {
        key: "actions",
        width: 100,
        render: () => (
          <Space>
            {/*  <Button style={{ width: 50 }} icon={<EditOutlined />} /> */}
            <Popconfirm title="Are you sure you want to delete this item?">
              <Button style={{ width: 50 }} icon={<DeleteOutlined />} danger />
            </Popconfirm>
          </Space>
        ),
      },
    ]

    return <Table dataSource={dataSource} columns={columns} />
  }

  return { renderTable }
}
