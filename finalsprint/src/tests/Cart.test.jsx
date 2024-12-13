import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "../components/Cart";

// Mock global functions and API calls
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "Item 1", price: 100, quantity: 2, image: "item1.jpg" },
          { id: 2, name: "Item 2", price: 50, quantity: 1, image: "item2.jpg" },
        ]),
    })
  );
  window.alert = jest.fn();
  window.confirm = jest.fn(() => true);
});

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
  delete window.alert;
  delete window.confirm;
});

describe("Cart Component", () => {
  it("renders cart items and calculates totals", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Subtotal: $250.00")).toBeInTheDocument();
    expect(screen.getByText("Taxes (15%): $37.50")).toBeInTheDocument();
    expect(screen.getByText("Total: $287.50")).toBeInTheDocument();
  });

  it("increments item quantity", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      );
    });

    const incrementButtons = screen.getAllByText("+");
    await act(async () => {
      fireEvent.click(incrementButtons[0]);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:5000/cart/1",
      expect.objectContaining({
        method: "PATCH",
      })
    );
  });

  it("decrements item quantity", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      );
    });

    const decrementButtons = screen.getAllByText("-");
    await act(async () => {
      fireEvent.click(decrementButtons[0]);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:5000/cart/1",
      expect.objectContaining({
        method: "PATCH",
      })
    );
  });

  it("removes an item from the cart", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      );
    });

    const removeButtons = screen.getAllByText("Remove");
    await act(async () => {
      fireEvent.click(removeButtons[0]);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:5000/cart/1",
      expect.objectContaining({ method: "DELETE" })
    );
  });

  it("alerts when trying to proceed to payment with an empty cart", async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    });

    await act(async () => {
      render(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      );
    });

    const continueButton = screen.getByText("Continue to Payment");
    await act(async () => {
      fireEvent.click(continueButton);
    });

    expect(window.alert).toHaveBeenCalledWith(
      "Your cart is empty. Please add a product to proceed to payment."
    );
  });
});
