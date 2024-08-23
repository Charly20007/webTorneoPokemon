import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import batallaImage from '../assets/batalla.jpg';
import entradaImage from '../assets/entradas.jpeg'
import entrenadoresImage from '../assets/entrenadores.jpeg'


const Home = () => {
    return (
        <Layout>
            <div className="flex items-center justify-between my-10 px-4">
                <div className="text-center flex-1 mx-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a la Liga Pokémon 2025</h1>
                    <p className="text-lg mb-6">Explora el evento, compra entradas, y conoce a los mejores entrenadores.</p>
                    <Link to="/tickets" className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
                        Compra tus Entradas
                    </Link>
                </div>
            </div>
            <section className="py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">¿Qué puedes esperar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
                    <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
                        <img src={batallaImage} alt="Competencias Épicas" className="w-full h-32 object-cover rounded mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Competencias Épicas</h3>
                        <p>Únete a las batallas entre los mejores entrenadores de la región y demuestra tu habilidad.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
                        <img src={entradaImage} alt="Entradas Exclusivas" className="w-full h-32 object-cover rounded mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Entradas Exclusivas</h3>
                        <p>Compra entradas para acceder a áreas especiales y obtener mercancía exclusiva del evento.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
                        <img src={entrenadoresImage} alt="Conoce a tus Ídolos" className="w-full h-32 object-cover rounded mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Conoce a tus Ídolos</h3>
                        <p>Interactúa con tus entrenadores favoritos y obtén autógrafos en un ambiente divertido y emocionante.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Home;
