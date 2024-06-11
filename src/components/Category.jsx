import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const filteredProducts = data.filter(
        (product) => product.categoryId === categoryId
      );
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>Productos en la categoría: {categoryId}</h2>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => <li key={product.id}>{product.name}</li>)
        ) : (
          <p>No se encontraron productos</p>
        )}
      </ul>
    </div>
  );
};

export default Category;
