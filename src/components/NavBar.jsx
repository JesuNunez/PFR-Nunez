import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.css';

const NavBar = ({ cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MiTienda</Link>
      </div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar productos..."
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="navbar-cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
