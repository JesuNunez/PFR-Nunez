import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard.jsx';
import '../styles/ItemListContainer.css';
import data from '../data.json';

const ItemListContainer = ({ addToCart, filter }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItems(data);
    setLoading(false);
  }, []);

  const filteredItems =
    filter === 'All'
      ? items
      : items.filter((item) => item.description.includes(filter));

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} addToCart={addToCart} />
        ))
      ) : (
        <p>No se encontraron productos</p>
      )}
    </div>
  );
};

export default ItemListContainer;
