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
    return <p>Cargando equipo Pokémon...</p>;
  }

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
      <p className="text-gray-600">Equipo Pokémon:</p>
      <ul className="list-disc list-inside">
        {trainer.team.map((pokemon, index) => {
          const pokemonInfo = pokemonData[pokemon.pokemon];
          return (
            <li key={index} className="text-gray-800">
              {pokemonInfo ? (
                <>
                  <img src={pokemonInfo.sprites.front_default} alt={pokemon.pokemon} className="inline-block w-12 h-12 mr-2" />
                  {pokemon.pokemon} - Nivel {pokemon.level} - Tipo(s): {pokemonInfo.types.map(type => type.type.name).join(', ')}
                </>
              ) : (
                `${pokemon.pokemon} - Nivel ${pokemon.level}`
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrainerCard;
