import React from 'react';
import '../styles/styles.css'; // Import global styles

const Index = () => (
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
      <div className="about-box">
        <div className="sparks-img">
          <img src="/images/sparks.png" alt="Image in main for styling" width="100%" />
        </div>
        <div className="about-heading">
          <h2>About Us</h2>
        </div>
        <div className="about-main">
          <p>
            Welcome to Molten Metalworks, where timeless craftsmanship meets modern artistry. We are a dedicated blacksmithing company specializing in creating unique, handcrafted metal trinkets made from premium materials like copper, brass, and silver.
          </p>
          <p>
            Each piece we create is forged with care, reflecting a deep commitment to quality and creativity.
          </p>
          <p>
            With years of experience working with traditional techniques, we blend old-world blacksmithing skills with contemporary designs to craft trinkets that are not just accessories but meaningful works of art.
          </p>
          <p>
            Explore our collection, or reach out to us with your ideas—we're here to make your visions a reality.
          </p>
        </div>
      </div>

      <div className="ownerbox">
        <div className="ownertext">
          <h2>Our Owner</h2>
          <p>
            Meet Jim Smith, the one and only Master Blacksmith. With over two decades of experience at the forge, Jim has honed the art of blacksmithing into both a passion and a profession.
          </p>
          <p>
            From delicate trinkets to custom metalwork, Jim has built a reputation for meticulous attention to detail and a unique artistic flair. Every piece reflects the timeless beauty and craftsmanship that defines his work.
          </p>
        </div>
        <div className="ownerimg">
          <img src="/images/jim_smith.png" alt="Jim Smith the owner" height="300rem" />
        </div>
      </div>

      <div className="business-and-reviews">
        <div className="business">
          <h3>Business Hours:</h3>
          <p>Monday: 9AM - 5PM</p>
          <p>Tuesday: 9AM - 5PM</p>
          <p>Wednesday: 8AM - 6PM</p>
          <p>Thursday: 8AM - 6PM</p>
          <p>Friday: 8AM - 4PM</p>
          <p>Saturday: 11AM - 5PM</p>
          <p>Sunday: CLOSED</p>
          <p>123 Main Street</p>
          <p>St. John's, NL</p>
          <p>A1A 1A1</p>
          <p>(709)-555-0123</p>
        </div>
        <div className="reviews">
          <h3>Reviews</h3>
          <div className="review">
            <p>★★★★★</p>
            <p>"The craftsmanship is absolutely stunning! I purchased a custom keychain, and it exceeded all my expectations. Truly one-of-a-kind!"</p>
          </div>
          <div className="review">
            <p>★★★★★</p>
            <p>"Beautifully made and arrived quickly. You can feel the quality in every piece—I'll definitely be ordering again!"</p>
          </div>
          <div className="review">
            <p>★★★★★</p>
            <p>"The attention to detail is incredible. I love my new copper bracelet, and the ordering process was so easy!"</p>
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

export default Index;
