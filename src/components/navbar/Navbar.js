import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import Logo from './images/logo-white.png'
import "../css/navbar.css"


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to='/' className="navbar-brand" href="#">
                    <img src={Logo} width="30" height="30"
                         className="d-inline-block align-top navLogo" alt="Logo"/>
                         Flag Master
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <SignedInLinks />
            </div>
        </nav> 
    )
}

export default Navbar;