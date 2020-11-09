import React from "react";
import ReactDOM from 'react-dom'
import { render, getByText, getByTestId, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div)
    
  });
// Write up the two tests here and make sure they are testing what the title shows



test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);
    const checkoutButton = getByTestId('checkout-button');
    fireEvent.click(checkoutButton);
    getByTestId("successMessage");
});
