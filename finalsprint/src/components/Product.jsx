import React from 'react';
import '../styles/styles.css'; // Import your CSS

const Product = () => {
  const addToCart = async (name, price, image) => {
    try {
      await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, image, quantity: 1 }), // Send item data to cart
      });
      alert(`${name} added to cart!`);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const products = [
    { name: "Gold Bracelet", price: 400, image: "/images/image 3.png" },
    { name: "Copper Bracelet", price: 315, image: "/images/image 4.png" },
    { name: "Iron Bracelet", price: 175, image: "/images/image 5.png" },
    { name: "Iron Keychain", price: 50, image: "/images/image 6.png" },
    { name: "Gold Keychain", price: 75, image: "/images/image 7.png" },
    { name: "Copper Keychain", price: 85, image: "/images/image 8.png" },
    { name: "Iron Axe", price: 250, image: "/images/image 9.png" },
    { name: "Gold Candlesticks", price: 350, image: "/images/image 10.png" },
    { name: "Iron Hammer", price: 175, image: "/images/image 11.png" },
    { name: "Iron Knife", price: 180, image: "/images/image 12.png" },
    { name: "Gold Fire Poker", price: 275, image: "/images/image 13.png" },
    { name: "Iron Sword", price: 215, image: "/images/image 14.png" },
  ];

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
        <div className="products-heading">
          <h2>Product Samples</h2>
        </div>
        <div className="product-box-container">
          {products.map((product, index) => (
            <div className="product-box" key={index}>
              <div className="img-box">
                <img src={product.image} alt={product.name} height="300rem" />
                <h4>{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product.name, product.price, product.image)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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
            <img src="/images/facebook-icon 1.png" alt="Facebook" title="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/instagram-icon 1.png" alt="Instagram" title="Instagram" />
          </a>
          <a href="#" aria-label="Twitter/X">
            <img src="/images/twitter-icon 2.png" alt="Twitter/X" title="Twitter/X" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Product;
