import React, { Component } from "react";
import SwapiServer from '../../services';
import Spiner from '../spiner';
import Error from '../error-indicator'
import ItemList from "../item-list";
import './index.css';

class ListEl extends Component {
    getResource = new SwapiServer();
    state = {
        items: null,

    }

    componentDidMount() {
        return this.getResource.getAllPeople()
            .then(person => {
                this.setState({ items:person })
            })
    }

    renderItemElement(array) {
        const { funcRender } = this.props;
        return array.map(({ name, id }) => {
            return (
                <li key={id} onClick={() => { funcRender(id) }}>
                    <ItemList name={name} />
                </li>
            )
        })

    }

    render() {
        const { items } = this.state;

        let content = items ? this.renderItemElement(items) : <Spiner />;


        return (
            <div className="col-lg-6 list-items-col" >
                <div className="list-items-content">
                    <ul>
                        {content}
                    </ul>

                </div>
            </div>
        )
    }

}

export default ListEl;