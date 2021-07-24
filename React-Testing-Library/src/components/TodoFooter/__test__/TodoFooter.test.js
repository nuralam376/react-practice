import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks = {numberOfIncompleteTasks}/>
    </BrowserRouter>
}; 

test("should check todo footer count", () => {
    render(<MockTodoFooter numberOfIncompleteTasks = {5} />);
    const footerContent = screen.getByText(/5 tasks left/);
    expect(footerContent).toBeInTheDocument();
});

test("should render task when the number of incomplete task is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks = {1}/>);
    const paragraphContent = screen.getByText(/1 task left/);
    // const paragraphContent = screen.getByRole("paragraph");
    // expect(paragraphContent).toBeTruthy();
    // expect(paragraphContent).toBeVisible();
    // expect(paragraphContent).toContainHTML("p");
    // expect(paragraphContent).toHaveTextContent("1 task left");
    expect(paragraphContent.textContent).toBe("1 task left");
});