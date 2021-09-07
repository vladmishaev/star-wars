import React, { Component } from "react";
import './index.css';

import Header from "../header";
import RandomPlanets from "../random-planets";
import ListEl from "../list";
import SwapiServer from '../../services';
import ItemD, { Record } from "../item-detalis";




class App extends Component {

    getResource = new SwapiServer();

    state = {
        itemRender: null,
        navHeader: 'people'
    }

    settingGetResList = {
        ['people']: this.getResource.getAllPeople,
        ['starShips']: this.getResource.getAllStarships,
        ['planets']: this.getResource.getAllPlanets

    }


    getFunForList() {
        const activNavHead = this.state.navHeader;
        return this.settingGetResList[activNavHead];

    }

    setNavHeader = (id) => {
        this.setState({
            navHeader: id,

        })
    }


    renderDetalisItem = (id) => {
        this.setState({
            itemRender: id
        })

    }





    render() {
        const { itemRender, navHeader } = this.state;

        const personDetalis = (
            <ItemD itemId={itemRender}
                getData={this.getResource.getPerson} />

        );
        const starshipDetalis = (
            <ItemD itemId={itemRender}
                getData={this.getResource.getStarship} >

                <Record field='length' label='Length' />
                <Record field='model' label='Model' />
            </ItemD>
        );
        return (
            <>

                <div className="bag-stars"></div>
                <div className="animation-stats"></div>
                <Header navActiv={navHeader}
                    funRenderLi={this.setNavHeader} />
                <RandomPlanets />
                <div className="container">
                    <div className="row">
                        <ListEl funcRender={this.renderDetalisItem}
                            getItems={this.getFunForList()} />
                        <div className="col-lg-6 item-detalis-col">
                            <div className="item-detalis">
                                {starshipDetalis}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )

    }

};

export default App;