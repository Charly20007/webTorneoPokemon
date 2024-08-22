import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { items, total, clearCart } = useContext(CartContext);
  const [purchaseMessage, setPurchaseMessage] = useState<string | null>(null);

  const handlePurchase = () => {
    setPurchaseMessage('Entradas compradas con éxito!');
    clearCart();
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold">Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.type} className="border-b py-2">
              {item.type} - {item.quantity} x {item.price} = ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mt-2">Total: {total}</p>
      {purchaseMessage && <p className="text-green-600 font-bold mt-2">{purchaseMessage}</p>}
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        onClick={handlePurchase}
      >
        Comprar entradas
      </button>
      <button
        className="mt-2 bg-red-500 text-white py-1 px-4 rounded ml-2"
        onClick={clearCart}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;


