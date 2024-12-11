import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Components
import Index from "./components/Index";
import Order from "./components/Order";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
