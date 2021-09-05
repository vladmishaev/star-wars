import React from "react";
import './index.css';


const RandomPlanets = () => {

    return (

        <div className="random-planets">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="img-block">
                            <img className="img-fluid" src="https://hi-news.ru/wp-content/uploads/2015/04/Mars1.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-auto div-description">
                        <div>
                            <h2>Kashyyy</h2>
                            <div>
                                <div>Population:9534424</div>
                                <div>Ratation Period:26</div>
                                <div>Diameter:12765</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default RandomPlanets;