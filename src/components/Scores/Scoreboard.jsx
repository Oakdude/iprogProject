import React, {Component} from 'react'
import "../css/style.css"
import "../css/scoreBoard.css"
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { getScoresThunk, updateContinent } from '../../redux/actions'
import store from '../../redux/store';


const selectorChanged = e => {
    updateContinent(e.target.value);
    console.log("chosen continent is " + e.target.value);
    console.log(store.getState());
};

function Scoreboard({scores, state}){
    // console.log(state);
    let temp = [];
    var count = 0;
    for(var i in scores){
     // console.log(scores[i]);
     temp[count] = scores[i];
     count++;
    }

    let continent = store.getState().continentReducer;

    /*
    * Map array to continent to show the correct continent
    * 0 - africa
    * 1 - americas
    * 2 - asia
    * 3 - europe
    * 4 - ocenia
    * 5 - world
    * */
    let names = ['africa', 'americas', 'asia', 'europe', 'ocenia', 'world'];
    let continentIndex = names.indexOf(continent);
    // console.log("inex of continent is at : " + continentIndex);

    let results = [];

    let temp_res = temp[continentIndex];
    let num = 0;
    for(var j in temp_res){
        results[num] = {
            name: temp_res[j].name,
            score: temp_res[j].score,
            time: temp_res[j].time
        };
        num++;
    }

    let tbody = null;
    switch ("LOADED") {
        case "LOADING":
            tbody = <div className='container loader'></div>;
            break;
        case "LOADED":
            let num = 1;
            tbody = results.map(object => (
                <tr key={num}>
                    <th key="1" scope="col">{num++}</th>
                    <th key="2" scope="col">{object.name}</th>
                    <th key="3" scope="col">{object.score}/10</th>
                    <th key="4" scope="col">{object.time}</th>
                </tr>
            ));
            break;
        default:
            tbody = <tr>
                <th>Failed to load data, please try again</th>
            </tr>;
            break;
    };


    return (
        <React.Fragment>
            <div className="container main">
                <h1 className='title'>Scoreboard</h1>
                <div className='row'>
                    <form>
                        <div className='form-group'>
                            <select className='form-control' onChange={selectorChanged}>
                                <option value='intial'> Choose a continent</option>
                                <option value='africa'> Africa</option>
                                <option value='americas'> Americas</option>
                                <option value='asia'> Asia</option>
                                <option value='europe'> Europe</option>
                                <option value='world'> World</option>

                            </select>
                        </div>
                    </form>
                </div>
                <div className='row'>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th key="11" scope="col">#</th>
                            <th key="22" scope="col">Name</th>
                            <th key="33" scope="col">Score</th>
                            <th key="44" scope="col">Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tbody}
                        </tbody>

                    </table>

                </div>
                <div className='row'>
                    <Link to='/' className='backButton'>
                        <button type="button" className="btn btn-primary">Play Again!</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );

}


const mapStateToProps = state => {
    const { databaseReducer } = state;
    let scores =  databaseReducer[0];

    return {scores, state};
};

const mapState = state => ({
    scores: state
});

const mapDispatch = dispatch => {
     dispatch(getScoresThunk('world'));
    return {
    }
};

export default connect(mapStateToProps, mapDispatch)(Scoreboard);
