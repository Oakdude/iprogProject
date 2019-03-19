import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
    return (


        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto right">
                <li className="nav-item"><Link className="nav-link" to='/'>Scoreboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/'>Profile</Link></li>

            </ul>
        </div>


    )
}

export default SignedInLinks;