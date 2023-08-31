import RickAndMortyService from './service';

const service = new RickAndMortyService();

function createCharacterCard(character) {
    let statusColorClass = '';
    let statusDotColor = '';

    if (character.status === 'Alive') {
        statusColorClass = 'alive';
        statusDotColor = 'green';
    } else if (character.status === 'Dead') {
        statusColorClass = 'dead';
        statusDotColor = 'red';
    } else {
        statusColorClass = 'unknown';
        statusDotColor = 'gray';
    }

    return `<div class="character-card">
        <img src="${character.image}" alt="${character.name}" />
        <div class="character-info">
            <h2 class="${statusColorClass}">${character.name}</h2>
            <p class="${statusColorClass}">
                <span class="status-dot" style="background-color: ${statusDotColor};"></span>
                ${character.status} - ${character.species}
            </p>
            <p class="${statusColorClass} text-gray">Last known location:</p>
            <p class="${statusColorClass}">${character.location}</p>
            <p class="${statusColorClass} text-gray">First seen in:</p>
            <p class="${statusColorClass}">${character.firstSeen}</p>
        </div>
    </div>`;
}




function addCharacterListeners(character) {
    character.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

async function createCharacterList() {
    const container = document.getElementById('characterContainer');
    
    try {
        const characters = await service.getAllCharacters();
        const table = document.createElement('table');
        let row;

        characters.forEach((character, index) => {
            if (index % 3 === 0) {
                row = document.createElement('tr');
            }

            const cell = document.createElement('td');
            cell.innerHTML = createCharacterCard(character);
            addCharacterListeners(cell, character);
            
            row.appendChild(cell);

            if ((index + 1) % 3 === 0 || index === characters.length - 1) {
                table.appendChild(row);
            }
        });

        container.appendChild(table);
    } catch (error) {
        console.error('Error creating character list:', error);
    }
}


function addCharacterListeners(characterCard, character) { // Recibe el objeto character aquí
    characterCard.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

createCharacterList();