import React from 'react'
import "../css/style.css"
import "../css/placeTheFlag.css"
import MapsTest from '../continentMaps/mapsTest'
import {Link} from "react-router-dom"
import FetchACountryFlag from './FetchACountryFlag'
import Timer from "timer-machine"


const Selection = () => {

    const timerFun = () => {

        var timer = new Timer();

        timer.start()
        setInterval(timer.emitTime.bind(timer), 1000)
    }

    console.log("I'M HERE");
  //  timerFun();

    return (
        <div className="container main">

            <div id="game2div">
                <div id="gameTimer">
                    <h2>{timerFun()}</h2>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <FetchACountryFlag />
                    </div>
                    <div className='col-md-6'>
                        <MapsTest />
                    </div>
                </div>
            </div>
            < div className="row exit">
                <Link to='/'>
                    <button type="button" className="btn btn-danger">Exit Game </button>
                </Link>
            </div>
        </div>
    )
}

export default Selection;
