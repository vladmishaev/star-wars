import React from "react";
import './index.css';
import png from './logo.png';
import gif from './header-logo-left.gif';

const Header = ({ navActiv, funRenderLi }) => {

    const ulItem = [
        { name: 'People', id: 'people' },
        { name: 'Starships', id: 'starShips' },
        { name: 'Planets', id: 'planets' }
    ];

    const renderUlItems = ulItem.map((item, index) => {
        const classLi = navActiv === item.id ? 'activ' : null;
        return (
            <li key={index} className={classLi} onClick={() => funRenderLi(item.id)}>
                {item.name}
            </li>
        )

    });

    return (

        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 title">
                        <img className="img-fluid" src={png} alt="logo"/>

                    </div>
                    <div className="col-lg-6 nav">
                        <nav>
                            <ul>
                                {renderUlItems}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid" src={gif} alt="logo-left" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;