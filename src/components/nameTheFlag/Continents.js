import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import errorImage from "../images/error.png"


const Continents = () => {

    return (
        <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Africa"}}>
                            <h5 className="card-header">Africa</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Americas"}}>
                            <h5 className="card-header">Americas</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Asia"}}>
                            <h5 className="card-header">Asia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Europe"}}>
                            <h5 className="card-header">Europe</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Oceania"}}>
                            <h5 className="card-header">Oceania</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "World"}}>
                            <h5 className="card-header">World</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Continents;