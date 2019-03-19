import React from 'react'
import "../css/style.css"
import "../css/GuessTheFlag.css"
import {Link} from "react-router-dom";
import placeHolder from "../images/flags/Aussie.png"


const Flags = () => {
    return (
        <div className="container main">
            <div className='row '>
                <div className='flag'>
                    <img src={placeHolder} className="img-fluid" alt="Responsive image" />
                </div>
            </div>
        </div>
    )
}

export default Flags;

