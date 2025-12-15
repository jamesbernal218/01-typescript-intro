import type { 
    Move,
    PokeapiResponse 
} from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, type HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }
}

const apiAxios = new PokeApiAdapter();
const apiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon( 4, 'Charmander', apiAxios );

charmander.getMoves();
//charmander.gg();
// charmander.speak();
//https://app.quicktype.io/