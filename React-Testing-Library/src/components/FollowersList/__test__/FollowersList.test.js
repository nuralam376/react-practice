import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockedFollowersList = () => {
    return <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
};

describe("FollowersList", () => {

    beforeAll(() => {
        console.log("Running once before all test");
    });

    beforeEach(() => {
        console.log("Running before each test");
    });

    afterAll(() => {
        console.log("Running once after all tests");
    });

    afterEach(() => {
        console.log("Running after each tests");
    });

    test("should render list", async() => {
        render(<MockedFollowersList />);
        const divElement = await screen.findByTestId("follower-item-0");
        // screen.debug();
        expect(divElement).toBeInTheDocument();
    });

    test("should render 5 followers", async () => {
        render(<MockedFollowersList />);
        const divElements = await screen.findAllByTestId(/follower-item/i);
        expect(divElements.length).toBe(1);
    })
});