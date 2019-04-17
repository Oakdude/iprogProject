import React, {Component} from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import errorImage from "../images/error.png"
import asiaImg from "../regionImages/Asia.jpeg"
import europeImg from "../regionImages/Europe.jpeg"
import africaImg from "../regionImages/Africa.jpeg"
import southamericaImg from "../regionImages/SouthAmerica.jpeg"


//rename to Setup

class Continents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            regions: ['Europe', 'World', 'Asia', 'Ocenia', 'Americas', 'Africa'],
            chosenRegion: 'None of these are used i dont think'
        };
    }

    handleContinentClick = () => {

        console.log("Continent Clicked: ");
        console.log("Store: ", store.getState());
        this.setFlagArray();
    };

    GetTen(){

    let array1 = [];
    for(var i = 0; i < 10; i++){
        var x = Math.floor(Math.random()*249) + 1;
        if(array1.indexOf(x) === -1) array1.push(x);

    }
    console.log("hej", array1);

    //console.log("tja", store.getState().guessTheFlag[array1[0]]); 
    let tenCountries = [];
    for(var i = 0; i < 10; i++){
        tenCountries.push(store.getState().guessTheFlag[array1[i]]); 
    
    }

    console.log(tenCountries);

    }
    render() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Africa"}}>
                            <h5 className="card-header">Africa</h5>
                            <img className="card-img-top" src={africaImg} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Americas"}}>
                            <h5 className="card-header">Americas</h5>
                            <img className="card-img-top" src={southamericaImg} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Asia"}}>
                            <h5 className="card-header">Asia</h5>
                            <img className="card-img-top" src={asiaImg} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Europe"}}>
                            <h5 className="card-header">Europe</h5>
                            <img className="card-img-top" src={europeImg} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "Oceania"}}>
                            <h5 className="card-header">Oceania</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className='cardButton'>
                    <div onClick={this.handleContinentClick} className="card">
                        <Link to={{pathname: "NameTheFlagGame/" + "World"}}>
                            <h5 className="card-header">World</h5>
                            <img className="card-img-top" src={errorImage} alt="Card image cap"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Continents;