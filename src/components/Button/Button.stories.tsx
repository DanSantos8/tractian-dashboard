import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "antd"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  argTypes: {
    type: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
  },
  args: {
    onClick: () => alert("You clicked on the beautiful button"),
    children: "That's a beautiful button",
  },
}
