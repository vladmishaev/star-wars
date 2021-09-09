import React from "react";
import './index.css';


const Row = ({ left, right }) => {
    return (
        <div className="container row-companet">
            <div className="row">
                {left}
                <div className="col-lg-6 item-detalis-col">
                    <div className="item-detalis">
                        {right}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row;
