import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import errorImage from "../images/error.png"
import asiaImg from "../regionImages/Asia.jpeg"
import europeImg from "../regionImages/Europe.jpeg"
import africaImg from "../regionImages/Africa.jpeg"
import southamericaImg from "../regionImages/SouthAmerica.jpeg"
import australiaImg from "../regionImages/Australia.jpeg"
import worldImg from "../regionImages/World.jpeg"





const ContinentsPlaceTheFlag = () => {

    return (
        <div className="container">
        <div className="row continentsRow1">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "PlaceTheFlag2"}}>

                            <img className="card-img-top" src={africaImg} alt="Card image cap"/>
                            <h5 className="card-header text-white">Africa</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "PlaceTheFlagGame/" + "Americas"}}>

                            <img className="card-img-top" src={southamericaImg} alt="Card image cap"/>
                            <h5 className="card-header text-white">Americas</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "PlaceTheFlagGame/" + "Asia"}}>

                            <img className="card-img-top" src={asiaImg} alt="Card image cap"/>
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
                        <Link to={{pathname: "PlaceTheFlagGame/" + "Europe"}}>

                            <img className="card-img-top" src={europeImg} alt="Card image cap"/>
                            <h5 className="card-header text-white">Europe</h5>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className='cardButton'>
                    <div className="card text-white bg-dark mb-3">
                        <Link to={{pathname: "PlaceTheFlagGame/" + "World"}}>

                            <img className="card-img-top" src={worldImg} alt="Card image cap"/>
                            <h5 className="card-header text-white">World</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContinentsPlaceTheFlag;
