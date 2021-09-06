import React, { Component } from "react";
import './index.css';

import Header from "../header";
import RandomPlanets from "../random-planets";
import ListEl from "../list";
import PresonD from "../person-detalis";

class Add extends Component {



    render() {
        return (
            <>
                <div className="bag-stars"></div>
                <div className="animation-stats"></div>
                <Header />
                <RandomPlanets />
                <div className="container">
                    <div className="row">
                        <ListEl />
                        <div className="col-lg-6 item-detalis-col">
                            <div className="item-detalis">
                                <PresonD />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }

};

export default Add;