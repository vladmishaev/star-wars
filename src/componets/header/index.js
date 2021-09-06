import React from "react";
import './index.css';
import png from './logo.png';
import gif from './header-logo-left.gif';

const Header = () => {
    return (

        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 title">
                        <img className="img-fluid" src={png} />

                    </div>
                    <div className="col-lg-6 nav">
                        <nav>
                            <ul>
                                <li className="activ">People</li>
                                <li>Starships</li>
                                <li>Planets</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                    <img className="img-fluid" src={gif} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;