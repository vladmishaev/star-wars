import React from "react";
import './index.css';

const Header = () => {
    return (

        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 title">
                        <h2>Star DB</h2>
                    </div>
                    <div className="col-lg-9">
                        <nav>
                            <ul>
                                <li className="activ">People</li>
                                <li>Starships</li>
                                <li>Planets</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;