import { render, screen } from "@testing-library/react";
import Button from ".";

const variants = ["primary", "secondary"] as const;

describe("Button", () => {
  test.each(variants)("renders variant %s correctly", (variant) => {
    const { container } = render(<Button variant={variant}>button</Button>);

    const button = screen.getByText("button");

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
