class RickAndMortyService {
    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/character';
    }

    async getAllCharacters() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            const characters = data.results.map(character => ({
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,  // Asegúrate de incluir esta propiedad
                firstSeen: character.origin.name,
                location: character.location.name,
                image: character.image,
                student: 'aqui va el nombre del estudiante',
                code: 'aqui va el codigo del estudiante'
            }));
    
            return characters;
        } catch (error) {
            console.error('Error fetching characters:', error);
            throw error;
        }
    }    
}

export default RickAndMortyService;
