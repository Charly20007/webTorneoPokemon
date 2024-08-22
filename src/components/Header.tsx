import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header: React.FC = () => {
  const { items } = useContext(CartContext);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Liga Pokémon 2025</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="text-white hover:text-gray-200">
                Entradas
              </Link>
            </li>
            <li>
                <Link to="/cart" className="text-white hover:text-gray-200 flex items-center">
                    Carrito
                        {totalItems > 0 && (
                            <span className="ml-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                                {totalItems}
                            </span>
                        )}
                </Link>
            </li>
            <li>
              <Link to="/trainers" className="text-white hover:text-gray-200">
                Entrenadores
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



