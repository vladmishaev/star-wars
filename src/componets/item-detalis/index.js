import React, { Component } from "react";
import SwapiServer from "../../services";
import Spiner from "../spiner";
import Error from "../error-indicator";

import './index.css';


const Record = ({ item, label, field }) => {
    return (
        <div>{label} : {item[field]}</div>
    )

}

export { Record };

class ItemD extends Component {
    state = {
        item: null,
        louding: false,
        error: false
    }

    getResource = new SwapiServer();


    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.setState({ louding: true })
            this.getItem()
        }
    }

    componentDidCatch() {
        this.setState({ error: true })
    }


    getItem() {
        const { itemId, getData } = this.props;

        getData(itemId)
            .then((item) => {

                this.setState({ item, louding: false })
            })
            .catch(() => {
                this.setState({ error: true })
            });
    }


    render() {
        const { item, louding, error } = this.state;

        if (error) {
            return (
                <Error />
            )
        }



        if (item === null && louding === false) {
            return (
                <div className='item-person'> Please select a character!!!</div>
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
                    <img className="img-fluid" src={item.img} />
                </div>

                <div className="item-detalis-discr">
                    <div>
                        <h2>{item.name}</h2>
                        <div className="detailed-descr">
                            {React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })}
                        </div>
                    </div>
                </div>
            </>

        )
    }

}

export default ItemD;
