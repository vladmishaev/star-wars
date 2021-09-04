class SwapiServer {

    constructor(apiBase = 'https://swapi.dev/api') {
        this.apiBase = apiBase;
    }

    async getResource(url) {
        const res = await fetch(`${this.apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch:${this.apiBase}${url}\n received:${res.status}`);
        }
        const bady = await res.json();
        return bady;
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }
    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results;
    }
    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results;
    }
    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}

export default SwapiServer;