import React from 'react'
import "../css/style.css"
import "../css/GuessTheFlag.css"
import {Link} from "react-router-dom";
import Flags from './Flags'
import Options from './Options'


const GuessTheFlagGame = () => {
    return (
        <div className="container main">
            <div className='title'>Time e.g. 0:33</div>
            <div className='row returnButton'>
                <Link to='/'>
                    <button type="button" className="btn btn-primary">Back</button>
                </Link>
                <Link to='/'>
                    <button type="button" className="btn btn-primary">Start Again</button>
                </Link>
            </div>
            <Flags />
            <Options/>
        </div>
    )
}

export default GuessTheFlagGame;