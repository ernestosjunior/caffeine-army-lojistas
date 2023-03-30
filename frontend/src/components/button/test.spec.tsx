import { render, fireEvent, screen } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";

import { Button, ButtonProps } from ".";

const Component = (props: ButtonProps) => <Button {...props} />;

describe("Accordion", () => {
  it("should render component with text prop", () => {
    const { queryByText } = render(
      <Component text="Button" onClick={vi.fn()} />
    );

    const label = queryByText(/Button/i);

    expect(label).toBeTruthy();
  });
  it("should call function after click on button", () => {
    const handleClick = vi.fn();
    render(<Component text="Button by test" onClick={handleClick} />);

    const button = screen.queryByText(/Button by test/i) as HTMLElement;

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
