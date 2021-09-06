import React, { Component } from "react";
import './index.css';

import Header from "../header";
import RandomPlanets from "../random-planets";
import ListEl from "../list";
import PresonD from "../person-detalis";

class Add extends Component {

    state = {
        person: null
    }


    renderDetalisItem = (id) => {
        this.setState({
            person: id
        })

    }


    render() {
        const { person } = this.state;
        return (
            <>
                <div className="bag-stars"></div>
                <div className="animation-stats"></div>
                <Header />
                <RandomPlanets />
                <div className="container">
                    <div className="row">
                        <ListEl funcRender={this.renderDetalisItem} />
                        <div className="col-lg-6 item-detalis-col">
                            <div className="item-detalis">
                                <PresonD personId={person} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }

};

export default Add;