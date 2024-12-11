import React from 'react';
import '../styles/styles.css'; // Import your CSS

const Product = () => (
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
          <h2>Product Samples</h2>
        </div>
        <div className="product-box-container">
          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 3.png" alt="Gold Bracelet" height="300rem" />
              <h4>Gold Bracelet</h4>
              <p>$400.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 4.png" alt="Copper Bracelet" height="300rem" />
              <h4>Copper Bracelet</h4>
              <p>$315.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 5.png" alt="Iron Bracelet" height="300rem" />
              <h4>Iron Bracelet</h4>
              <p>$175.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 6.png" alt="Iron Keychain" height="300rem" />
              <h4>Iron Keychain</h4>
              <p>$50.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 7.png" alt="Gold Keychain" height="300rem" />
              <h4>Gold Keychain</h4>
              <p>$75.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 8.png" alt="Copper Keychain" height="300rem" />
              <h4>Copper Keychain</h4>
              <p>$85.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 9.png" alt="Iron Axe" height="300rem" />
              <h4>Iron Axe</h4>
              <p>$250.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 10.png" alt="Gold Candlesticks" height="300rem" />
              <h4>Gold Candlesticks (Set of 2)</h4>
              <p>$350.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 11.png" alt="Iron Hammer" height="300rem" />
              <h4>Iron Hammer</h4>
              <p>$175.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 12.png" alt="Iron Knife" height="300rem" />
              <h4>Iron Knife</h4>
              <p>$180.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 13.png" alt="Gold Fire Poker" height="300rem" />
              <h4>Gold Fire Poker</h4>
              <p>$275.00</p>
            </div>
          </div>

          <div className="product-box">
            <div className="img-box">
              <img src="/images/image 14.png" alt="Iron Sword" height="300rem" />
              <h4>Iron Sword</h4>
              <p>$215.00</p>
            </div>
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

export default Product;
