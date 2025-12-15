export const pokemonIds = [1, 20, 30, 40, 66];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'bulbasaour',
}

export const charmandar:Pokemon = {
    id: 0,
    name: ""
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmandar, bulbasaur)
console.log(pokemons);
