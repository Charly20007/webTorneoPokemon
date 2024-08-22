import { createContext, ReactNode, useState } from 'react';

interface CartItem {
  type: string;
  price: string;
  quantity: number; // Nueva propiedad para la cantidad
}

interface CartContextProps {
  items: CartItem[];
  total: string;
  addItem: (item: CartItem) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  items: [],
  total: '$0',
  addItem: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    const existingItemIndex = items.findIndex(i => i.type === item.type);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => {
    return sum + parseFloat(item.price.slice(1)) * item.quantity;
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ items, total: `$${total}`, addItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};



