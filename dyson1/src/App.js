import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/home';
import Hairdryers from './pages/hairdryers'; // Assuming you want a separate page for hairdryers
import Product from './pages/product'; // Import the new Product page
import './styles/common.css';

// Import other components that are always visible (like Header, Footer)
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header /> {/* Header visible on all pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hairdryers" element={<Hairdryers />} />
            <Route path="/product/:id" element={<Product />} /> {/* Use the new Product page */}
            {/* Add other routes for categories, items, etc., here as needed */}
          </Routes>
          <Footer /> {/* Footer visible on all pages */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
