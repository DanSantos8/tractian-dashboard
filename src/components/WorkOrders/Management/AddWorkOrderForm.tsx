import { useGlobalContext } from "@/context/global/GlobalContext"
import { Modal, Input, Form, Select, Row, Col, Button, Checkbox } from "antd"
import { Controller } from "react-hook-form"
import useAddWorkOrderForm from "./useAddWorkOrderForm"
import { useWorkOrdersContext } from "@/context/workOrders/workOrdersContext"

export function AddWorkOrderForm() {
  const { handleCancel, handleOk, isModalVisible } = useWorkOrdersContext()
  const context = useGlobalContext()
  const {
    state: { assets, users },
  } = context!

  const {
    onSubmit,
    renderErrorMessage,
    isLoading,
    handleSubmit,
    errors,
    control,
    getValues,
  } = useAddWorkOrderForm()

  return (
    <Modal
      open={isModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
      footer={null}
    >
      <Form
        onFinish={handleSubmit(onSubmit)}
        className="mt-6"
        layout="vertical"
      >
        <Form.Item label="Title" name="title" className="mb-3">
          <Controller
            name="title"
            control={control}
            render={({ field }) => <Input {...field} />}
            rules={{ required: "Title is required" }}
          />
          {errors.title && renderErrorMessage(errors.title)}
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input {...field} />}
            rules={{ required: "Description is required" }}
          />
          {errors.description && renderErrorMessage(errors.description)}
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Assets" name="asset">
              <Controller
                name="asset"
                control={control}
                rules={{ required: "Asset is required" }}
                render={({ field }) => (
                  <Select {...field}>
                    {assets?.map((asset) => (
                      <Select.Option value={asset.id} key={asset.id}>
                        {asset.name}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
              {errors.asset && renderErrorMessage(errors.asset)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Users" name="users">
              <Controller
                name="users"
                control={control}
                rules={{ required: "Users is required" }}
                render={({ field }) => (
                  <Select mode="multiple" {...field}>
                    {users.map((user) => (
                      <Select.Option value={user.id} key={user.id}>
                        {user.name}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
              {errors.users && renderErrorMessage(errors.users)}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Priority" name="priority">
              <Controller
                name="priority"
                control={control}
                rules={{ required: "Priority is required" }}
                render={({ field }) => (
                  <Select {...field}>
                    <Select.Option value="high">High</Select.Option>
                    <Select.Option value="medium">Medium</Select.Option>
                    <Select.Option value="low">Low</Select.Option>
                  </Select>
                )}
              />
              {errors.priority && renderErrorMessage(errors.priority)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Status" name="status">
              <Controller
                name="status"
                control={control}
                rules={{ required: "Status is required" }}
                render={({ field }) => (
                  <Select {...field}>
                    <Select.Option value="pending">Pending</Select.Option>
                    <Select.Option value="in progress">
                      In progress
                    </Select.Option>
                    <Select.Option value="completed">Completed</Select.Option>
                  </Select>
                )}
              />
              {errors.status && renderErrorMessage(errors.status)}
            </Form.Item>
          </Col>
        </Row>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Checklist</h3>

          {["step-1", "step-2", "step-3"].map((item, index) => (
            <Row gutter={16} key={item}>
              <Col span={16}>
                <Form.Item
                  className="mb-0"
                  name={item}
                  validateStatus={errors[item] ? "error" : ""}
                >
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder={`Step ${index + 1}`} />
                    )}
                    rules={{ required: "Task is required" }}
                  />
                  {errors[item] && renderErrorMessage(errors[item])}
                </Form.Item>
              </Col>

              <Col span={1}>
                <Form.Item
                  className="mb-0"
                  name={`${item}-check`}
                  validateStatus={errors[item] ? "error" : ""}
                >
                  <Controller
                    name={`${item}-check`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          {...field}
                          checked={getValues(`${item}-check`)}
                        />
                      )
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          ))}
        </div>

        <div className="flex gap-3 justify-center mt-3 border-t-2 border-gray-light pt-3">
          <Button type="primary" onClick={handleCancel} danger>
            Cancel
          </Button>
          <Button type="primary" ghost htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  )
}
