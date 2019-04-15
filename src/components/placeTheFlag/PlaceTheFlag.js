import React from 'react'
import "../css/style.css"
import "../css/placeTheFlag.css"
import MapsTest from '../nameTheCountry/mapsTest'
import {Link} from "react-router-dom"
import FetchACountryFlag from './FetchACountryFlag'


const Selection = () => {
    return (
        <div className="container main">

            <div className='row returnButton'>
                <div className="col-md-3">
                    <Link to='/'>
                    <button type="button" className="btn btn-danger">Return</button>
                    </Link>
                </div>
                <div id="game2div">
                <div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="10"
                    aria-valuemin="10" aria-valuemax="100">
                    1/10
                    </div>
                </div>
                  <FetchACountryFlag />
<MapsTest />
                </div>

            </div>


        </div>
    )
}

export default Selection;
