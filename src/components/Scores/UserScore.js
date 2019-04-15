import React from 'react'
import "../css/style.css"
import "../css/scoreBoard.css"
import Table from "./Table"
import {Link} from "react-router-dom";



const UserScore = () => {
    return (
        <div className="container main">
            <h1 className='title'>Quiz Complete</h1>
            <div className='row'>
                <form>
                    <div className='form-group'>
                        <select className='form-control'>
                            <option value='0'> Australia </option>
                            <option value='1'> Australia Option Expand </option>
                            <option value='2'> Australia </option>
                            <option value='3'> Australia </option>
                        </select>
                    </div>
                </form>
            </div>
            <div className='row'>
                <Table />
            </div>
            <div className='row'>
                <Link to='/' className='backButton'>
                    <button type="button" className="btn btn-primary">Play Again!</button>
                </Link>
            </div>
        </div>
    )
}

export default UserScore;