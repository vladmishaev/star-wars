import React from "react";
import './index.css';
import gif from './error2.gif';

const Error = () => {
    return (
        <div className="error-indicator">
            <div className="img-error-box">
                <img src={gif} alt="error"/>
            </div>
            <div>
                <h3 className="boom">BOOM!</h3>
                <p>something has gone terribly wrong </p>
                <p>(but we already sent droids to fix it)</p>
            </div>
        </div>
    )
}

export default Error;