import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";


const MockedTodo = () => {
   return <BrowserRouter>
        <Todo />
    </BrowserRouter>
};

describe("Todo", () => {
    test("should check todo", () => {
        render(<MockedTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button",{name : /Add/i});
        fireEvent.change(inputElement, {target : {value : "Go Shopping"}});
        fireEvent.click(buttonElement);
        const divElement = screen.getByText("Go Shopping");
        expect(divElement).toBeInTheDocument();
    })
});