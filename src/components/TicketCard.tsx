interface TicketCardProps {
  type: string;
  price: string;
  onAddToCart: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ type, price, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold">{type}</h2>
      <p className="text-gray-700">Precio: {price}</p>
      <button
        className="mt-2 bg-green-500 text-white py-1 px-4 rounded"
        onClick={onAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default TicketCard;
