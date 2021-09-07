class SwapiServer {

    constructor(apiBase = 'https://swapi.dev/api') {
        this.apiBase = apiBase;
        this.ingBase = 'https://starwars-visualguide.com/assets/img';
    }

    getResource = async (url) => {
        const res = await fetch(`${this.apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch:${this.apiBase}${url}\n received:${res.status}`);
        }
        const bady = await res.json();
        return bady;
    }

    getAllPeople = async () => {
        const res = await this.getResource('/people/');
        return res.results.map(person => {
            return this._tranformPerson(person);
        });
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._tranformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');
        return res.results.map(planet => {
            return this._tranformPlanet(planet);
        });
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._tranformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource('/starships/');
        return res.results.map(ships => {
            return this._tranformStarship(ships);
        });
    }
    getStarship = async (id) => {
        const ship = await this.getResource(`/starships/${id}/`);
        return this._tranformStarship(ship);
    }

    _extractId(url) {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];

    }


    _tranformPerson({ name, gender, eye_color: eyeColor, birth_year: birthYear, url }) {
        const idE = this._extractId(url);
        return {
            id: idE,
            name,
            gender,
            eyeColor,
            birthYear,
            img:`${this.ingBase}/characters/${idE}.jpg`
        }

    }

    _tranformStarship({ name, length, model, crew, url }) {
        const idE = this._extractId(url);
        return {
            id: idE,
            name,
            length,
            model,
            crew,
            img:`${this.ingBase}/starships/${idE}.jpg`

        }
    }

    _tranformPlanet({ name, population, rotation_period: ratationPeriod, diameter, url }) {
        const idE = this._extractId(url);
        return {
            id: idE,
            name,
            population,
            ratationPeriod,
            diameter,
            img:`${this.ingBase}/planets/${idE}.jpg`
        }

    }
}



export default SwapiServer;