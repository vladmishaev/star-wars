import React, { Component } from "react";
import Spiner from '../../spiner';
import './index.css';


class ListEl extends Component {

    state = {
        items: null,
        louding: false

    }

    serverRequest() {
        this.props.getItems()
            .then(item => {
                this.setState({ items: item, louding: false })
            });
    }

    componentDidMount() {
        this.setState({ louding: true })
        this.serverRequest();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.getItems !== this.props.getItems) {
            this.setState({ louding: true });
            this.serverRequest();
        }
    }

    renderItemElement(array) {
        const { funcRender } = this.props;
        return array.map(({ name, id }) => {
            return (
                <li key={id} onClick={() => { funcRender(id) }}>
                    <span>{name}</span>
                </li>
            )
        })

    }

    render() {

        const { items, louding } = this.state;

        let content = (louding || items === null) ? <Spiner /> : this.renderItemElement(items);


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