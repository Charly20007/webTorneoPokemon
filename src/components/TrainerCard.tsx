import { useEffect, useState } from 'react';
import { fetchPokemonByName, Pokemon } from '../services/pokemonService';
import { Trainer } from '../services/trainerService';

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  const [pokemonData, setPokemonData] = useState<Record<string, Pokemon | null>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemonData = async () => {
      try {
        const data: Record<string, Pokemon | null> = {};
        for (const pokemon of trainer.team) {
          const fetchedPokemon = await fetchPokemonByName(pokemon.pokemon);
          data[pokemon.pokemon] = fetchedPokemon;
        }
        setPokemonData(data);
      } catch (error) {
        console.error('Error loading Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemonData();
  }, [trainer.team]);

  if (loading) {
    return <p className="text-center text-lg">Cargando equipo Pokémon...</p>;
  }

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white transition-transform transform hover:scale-105">
      <h3 className="text-2xl text-center font-bold mb-2 text-blue-600">{trainer.name}</h3>
      <p className="text-gray-700 mb-4">Equipo Pokémon:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trainer.team.map((pokemon, index) => {
          const pokemonInfo = pokemonData[pokemon.pokemon];
          return (
            <li key={index} className="flex items-center border rounded-lg p-2 shadow-md bg-gray-100">
              {pokemonInfo ? (
                <>
                  <img
                    src={pokemonInfo.sprites.front_default}
                    alt={pokemon.pokemon}
                    className="inline-block w-16 h-16 mr-3"
                  />
                  <div>
                    <p className="font-semibold">{pokemon.pokemon}</p>
                    <p className="text-gray-600">Nivel {pokemon.level}</p>
                    <p className="text-gray-500">
                      Tipo(s): {pokemonInfo.types.map(type => type.type.name).join(', ')}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col">
                  <p className="font-semibold">{pokemon.pokemon}</p>
                  <p className="text-gray-600">Nivel {pokemon.level}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrainerCard;

