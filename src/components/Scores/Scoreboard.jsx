import React, {Component} from 'react'
import "../css/style.css"
import "../css/scoreBoard.css"
import {Link} from "react-router-dom";
//import fire from '../../fbConfig/fbConfig.js' 
import * as firebase from 'firebase';
import {modelInstance1} from "../../model/gameModel1";

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        // we put on state the properties we want to use and modify in the component
        this.state = {
            // status: "LOADING",
            status:"LOADED",
            scoresToShow:  modelInstance1.getScoresFromDatabase('nameTheFlag', 'world'),
            region: "world",
            number: 1
        };

    }

    componentDidMount() {
        let scores =  modelInstance1.getScoresFromDatabase('nameTheFlag', 'world');

        this.setState({
            scoresToShow: scores,
            status: "LOADED"
        });
        console.log(scores);
    }

    getScoresFromDatabase(game, region) {
        // let scores = modelInstance1.getScoresFromDatabase(game, region);


        const database = firebase.database();
        let regionRef = database.ref().child(game).child(region).orderByChild('time').limitToFirst(10);
        let scores = [];
        regionRef.on('child_added', function(snapshot) {
            console.log("ye");
            scores.push(snapshot.val());
        });
        console.log("SCORES " + scores);
        this.setState({
            scoresToShow: scores,
            status: "LOADED"
        });
    }

    update() {
        // this.getScoresFromDatabase('nameTheFlag', this.state.region);
        let scores = modelInstance1.getScoresFromDatabase();
        this.setState({
            scoresToShow: scores,
            status: "LOADED"
        });
    }

    selectorChanged = e => {
        this.setState({
            status: "LOADING",
            region: e.target.value
        });
        console.log(this.state.region);
        this.getScoresFromDatabase('nameTheFlag', e.target.value);
    };


    render() {
        let tbody = null;
        switch (this.state.status) {
            case "LOADING":
                tbody = <div className='container loader'></div>;
                break;
            case "LOADED":
                let scores = this.state.scoresToShow;
                let num = 1;
                tbody = scores.map(object => (
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
        }

        return (
            <React.Fragment>
                <div className="container main">
                    <h1 className='title'>Scoreboard</h1>
                    <div className='row'>
                        <form>
                            <div className='form-group'>
                                <select className='form-control' onChange={this.selectorChanged}>
                                    <option value='world'> World</option>
                                    <option value='africa'> Africa</option>
                                    <option value='americas'> Americas</option>
                                    <option value='asia'> Asia</option>
                                    <option value='europe'> Europe</option>
                                    <option value='oceania'> Oceania</option>

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
        )
    }
}

export default Scoreboard;