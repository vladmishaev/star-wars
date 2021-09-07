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
        return res.results.map(person => {
            return this._tranformPerson(person);
        });
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._tranformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results.map(planet => {
            return this._tranformPerson(planet);
        });
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._tranformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results.map(ships => {
            return this._tranformPerson(ships);
        });
    }
    getStarship(id) {
        const ship = this.getResource(`/starships/${id}/`);
        return this._tranformPlanet(ship);
    }

    _extractId(url) {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];

    }


    _tranformPerson({ name, gender, eye_color: eyeColor, birth_year: birthYear, url }) {
        return {
            id: this._extractId(url),
            name,
            gender,
            eyeColor,
            birthYear
        }

    }

    _tranformPlanet({ name, population, rotation_period: ratationPeriod, diameter, url }) {
        return {
            id: this._extractId(url),
            name,
            population,
            ratationPeriod,
            diameter
        }

    }
}



export default SwapiServer;