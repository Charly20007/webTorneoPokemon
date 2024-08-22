import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { items, total, clearCart } = useContext(CartContext);

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold">Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.type} className="border-b py-2">
              {item.type} - {item.price}
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mt-2">Total: {total}</p>
      <button
        className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
        onClick={clearCart}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;

