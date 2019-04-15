import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="navbar-nav mr-auto right">
            <li className="nav-item"><Link className="nav-link" to='/'>Scoreboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/'>Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/'>Signup</Link></li>

        </ul>
    )
}

export default SignedOutLinks;