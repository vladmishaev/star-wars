import React, { Component } from "react";
import Row from "../row";
import ListEl from "../list";
import SwapiServer from "../../../services";

import ItemD, { Record } from "../item-detalis";


import './index.css';


class PagePerson extends Component {

    getResource = new SwapiServer();

    state = {
        itemRender: null
    }

    renderDetalisItem = (id) => {
        this.setState({
            itemRender: id
        })

    }

    renderList() {
        return (
            <ListEl funcRender={this.renderDetalisItem}
                getItems={this.getResource.getAllPeople} />
        )

    }

    renderItemDitels() {
        return (
            <ItemD itemId={this.state.itemRender}
                getData={this.getResource.getPerson} >

                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye-Color' />
            </ItemD>
        )
    }


    render() {

        return (
            <Row left={this.renderList()} right={this.renderItemDitels()} />
        );


    }
}

export default PagePerson;


