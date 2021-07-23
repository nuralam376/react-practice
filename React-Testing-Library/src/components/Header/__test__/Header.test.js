import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render heading",() => {
    render(<Header title = "Header"/>);
    const headingElement = screen.getByText(/Header/i);
    expect(headingElement).toBeInTheDocument();
});

// test("should check title prop", () => {
//     render(<Header />);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
// });

// test("should check title", async() => {
//     render(<Header title = "My Header"/>);
//     const headingElement = screen.getByRole("heading", {name : "My Header"});
//     expect(headingElement).toBeInTheDocument();
// });

test("should check title",  () => {
    render(<Header />);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
})

test("should check id", () => {
    render(<Header />);
    const headingElement = screen.getByTestId("header-2");
    expect(headingElement).toBeInTheDocument();
});

test("should find aync", async () => {
    render(<Header title = "Header"/>);
    const headingElement = await screen.findByText(/header/i);
    expect(headingElement).toBeInTheDocument();
});

test("should implement query", () => {
    render(<Header title = "Todo"/>);
    const headingElement = screen.queryByText(/Todos/i);
    expect(headingElement).not.toBeInTheDocument();
})

test("should implement getAll", () => {
    render(<Header title = "Todo"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
});