import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-10 col-md-5 col-md-offset-2">
                        <div className="card">
                            <div className="card-body">
                                <Link to='/'>Game mode 1</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-2">
                        <div className="card">
                            <div className="card-body">
                                <Link to='/'>Game mode 2</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default Home;