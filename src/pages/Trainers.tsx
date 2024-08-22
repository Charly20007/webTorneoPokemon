import Layout from "../components/Layout";
import RegionCard from "../components/RegionCard";

const Trainers: React.FC = () => {
    const regions = ['Kanto', 'Sinnoh', 'Hoenn', 'Kalos'];

    return (
        <Layout>
            <div className="text-center my-8">
                <h1 className="text-2xl font-bold mb-4">¿Conoces al top 10 de entrenadores por región?</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {regions.map(region => (
                        <RegionCard key={region} regionName={region} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Trainers;


