import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jext-dom/vitest";

import Cart from "../components/Cart";
describe("Cart", () => {
  test("Cart component has heading", () => {
    render(<Cart />);
    const heading = screen.getByText(/Shopping Cart/i);
    expect(heading).toBeInTheDocument();
  });
});
