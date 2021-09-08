import React, { Component } from "react";
import Spiner from '../../spiner';
import Error from '../../error-indicator';
import './index.css';


class ListEl extends Component {

    state = {
        items: null,

    }

    serverRequest() {
        this.props.getItems()
            .then(item => {
                this.setState({ items: item })
            });
    }

    componentDidMount() {
        this.serverRequest();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.getItems !== this.props.getItems) {
            this.setState({ items: null });
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