import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    cardExpiration: "",
    cvv: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    email: "",
  });
  const [alert, setAlert] = useState({ message: "", type: true });
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    generateOrderNumber();
    fetchCartSummary();
  }, []);

  const generateOrderNumber = () => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNumber);
  };

  const fetchCartSummary = async () => {
    try {
      const response = await fetch("http://localhost:5000/cart");
      const cartItems = await response.json();
      const calculatedSubtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const calculatedTax = calculatedSubtotal * 0.15;
      const calculatedTotal = calculatedSubtotal + calculatedTax;

      setSubtotal(calculatedSubtotal);
      setTax(calculatedTax);
      setTotal(calculatedTotal);
    } catch (error) {
      console.error("Error fetching cart summary:", error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      cardHolderName,
      cardNumber,
      cardExpiration,
      cvv,
      address,
      city,
      country,
      zipCode,
      email,
    } = formData;

    if (!cardHolderName || cardHolderName.trim().length === 0)
      return "Card holder name is required.";
    if (!cardNumber || !/^[0-9]{16}$/.test(cardNumber))
      return "Invalid card number.";
    if (!cardExpiration || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiration))
      return "Invalid card expiration date.";
    if (!cvv || !/^[0-9]{3}$/.test(cvv)) return "Invalid CVV.";
    if (!address || address.trim().length === 0) return "Address is required.";
    if (!city || city.trim().length === 0) return "City is required.";
    if (!country || country.trim().length === 0) return "Country is required.";
    if (!zipCode || !/^[A-Z0-9]{6}$/.test(zipCode)) return "Invalid ZIP code.";
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return "Invalid email address.";

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      window.alert("Please review the form."); // Use window.alert
      return;
    }
    window.alert(`Order #${orderNumber} has been confirmed and placed successfully!`); // Use window.alert
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
          <a href="/cart" aria-label="View Cart">
            <div className="navbox" id="viewcart">
              <p>View Cart</p>
            </div>
          </a>
        </nav>
      </header>

      <main>
        <div className="payment-heading">
          <h2>Payment Information</h2>
        </div>
        {alert.message && (
          <div
            className="alert-box"
            style={{ background: alert.type ? "green" : "red" }}
          >
            {alert.message}
          </div>
        )}

        <div className="custom-order-box">
          <form className="custom-order-form" onSubmit={handleSubmit}>
            <label>Order Number:</label>
            <input type="text" value={orderNumber} readOnly />

            <label>Card Holder Name:</label>
            <input
              type="text"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleFormChange}
              required
            />

            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              value={formData.cardNumber}
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) handleFormChange(e);
              }}
              required
            />

            <label>Card Expiration (MM/YY):</label>
            <input
              type="text"
              name="cardExpiration"
              maxLength="5"
              value={formData.cardExpiration}
              onChange={(e) => {
                if (/^(\d{0,2}|\d{2}\/\d{0,2})$/.test(e.target.value))
                  handleFormChange(e);
              }}
              required
            />

            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              maxLength="3"
              value={formData.cvv}
              onChange={(e) => {
                if (/^[0-9]{0,3}$/.test(e.target.value)) handleFormChange(e);
              }}
              required
            />

            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              required
            />

            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleFormChange}
              required
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleFormChange}
              required
            />

<label>Postal Code:</label>
<input
  type="text"
  name="zipCode"
  maxLength="6"
  value={formData.zipCode}
  onChange={(e) => {
    const uppercaseValue = e.target.value.toUpperCase();
    if (/^[A-Z0-9]*$/.test(uppercaseValue)) {
      handleFormChange({ target: { name: "zipCode", value: uppercaseValue } });
    }
  }}
  required
/>

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />

            <div className="order-summary">
              <div>
                <h3>Order Summary</h3>
                <br />
                <div className="summary-box">
                  <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  <p>Taxes (15%): ${tax.toFixed(2)}</p>
                  <p>Total: ${total.toFixed(2)}</p>
                  <br />
                  <div className="summary-footer">
                    <button type="submit">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="return-to-cart">
            <button onClick={() => navigate("/cart")}>Return to Cart</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="copyright">
          <p>Copyright &copy; Molten Metalworks 2024</p>
        </div>
        <div className="socials">
          <a href="#" aria-label="Email">
            <img src="/images/email-icon 1.png" alt="Email" title="Email" />
          </a>
          <a href="#" aria-label="Facebook">
            <img
              src="/images/facebook-icon 1.png"
              alt="Facebook"
              title="Facebook"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="/images/instagram-icon 1.png"
              alt="Instagram"
              title="Instagram"
            />
          </a>
          <a href="#" aria-label="Twitter/X">
            <img
              src="/images/twitter-icon 2.png"
              alt="Twitter/X"
              title="Twitter/X"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Order;
