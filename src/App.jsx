import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/CheckOut';
import {
  addToCart,
  removeFromCart,
  handleFilterChange,
  handleDescriptionClick,
  addMultipleToCart,
  updateCartQuantity,
} from './async-mock';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(true);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      {showFilters && (
        <div className="filter-buttons">
          <button
            className="filter-button"
            onClick={() => handleFilterChange(setFilter, 'All')}
          >
            All
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange(setFilter, 'PS4')}
          >
            PS4
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange(setFilter, 'PC')}
          >
            PC
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange(setFilter, 'PS1')}
          >
            PS1
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange(setFilter, 'PS3')}
          >
            PS3
          </button>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              addToCart={(item) => addToCart(cartItems, setCartItems, item)}
              filter={filter}
            />
          }
        />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route
          path="/product/:productId"
          element={
            <ProductDetail
              addToCart={(item) => addToCart(cartItems, setCartItems, item)}
              addMultipleToCart={(item, quantity) =>
                addMultipleToCart(cartItems, setCartItems, item, quantity)
              }
              handleDescriptionClick={() =>
                handleDescriptionClick(setShowFilters)
              }
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={(id) =>
                removeFromCart(cartItems, setCartItems, id)
              }
              updateCartQuantity={(id, newQty) =>
                updateCartQuantity(cartItems, setCartItems, id, newQty)
              }
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
