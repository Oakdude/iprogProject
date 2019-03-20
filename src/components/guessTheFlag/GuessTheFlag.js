import React from 'react'
import "../css/style.css"
import "../css/GuessTheFlag.css"
import Countries from './Countries'
import {Link} from "react-router-dom";


const Selection = () => {
    return (
        <div className="container main">
            <h1 className='title'>Choose A Continent!</h1>
            <div className='row'>
                <Link to='/' className='returnButton'>
                    <button type="button" class="btn btn-primary">Choose another game</button>
                </Link>
            </div>
            <Countries />
        </div>
    )
}

export default Selection;