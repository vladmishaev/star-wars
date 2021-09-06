import React, { Component } from "react";
import SwapiServer from "../../services";
import Spiner from "../spiner";
import Error from "../error-indicator";

import './index.css';

class PresonD extends Component {
    state = {
        person: null,
        louding: false,
        error: false
    }

    getResource = new SwapiServer();


    componentDidUpdate(prevProps) {
        if (prevProps.personId !== this.props.personId) {
            this.setState({ louding: true })
            this.getPerson(this.props.personId)
        }
    }

    componentDidCatch() {
        this.setState({ error: true })
    }


    getPerson(id) {
        this.getResource.getPerson(id)
            .then((person) => {
                this.setState({ person, louding: false })
            })
            .catch(() => {
                this.setState({ error: true })
            });
    }


    render() {
        const { person, louding, error } = this.state;

        if (error) {
            return (
                <Error />
            )
        }



        if (person === null && louding === false) {
            return (
                <div className='null-person'> Please select a character!!!</div>
            )
        }

        if (louding) {
            return (
                <Spiner />

            )
        }

        return (
            <>
                <div className="img-block">
                    <img className="img-fluid" src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} />
                </div>

                <div className="item-detalis-discr">
                    <div>
                        <h2>{person.name}</h2>
                        <div className="detailed-descr">
                            <div>Gender : {person.gender}</div>
                            <div>Eye Color : {person.eyeColor}</div>
                            <div>Birth Year : {person.birthYear}</div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

}

export default PresonD;