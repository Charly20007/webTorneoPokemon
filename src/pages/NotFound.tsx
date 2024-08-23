import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Página no encontrada</h1>
        <p className="text-lg text-gray-700 mb-6">Lo sentimos, la página que estás buscando no existe.</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
        >
          Volver a Inicio
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
