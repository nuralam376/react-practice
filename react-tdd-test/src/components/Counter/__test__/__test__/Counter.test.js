import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("should render header text", () => {
    render(<Counter />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement.textContent).toBe("Counter");
});

test("should show counter value 0", () => {
    render(<Counter />);
    const counterEl = screen.getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
});

test("should show input value 1", () => {
    render(<Counter />);
    const inputEl = screen.getByTestId("input");
    expect(inputEl.value).toBe("1");
});

test("should show subtract button", () => {
    render(<Counter />);
    const subtractBtn = screen.getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");
});

test("should show add btn", () => {
    render(<Counter />);
    const addBtn = screen.getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");
});

test("change value of input works correctly", () => {
    render(<Counter />);
    const inputEl = screen.getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target : {
            value : "5"
        }
    });

    expect(inputEl.value).toBe("5");
})