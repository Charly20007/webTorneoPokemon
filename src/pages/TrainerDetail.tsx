import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchTrainersByRegion, Trainer } from '../services/trainerService';
import Layout from '../components/Layout';
import TrainerCard from '../components/TrainerCard';

const TrainerDetail: React.FC = () => {
  const { regionName } = useParams<{ regionName: string }>();
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrainers = async () => {
      try {
        const data = await fetchTrainersByRegion(regionName || '');
        setTrainers(data);
      } catch (error) {
        console.error('Error loading trainers:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrainers();
  }, [regionName]);

  if (loading) {
    return <p>Cargando entrenadores...</p>;
  }

  if (!trainers.length) {
    return <p>No se encontraron entrenadores para la región {regionName}.</p>;
  }

  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Top 10 Entrenadores de la Región {regionName}
          </h2>
          <Link to="/trainers">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Volver a Entrenadores
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TrainerDetail;


