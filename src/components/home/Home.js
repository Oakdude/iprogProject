import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style.css"
import nameitflag from "../images/nameflagimg.jpg"
import placeitflag from "../images/placeflagimg.jpg"


const Home = () => {

    return (
        <div className="container selectscreen">
            <div id="gameSelectCards" className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <Link to='/NameTheFlag'>
                        <div className="card text-white bg-info mb-3" id="nameitCard">
                            <img className="card-img-top" src={nameitflag} alt="Card image cap"></img>
                            <div className="card-body">

                                <h4>NAME THE FLAG!</h4>

                                <div className='card-text'>In this game your task is to connect a flag with its
                                    corresponding country. Choose between six continents or the whole world, and test
                                    your geography skills. Good luck!
                                </div>

                                <br/>
                                <h5>CLICK TO PLAY</h5>

                            </div>

                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card text-white bg-secondary mb-3" id="placeitCard">
                        <img className="card-img-top" src={placeitflag} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4>PLACE THE FLAG!</h4>
                            <div className='card-text'>In this game your task is to identify a flag's corresponding
                                country on an interactive map. Test how well you know the world map in this cool game
                                mode. Good luck!
                            </div>

                            <br/>
                            <h5>COMING SOON</h5>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;
