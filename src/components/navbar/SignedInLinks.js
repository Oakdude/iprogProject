import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
    return (
    
        <ul className="navbar-nav mr-auto right">
            <li className="nav-item"><Link className="nav-link" to='/'>Scoreboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/'>Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/'>Logout</Link></li>

        </ul>
    )
}

export default SignedInLinks;