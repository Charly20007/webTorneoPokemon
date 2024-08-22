import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
        </div>
    </Layout>
  );
};

export default NotFound;