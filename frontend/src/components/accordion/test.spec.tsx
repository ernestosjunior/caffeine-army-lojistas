import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";

import { Accordion, AccordionProps } from ".";

const Component = (props: AccordionProps) => <Accordion {...props} />;

describe("Accordion", () => {
  it("should render component with label", () => {
    const { queryByText } = render(
      <Component open={false} setOpen={vi.fn()} label="Label Test" />
    );

    const label = queryByText(/Label Test/i);

    expect(label).toBeTruthy();
  });
  it("should call function after click on button", () => {
    const handleOpen = vi.fn();
    const { container } = render(
      <Component open={false} setOpen={handleOpen} label="Label Test" />
    );

    const button = container.querySelector("#openButton") as HTMLElement;

    fireEvent.click(button);

    expect(handleOpen).toBeCalledTimes(1);
  });
});
