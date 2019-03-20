import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import placeHolder from "../images/flags/Aussie.png"


const Flags = () => {
    return (
        <div>
            <div className='row'>

                   <div className='col-md-6 options'>
                       <Link to='/UserScore'>
                           <button type="button" className="btn btn-info">Country Name</button>
                       </Link>
                   </div>
                   <div className='col-md-6 options'>
                       <button type="button" className="btn btn-info">Country Name</button>
                   </div>
            </div>
            <div className='row'>
                <div className='col-md-6 options'>
                    <button type="button" className="btn btn-info">Country Name</button>
                </div>
                <div className='col-md-6 options'>
                    <button type="button" className="btn btn-info">Country Name</button>
                </div>
            </div>
        </div>
    )
}

export default Flags;

