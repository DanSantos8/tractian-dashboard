import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Button } from "antd"
import "@testing-library/jest-dom/extend-expect"

describe("Button component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button>Thats a beautiful button</Button>)
    const buttonElement = getByText("Thats a beautiful button")
    expect(buttonElement).toBeInTheDocument()
  })

  it("handles click event", () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(
      <Button onClick={mockOnClick}>Thats a beautiful button</Button>
    )
    const buttonElement = getByText("Thats a beautiful button")

    fireEvent.click(buttonElement)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
