interface TicketCardProps {
    type: string;
    price: string;
    onAddToCart: () => void;
    onRemoveFromCart: () => void; // Nueva prop para quitar del carrito
  }
  
  const TicketCard: React.FC<TicketCardProps> = ({ type, price, onAddToCart, onRemoveFromCart }) => {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold">{type}</h2>
        <p className="text-gray-700">Precio: {price}</p>
        <div className="flex space-x-2 mt-2">
          <button
            className="bg-green-500 text-white py-1 px-4 rounded"
            onClick={onAddToCart}
          >
            Agregar al carrito
          </button>
          <button
            className="bg-red-500 text-white py-1 px-4 rounded"
            onClick={onRemoveFromCart}
          >
            Quitar del carrito
          </button>
        </div>
      </div>
    );
  };
  
  export default TicketCard;
  
