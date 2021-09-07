import React, { Component } from "react";
import Spiner from "../spiner";
import Error from "../error-indicator";

import './index.css';
import SwapiServer from "../../services";


class RandomPlanets extends Component {
    constructor() {
        super();
        this.getResource = new SwapiServer();
        this.state = {
            planet: {},
            loading: true,
            error: false
        };


    }

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 10000)
    }



    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    }

    onError = () => {
        this.setState({ error: true })
    }


    updatePlanet = () => {
        const id = Math.floor(Math.random() * (21 - 2) + 2);

        this.getResource.getPlanet(id)
            .then((data) => {
                this.onPlanetLoaded(data);
            })
            .catch(this.onError);

    }

    render() {
        const { planet, loading, error } = this.state;



        let content = loading ? <Spiner /> : <PlanetView planet={planet} />;
        content = error ? <Error /> : content;


        return (
            <div className="random-planets">
                <div className="container">
                    <div className="row" >
                        {content}
                    </div>
                </div>
            </div>
        )

    }

}


const PlanetView = ({ planet }) => {
    const { id, name, population, ratationPeriod, diameter,img } = planet;

    return (
        <>
            <div className="col-lg-3">
                <div className="img-block">
                    <img className="img-fluid" src={img} />
                </div>
            </div>
            <div className="col-lg-auto div-description">
                <div>
                    <h2>{name}</h2>
                    <div>
                        <div>Population - {population}</div>
                        <div>Ratation Period - {ratationPeriod}</div>
                        <div>Diameter - {diameter}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomPlanets;