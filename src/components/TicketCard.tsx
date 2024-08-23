interface TicketCardProps {
    type: string;
    price: string;
    onAddToCart: () => void;
    onRemoveFromCart: () => void;
  }
  
  const TicketCard: React.FC<TicketCardProps> = ({ type, price, onAddToCart, onRemoveFromCart }) => {
    return (
        <div className="bg-white border rounded-2xl shadow-lg p-8 max-w-md mx-auto">
  <div className="mb-6 flex flex-col items-center">
    <h3 className="text-2xl font-semibold text-gray-800">{type}</h3>
    <div className="mt-2 text-center">
      <p className="text-sm text-gray-500">Precio</p>
      <h3 className="text-2xl font-bold text-gray-800">{price}</h3>
    </div>
  </div>

  <div className="flex justify-center items-center mb-8">
    <div className="flex space-x-2">
      <div className="w-1 h-20 bg-black rounded"></div>
      <div className="w-1 h-20 bg-black rounded"></div>
      <div className="w-1 h-20 bg-gray-300 rounded"></div>
      <div className="w-2 h-20 bg-black rounded"></div>
      <div className="w-1 h-20 bg-gray-300 rounded"></div>
      <div className="w-1 h-20 bg-black rounded"></div>
      <div className="w-3 h-20 bg-black rounded"></div>
      <div className="w-1 h-20 bg-gray-300 rounded"></div>
      <div className="w-1 h-20 bg-black rounded"></div>
      <div className="w-2 h-20 bg-black rounded"></div>
      <div className="w-1 h-20 bg-gray-300 rounded"></div>
      <div className="w-1 h-20 bg-black rounded"></div>
      <div className="w-1 h-20 bg-black rounded"></div>
    </div>
  </div>

  <div className="flex justify-between space-x-4">
    <button
      className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
      onClick={onAddToCart}
    >
      Agregar
    </button>
    <button
      className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition"
      onClick={onRemoveFromCart}
    >
      Quitar
    </button>
  </div>
</div>

    );
  };
  
  export default TicketCard;
  
  
