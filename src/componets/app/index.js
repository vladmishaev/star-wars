import React, { Component } from "react";
import './index.css';

import Header from "../header";
import RandomPlanets from "../random-planets";

import SwapiServer from '../../services';

import PagePerson from "../page-list-and-detalis/page-person";




class App extends Component {

    getResource = new SwapiServer();

    state = {
        navHeader: 'people'
    }

    setNavHeader = (id) => {
        this.setState({
            navHeader: id,

        })
    }


    render() {
        const { navHeader } = this.state;


        return (
            <>

                <div className="bag-stars"></div>
                <div className="animation-stats"></div>
                <Header navActiv={navHeader}
                    funRenderLi={this.setNavHeader} />
                <RandomPlanets />


                <PagePerson />

            </>
        )

    }

};

export default App;