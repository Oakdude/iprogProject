import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"


const Home = () => {
    return (
            <div className="container main">
                <h1 className='title'> Select Game Mode </h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card">
                            <h5 className="card-header">Guess it!</h5>
                            <div className="card-body">
                                <div className='card-text'>Guess (or if you know it) where the flag belongs</div>
                                <Link to='/GuessTheFlag'>
                                    <button type="button" class="btn btn-primary">Play</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card">
                            <h5 className="card-header">Place it!</h5>
                            <div className="card-body">
                                <div className='card-text'>Guess (or if you know it) where the flag belongs</div>
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