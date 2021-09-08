import React, { Component } from "react";
import Row from "../row";
import ListEl from "../list";
import SwapiServer from "../../../services";
import ItemD, { Record } from "../item-detalis";


const carcassPage = (arrRecordProps, objSwapiReq) => {

    const { getItem, getListItem } = objSwapiReq;

    const renderRecord = arrRecordProps.map((obj, id) => {
        return (
            <Record {...obj} key={id} />
        );
    });

    return class extends Component {
        getResource = new SwapiServer();

        state = {
            itemRender: null
        }

        renderDetalisItem = (id) => {
            this.setState({
                itemRender: id
            })

        }

        render() {
            const renderList = (
                <ListEl funcRender={this.renderDetalisItem}
                    getItems={getListItem} />
            );

            const renderItemDitels = (
                <ItemD itemId={this.state.itemRender} getData={getItem} >
                    {renderRecord}
                </ItemD>
            );


            return (
                <Row left={renderList} right={renderItemDitels} />
            );
        }

    }
}

export default carcassPage;