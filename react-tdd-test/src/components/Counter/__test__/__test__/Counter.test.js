import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("should render header text", () => {
    render(<Counter />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement.textContent).toBe("Counter");
});