import { render, screen } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  it("matches snapshot", () => {
    const { container } = render(<Input />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders a label when informed", () => {
    const { container } = render(<Input label="Nome" />);

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Nome");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
