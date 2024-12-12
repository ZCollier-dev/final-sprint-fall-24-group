import React, { useState } from "react";
import "../styles/styles.css";

const Cart = () => {
  const TAX_RATE = 0.15;

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Iron Bracelet",
      price: 175,
      image: "/images/image 5.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Copper Keychain",
      price: 80,
      image: "/images/image 8.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Gold Candlesticks (Set of 2)",
      price: 350,
      image: "/images/image 10.png",
      quantity: 1,
    },
  ]);

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="bodybox">
      <header>
        <div className="companyheading">
          <h1>Molten Metalworks</h1>
        </div>
        <nav>
          <a href="/" aria-label="Home">
            <div className="navbox" id="homenav">
              <p>Home</p>
            </div>
          </a>
          <a href="/product" aria-label="Products">
            <div className="navbox" id="productsnav">
              <p>Products</p>
            </div>
          </a>
          <a href="/order" aria-label="Order Now">
            <div className="navbox" id="ordernav">
              <p>Order Now!</p>
            </div>
          </a>
          <a href="/cart" aria-label="View Cart">
            <div className="navbox" id="viewcart">
              <p>View Cart</p>
            </div>
          </a>
        </nav>
      </header>

      <div className="cart">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p> ${item.price.toFixed(2)}</p>
                <div className="quantity-button">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <div>{item.quantity}</div>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
        <div className="summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Taxes (15%): ${tax.toFixed(2)}</p>
          <br />
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      </div>

      <footer>
        <div className="copyright">
          <p>Copyright &copy; Molten Metalworks 2024</p>
        </div>
        <div className="socials">
          <a href="#" aria-label="Email">
            <img src="/images/email-icon 1.png" alt="Email" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/images/facebook-icon 1.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/instagram-icon 1.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter/X">
            <img src="/images/twitter-icon 2.png" alt="Twitter/X" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
