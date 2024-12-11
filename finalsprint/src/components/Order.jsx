import React, { useState, useEffect } from "react";
import "../styles/styles.css"; // Import global styles

const materialPrices = {
  Iron: 15,
  Copper: 20,
  Gold: 30,
};

const Order = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [formData, setFormData] = useState({
    customOrderName: "",
    customItemMaterial: "",
    customItemQuantity: 0,
    customItemPrice: "$0.00",
  });
  const [orderList, setOrderList] = useState([]);
  const [alert, setAlert] = useState({ message: "", type: true });

  useEffect(() => {
    generateOrderNumber();
  }, []);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: true }), 5000);
  };

  const generateOrderNumber = () => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNumber);
  };

  const updatePrices = () => {
    const { customItemMaterial, customItemQuantity } = formData;
    if (customItemMaterial in materialPrices && customItemQuantity > 0) {
      const price = materialPrices[customItemMaterial] * customItemQuantity;
      setFormData({ ...formData, customItemPrice: `$${price.toFixed(2)}` });
    } else {
      setFormData({ ...formData, customItemPrice: "$0.00" });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "customItemQuantity" ? parseInt(value, 10) || 0 : value,
    }));
  };

  const addItemToTable = (e) => {
    e.preventDefault();
    const { customOrderName, customItemMaterial, customItemQuantity, customItemPrice } = formData;

    if (!customOrderName || !customItemMaterial || customItemQuantity <= 0) {
      showAlert("Please specify item name, material, and quantity.", false);
      return;
    }

    const newItem = {
      customOrderName,
      customItemMaterial,
      customItemQuantity,
      customItemPrice,
    };

    setOrderList((prevList) => [...prevList, newItem]);
    showAlert("Item has been added to your cart.", true);
    setFormData({
      customOrderName: "",
      customItemMaterial: "",
      customItemQuantity: 0,
      customItemPrice: "$0.00",
    });
    generateOrderNumber();
  };

  const removeItem = (index) => {
    setOrderList((prevList) => prevList.filter((_, i) => i !== index));
    showAlert("Item has been removed from cart.", true);
  };

  const calculateOrderTotal = () => {
    const total = orderList.reduce((sum, item) => {
      const price = parseFloat(item.customItemPrice.replace("$", ""));
      return sum + price;
    }, 0);
    return (total * 1.15).toFixed(2); // Include 15% tax
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
      <main>
        <div className="products-heading">
          <h2>Custom Order</h2>
        </div>
        {alert.message && (
          <div
            style={{
              background: alert.type ? "green" : "red",
              color: "white",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
            }}
          >
            {alert.message}
          </div>
        )}
        <div className="custom-order-box">
          <form className="custom-order-form" onSubmit={addItemToTable}>
            <label htmlFor="customOrderNumber">
              Order Number<span className="required-star">*</span>
            </label>
            <input type="text" value={orderNumber} readOnly />

            <label htmlFor="customOrderName">
              Item to Make<span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="customOrderName"
              name="customOrderName"
              value={formData.customOrderName}
              onChange={handleFormChange}
              required
            />

            <label htmlFor="customItemMaterial">
              Item Material<span className="required-star">*</span>
            </label>
            <select
              id="customItemMaterial"
              name="customItemMaterial"
              value={formData.customItemMaterial}
              onChange={(e) => {
                handleFormChange(e);
                updatePrices();
              }}
              required
            >
              <option value="">-- Select Material --</option>
              {Object.keys(materialPrices).map((material) => (
                <option key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>

            <label htmlFor="customItemQuantity">
              Item Quantity<span className="required-star">*</span>
            </label>
            <input
              type="number"
              id="customItemQuantity"
              name="customItemQuantity"
              value={formData.customItemQuantity}
              onChange={(e) => {
                handleFormChange(e);
                updatePrices();
              }}
              required
            />

            <label htmlFor="customItemPrice">
              Item Price<span className="required-star">*</span>
            </label>
            <input type="text" value={formData.customItemPrice} readOnly />

            <div className="item-submit">
              <button type="submit">Add to Order</button>
            </div>
          </form>
        </div>

        <div className="products-heading">
          <h2>Items Ordered</h2>
        </div>
        <div className="order-list-container">
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Item Material</th>
                <th>Item Price</th>
                <th>Item Quantity</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item, index) => (
                <tr key={index}>
                  <td>{item.customOrderName}</td>
                  <td>{item.customItemMaterial}</td>
                  <td>{item.customItemPrice}</td>
                  <td>{item.customItemQuantity}</td>
                  <td>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-total">
          <label htmlFor="orderTotal">Order Total (with 15% tax):</label>
          <input type="text" value={`$${calculateOrderTotal()}`} readOnly />
        </div>
      </main>
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

export default Order;
