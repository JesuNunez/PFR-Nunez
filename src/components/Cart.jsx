import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart, updateCartQuantity }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const finalPrice = item.priceDiscount
          ? item.price - item.priceDiscount
          : item.price;
        return total + finalPrice * item.qty;
      }, 0)
      .toFixed(2);
  };

  const totalAmount = calculateTotal();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)} x {item.qty}
                <div className="quantity-control">
                  <button
                    onClick={() => updateCartQuantity(item.id, item.qty - 1)}
                    disabled={item.qty === 1}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateCartQuantity(item.id, item.qty + 1)}
                    disabled={item.qty === item.stock}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalAmount}</h3>
          </div>
          <Link to="/checkout">
            <button>Proceder al Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
