import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"
import logo from "../navbar/images/logo-white.png"


const Home = () => {
    return (
            <div className="container main">
            
                <h1 className='title'> <img src={logo} width="30" height="30"
                alt=""/>  Select Game Mode <img src={logo} width="30" height="30"
                alt=""/></h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
              
                        <div className="card" id="nameitCard">
                            <h5 className="card-header">Name the flag!</h5>
                            <div className="card-body">
                                <div className='card-text'>In this game your task is to connect a flag with its corresponding country. Choose between six continents or the whole world, and test your geography skills. Good luck! </div>
                                <Link to='/NameTheFlag'>
                                    <button type="button" className="btn btn-primary">Play</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card" id="placeitCard">
                            <h5 className="card-header">Place the flag!</h5>
                            <div className="card-body">
                                <div className='card-text'>This game mode is not done, so dont you dare try this one. Open your eyes and look to the left, there you have a somewhat playable mode (That is actually not even close to playable).</div>
                                <Link to='/'>
                                    <button type="button" className="btn btn-primary">Play</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default Home;