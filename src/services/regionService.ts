export interface Region {
    name: string;
    description: string;
}

export const fetchRegionByName = async (regionName: string): Promise<Region | null> => {
    try {
        const response = await fetch('/mocks/regions.json');
        const data: Region[] = await response.json();
        return data.find(r => r.name.toLowerCase() === regionName.toLowerCase()) || null;
    } catch (error) {
        console.error("Error fetching region data:", error);
        throw error;
    }
};
