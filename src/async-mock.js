import data from './data.json';

const fetchMockData = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = data.find((product) => product.id === productId);
      resolve(item);
    }, 2000);
  });
};

export const addToCart = (cartItems, setCartItems, item) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((i) => i.id === item.id);
    if (existingItem) {
      return prevItems.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
    }
    return [...prevItems, { ...item, qty: 1 }];
  });
};

export const addMultipleToCart = (cartItems, setCartItems, item, quantity) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((i) => i.id === item.id);
    if (existingItem) {
      return prevItems.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + quantity } : i
      );
    }
    return [...prevItems, { ...item, qty: quantity }];
  });
};

export const removeFromCart = (cartItems, setCartItems, id) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};

export const updateCartQuantity = (cartItems, setCartItems, id, newQty) => {
  setCartItems((prevItems) =>
    prevItems.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
  );
};

export const handleFilterChange = (setFilter, newFilter) => {
  setFilter(newFilter);
};

export const handleDescriptionClick = (setShowFilters) => {
  setShowFilters(false);
};

export default fetchMockData;
