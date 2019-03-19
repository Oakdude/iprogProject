import React from 'react'
import "../css/style.css"
import "../css/GuessTheFlag.css"
import {Link} from "react-router-dom";
import placeHolder from "../images/flags/Aussie.png"


const Flags = () => {
    return (
        <div className="container main">
            <div className='row '>
               <div className='col-md-4 align-self-center'>
                   <div className='col-md-6'>
                       <button type="button" className="btn btn-info">Option 1</button>
                   </div>
                   <div className='col-md-6'>
                       <button type="button" className="btn btn-info">Option 1</button>
                   </div>
               </div>
            </div>
            <div className='row '>
                <div className='col-md-4 align-self-center'>
                    <div className='col-md-6'>
                        <button type="button" className="btn btn-info">Option 1</button>
                        <button type="button" className="btn btn-info">Option 2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flags;

