import { createContext, ReactNode, useState } from 'react';

interface CartItem {
  type: string;
  price: string;
  quantity: number;
}

interface CartContextProps {
  items: CartItem[];
  total: string;
  addItem: (item: CartItem) => void;
  removeItem: (type: string) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  items: [],
  total: '$0',
  addItem: () => {},
  removeItem: () => {},
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

  const removeItem = (type: string) => {
    console.log(`Intentando quitar el artículo: ${type}`);
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.type === type);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        if (updatedItems[itemIndex].quantity > 1) {
          // Disminuir la cantidad en 1
          updatedItems[itemIndex].quantity -= 1;
          console.log(`Cantidad de ${type} disminuida a ${updatedItems[itemIndex].quantity}`);
        } else {
          // Si la cantidad es 1, eliminar el artículo
          updatedItems.splice(itemIndex, 1);
          console.log(`Artículo ${type} eliminado del carrito.`);
        }
        return updatedItems;
      }
      return prevItems; // Si no se encuentra el artículo, no hacer nada
    });
  };
  
  

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => {
    return sum + parseFloat(item.price.slice(1)) * item.quantity;
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ items, total: `$${total}`, addItem, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};



