import React from "react";
import './index.css';
import gif from './louding.gif';

const Spiner = () => {
    return (
        <div className="spiner-content">

            <img src={gif} className="img-fluid"/>
            {/* <div className="loadingio-spinner-double-ring-fm7f2ov1o78"><div className="ldio-0yc7x7alsjhk">
                <div></div>
                <div></div>
                <div><div></div></div>
                <div><div></div></div>
            </div></div> */}
        </div>
    )
}



export default Spiner;