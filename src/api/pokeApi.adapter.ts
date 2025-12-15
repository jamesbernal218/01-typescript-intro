import axios from "axios";

export interface HttpAdapter {

    get<T>( url: string ): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {

    async get<T>( url: string ): Promise<T> {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

}

export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios;

    async get<T>( url: string ):Promise<T> {
        console.log('con axios');
        const { data } = await this.axios.get<T>(url);
        return data;
    }
}