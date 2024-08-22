export interface Pokemon {
    pokemon: string;
    level: number;
  }
  
  export interface Trainer {
    id: number;
    name: string;
    region: string;
    team: Pokemon[];
  }
  
  export const fetchTrainersByRegion = async (regionName: string): Promise<Trainer[]> => {
    try {
      let response;
      switch (regionName.toLowerCase()) {
        case 'kanto':
            response = await fetch('/mocks/trainers_kanto.json');
            break;
        case 'kalos':
            response = await fetch('/mocks/trainers_kalos.json');
            break;
        case 'hoenn':
            response = await fetch('/mocks/trainers_hoenn.json');
            break;
        case 'sinnoh':
            response = await fetch('/mocks/trainers_sinnoh.json');
            break;
        default:
        throw new Error('Región no soportada');
      }
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al obtener los datos');
      }
    } catch (error) {
      console.error('Error al obtener los datos', error);
      throw error;
    }
  };
  