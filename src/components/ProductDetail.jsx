import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';
import fetchMockData from '../async-mock';

const ProductDetail = ({ addMultipleToCart, handleDescriptionClick }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const item = await fetchMockData(productId);
      setProduct(item);
    };

    fetchProduct();
    handleDescriptionClick();
  }, [productId, handleDescriptionClick]);

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail-container">
      {product ? (
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
          <p className="price">Precio: ${product.price}</p>
          {product.priceDiscount && (
            <p className="discount">Descuento: ${product.priceDiscount}</p>
          )}
          <p className="rating">
            Rating: {product.rating.value} ({product.rating.count} reviews)
          </p>
          <p className="stock">Stock: {product.stock}</p>
          <div className="quantity-control">
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
          <button
            onClick={() => addMultipleToCart(product, quantity)}
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
          </button>
        </div>
      ) : (
        <p className="Loading">Cargando producto...</p>
      )}
    </div>
  );
};

export default ProductDetail;
