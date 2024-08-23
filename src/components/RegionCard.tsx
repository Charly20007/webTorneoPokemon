import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRegionByName, Region } from '../services/regionService';

interface RegionCardProps {
    regionName: string;
}

const RegionCard: React.FC<RegionCardProps> = ({ regionName }) => {
    const [region, setRegion] = useState<Region | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRegionData = async () => {
            try {
                const foundRegion = await fetchRegionByName(regionName);
                setRegion(foundRegion);
            } catch (error) {
                console.error("Error fetching region data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadRegionData();
    }, [regionName]);

    if (loading) return <p className="text-center text-lg">Cargando...</p>;

    return (
        <Link 
            to={`/trainers/${regionName.toLowerCase()}`} 
            className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
        >
            <h2 className="text-2xl font-bold">{region?.name}</h2>
            <p className="mt-2 text-sm">{region?.description}</p>
            <div className="mt-4 flex justify-end">
                <span className="bg-white text-blue-600 rounded-full px-3 py-1 text-xs font-semibold">
                    Ver Entrenadores
                </span>
            </div>
        </Link>
    );
};

export default RegionCard;


