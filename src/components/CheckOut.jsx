import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import Swal from 'sweetalert2';
import '../styles/Checkout.css';

const Checkout = ({ cartItems, clearCart }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      Swal.fire('Error', 'Los correos electrónicos no coinciden', 'error');
      return;
    }

    const order = {
      name,
      surname,
      phone,
      email,
      items: cartItems,
      date: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      clearCart();
      Swal.fire(
        'Compra Confirmada',
        `Tu ID de compra es: ${docRef.id}`,
        'success'
      );
    } catch (e) {
      console.error('Error adding document: ', e);
      Swal.fire('Error', 'Hubo un problema con tu compra', 'error');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Confirmar correo electrónico"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required
        />
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
