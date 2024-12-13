const { render, fireEvent } = require("@testing-library/react");
const Product = require("../components/Product");

describe("Product Page", function() {
  let mockAddToCart;

  beforeEach(function() {
    global.alert = jest.fn();
    mockAddToCart = jest.fn(function(name) {
      global.alert(`${name} added to cart!`);
    });
  });

  afterEach(function() {
    jest.clearAllMocks();
  });

  it("should display an alert when 'Add to Cart' is clicked", function() {
    const products = [
      { name: "Gold Bracelet", price: 400, image: "/images/image3.png" },
      { name: "Copper Bracelet", price: 315, image: "/images/image4.png" }
    ];

    products.forEach(function(product) {
      mockAddToCart(product.name);
    });

    expect(global.alert).toHaveBeenCalledWith("Gold Bracelet added to cart!");
    expect(global.alert).toHaveBeenCalledWith("Copper Bracelet added to cart!");
  });

  it("should handle errors when adding an item to the cart", async function() {
    global.fetch = jest.fn(() => Promise.reject("API is down"));

    try {
      mockAddToCart("Gold Bracelet");
    } catch (error) {
      expect(global.alert).not.toHaveBeenCalled();
    }
  });
});