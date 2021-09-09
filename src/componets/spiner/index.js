import React from "react";
import './index.css';
import gif from './louding.gif';

const Spiner = () => {
    return (
        <div className="spiner-content">

            <img src={gif} className="img-fluid" alt="spiner"/>

        </div>
    )
}



export default Spiner;