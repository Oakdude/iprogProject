import React from 'react'
import "../css/style.css"
import "../css/GuessTheFlag.css"
import {Link} from "react-router-dom";
import errorImage from "../images/error.png"


const Countries = () => {

    return (
        <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='GuessTheFlagGame'>
                            <h5 className="card-header">Australia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='#'>
                            <h5 className="card-header">Australia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='#'>
                            <h5 className="card-header">Australia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='#'>
                            <h5 className="card-header">Australia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='#'>
                            <h5 className="card-header">Australia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='#'>
                            <h5 className="card-header">Australia</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to='#'>
                            <h5 className="card-header">All</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries;