import React, { useState, useEffect } from 'react';
import "../styles/styles.css";

const Cart = () => {
  const TAX_RATE = 0.15;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const incrementQuantity = async (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      try {
        await fetch(`http://localhost:5000/cart/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: item.quantity + 1 }),
        });
        fetchCartItems();
      } catch (error) {
        console.error("Error incrementing quantity:", error);
      }
    }
  };

  const decrementQuantity = async (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      try {
        await fetch(`http://localhost:5000/cart/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: item.quantity - 1 }),
        });
        fetchCartItems();
      } catch (error) {
        console.error("Error decrementing quantity:", error);
      }
    }
  };

  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
      });
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleContinueToPayment = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add a product to proceed to payment.");
      return;
    }
    if (window.confirm("Do you want to continue to payment?")) {
      console.log("Continuing to payment...");
      // Navigate to the payment page or handle payment logic here.
    }
  };

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
              <p>Checkout</p>
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
          <p>Hmmm... It appears your cart is empty! ヽ(●ﾟ´Д｀ﾟ●)ﾉﾟ</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-button">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
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
          <p>Taxes (15%): ${tax.toFixed(2)}</p><br/>
          <p>Total: ${total.toFixed(2)}</p>
          <button 
            className="continue-payment-button" 
            onClick={handleContinueToPayment}
          >
            Continue to Payment
          </button>
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
