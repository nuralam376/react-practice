import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedTodo = "";

test("should check AddInput", () => {
    render(<AddInput todo = {[]} setTodo = {mockedTodo}/>);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
})

test("should be able to type in the input", () => {
    render(<AddInput todo = {[]} setTodo = {mockedTodo}/>);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {target : {value : "Go to shop"}});
    expect(inputElement.value).toBe("Go to shop");
});