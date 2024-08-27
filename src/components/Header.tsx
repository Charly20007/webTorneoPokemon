import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import pokemonLogo from '../assets/logo.png';


const Header: React.FC = () => {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-red-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={pokemonLogo} alt="Logo Pokémon" className="h-10" />
        </Link>        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="text-white hover:text-gray-200 transition duration-300">
                Entradas
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-white hover:text-gray-200 flex items-center transition duration-300">
                Carrito
                {totalItems > 0 && (
                  <span className="ml-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/trainers" className="text-white hover:text-gray-200 transition duration-300">
                Entrenadores
              </Link>
            </li>
          </ul>
        </nav>
        {/* Botón para menú móvil */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <nav className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" className="block text-white hover:text-gray-200 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="block text-white hover:text-gray-200 transition duration-300">
                Entradas
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block text-white hover:text-gray-200 items-center transition duration-300">
                Carrito
                {totalItems > 0 && (
                  <span className="ml-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/trainers" className="block text-white hover:text-gray-200 transition duration-300">
                Entrenadores
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;



