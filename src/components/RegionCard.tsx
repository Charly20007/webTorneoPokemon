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

    if (loading) return <p>Cargando...</p>;

    return (
        <Link 
            to={`/trainers/${regionName.toLowerCase()}`} 
            className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <h2 className="text-xl font-semibold">{region?.name}</h2>
            <p>{region?.description}</p>
        </Link>
    );
};

export default RegionCard;

