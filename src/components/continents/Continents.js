import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import errorImage from "../images/error.png"
import asiaImg from "../regionImages/Asia.jpeg"
import europeImg from "../regionImages/Europe.jpeg"
import africaImg from "../regionImages/Africa.jpeg"
import southamericaImg from "../regionImages/SouthAmerica.jpeg"




const Continents = () => {

    return (
        <div className="container">
        <div className="row continentsRow1">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "NameTheFlagGame/" + "Africa"}}>
                            
                            <img className="card-img-top" src={africaImg} alt="Card cap"/>
                            <h5 className="card-header text-white">Africa</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "NameTheFlagGame/" + "Americas"}}>
                            
                            <img className="card-img-top" src={southamericaImg} alt="Card cap"/>
                            <h5 className="card-header text-white">Americas</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "NameTheFlagGame/" + "Asia"}}>
                            
                            <img className="card-img-top" src={asiaImg} alt="Card cap"/>
                            <h5 className="card-header text-white">Asia</h5>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="row continentsRow2">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "NameTheFlagGame/" + "Europe"}}>
                            
                            <img className="card-img-top" src={europeImg} alt="Card cap"/>
                            <h5 className="card-header text-white">Europe</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "NameTheFlagGame/" + "Oceania"}}>
                            
                            <img className="card-img-top" src={errorImage} alt="Card cap"/>
                            <h5 className="card-header text-white">Oceania</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "NameTheFlagGame/" + "World"}}>
                            
                            <img className="card-img-top" src={errorImage} alt="Card cap"/>
                            <h5 className="card-header text-white">World</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Continents;