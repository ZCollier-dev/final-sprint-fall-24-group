import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Cart from "../components/Cart";
describe("Cart", () => {
  test("Cart component has heading", () => {
    render(<Cart />);
    const heading = screen.queryByText("Shopping Cart");
    expect(heading).toBeInTheDocument();
  });
});
