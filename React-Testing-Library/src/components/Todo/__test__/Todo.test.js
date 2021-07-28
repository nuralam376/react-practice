import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";


const MockedTodo = () => {
   return <BrowserRouter>
        <Todo />
    </BrowserRouter>
};

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name : /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target : {value : task}});
        fireEvent.click(buttonElement);
    });
};

describe("Todo", () => {
    test("should check todo", () => {
        render(<MockedTodo />);
        addTask(["Go Shopping"]);
        const divElement = screen.getByText("Go Shopping");
        expect(divElement).toBeInTheDocument();
    });

    test("should render same text passed into", async() => {
        render(<MockedTodo />);
        addTask(["shopping 1", "shooping 2", "shopping 4"]);
        const divElement = screen.getAllByTestId("todo-item");
        expect(divElement.length).toBe(3);
    });

    test("should not have classname when initially rendered", () => {
        render(<MockedTodo />);
        addTask(["Go Shopping"]);
        const divElement = screen.getByText(/Go Shopping/);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    test("should have className when clicked", () => {
        render(<MockedTodo />);
        addTask(["Go Shopping"]);
        const divElement = screen.getByText(/Go Shopping/);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    })
});