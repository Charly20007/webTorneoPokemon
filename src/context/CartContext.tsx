import { createContext, ReactNode, useState } from 'react';

interface CartItem {
  type: string;
  price: string;
}

interface CartContextProps {
  items: CartItem[];
  total: string;
  addItem: (item: CartItem) => void;
  clearCart: () => void;
}

interface CardProviderProps {
    children: ReactNode;
  }

export const CartContext = createContext<CartContextProps>({
  items: [],
  total: '$0',
  addItem: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems([...items, item]);
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => {
    return sum + parseFloat(item.price.slice(1));
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ items, total: `$${total}`, addItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


