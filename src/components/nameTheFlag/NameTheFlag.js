import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import Continents from './Continents'
import {Link} from "react-router-dom";


const Selection = () => {
    return (
        <div className="container main">
            <h1 className='title'>Choose A Continent!</h1>
            <div className='row'>
                <Link to='/' className='returnButton'>
                    <button type="button" className="btn btn-primary">Choose another game</button>
                </Link>
            </div>
            <Continents />
        </div>
    )
}

export default Selection;