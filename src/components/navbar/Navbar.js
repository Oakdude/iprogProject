import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to='/' className="navbar-brand">FlagMaster</Link>
                <SignedInLinks />
                <SignedOutLink />
            </div>
        </nav> 
    )
}

export default Navbar;