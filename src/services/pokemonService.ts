export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: Array<{ type: { name: string } }>;
  }
  
  export const fetchPokemonByName = async (pokemonName: string): Promise<Pokemon | null> => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error(`Error fetching data for ${pokemonName}`);
      }
      const data: Pokemon = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return null;
    }
  };
  