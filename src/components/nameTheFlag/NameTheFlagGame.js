import React, {Component} from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import {builtinModules} from 'module';
import Timer from "react-compound-timer"
import {modelInstance1} from "../../model/gameModel";


class NameTheFlagGame extends Component {
    constructor(props) {
        super(props);

        // we put on state the properties we want to use and modify in the component
        this.state = {
            startTime: null,
            endTime: null,
            score: 0,
            count: 0,
            state: "LOADING",
            continent: this.props.match.params.continent,
            results: []
        };
    }

    fetchCountries() {
        modelInstance1.getAllCountries(this.state.continent).then(data => {
            let list = [];
            for (let country of data) {
                list.push([country.name, country.flag])
            }
            return list;
        }).then(countries => {
            let all = countries;
            let answers = [];

            while (answers.length < 10) {
                let country = modelInstance1.getRandomArrayElement(countries);
                if (answers.includes(country[0])) {
                    continue;
                } else {
                    answers.push(country[0]);
                    countries.splice(country[1], 1);
                }
            }

            let start = Date.now();
            this.setState({
                status: "LOADED",
                startTime: start,
                countries: countries,
                answers: answers
            })
        }).catch((error) => {
            console.log("error", error);
            this.setState({
                status: "ERROR"
            });

        });
    };


    handleAnswerClick(userAnswer) {

        let newScore = this.state.score;
        let newCount = this.state.count + 1;
        let newArray = this.state.answers;
        let results = this.state.results;
        let correct = newArray[0][0];

        if (userAnswer === correct) {
            newScore += 1;
            let a = [newArray[0], true];
            results.push(a);
        } else {
            let a = [newArray[0], false];
            results.push(a);
        }

        //Game is over after 10 rounds and switches to endscreen
        if (newCount === 10) {
            modelInstance1.endGame(
                this.state.startTime,
                this.state.continent,
                newScore, results,
                this.props);
        } else {
            newArray.splice(0, 1);
            this.setState({
                score: newScore,
                count: newCount,
                answers: newArray,
                results: results
            });
        }
    }

    componentDidMount() {
        console.log("mounted");
        this.fetchCountries();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState(nextProps);
    }

    render() {
        let page = null;
        switch (this.state.status) {
            case "LOADING":
                page = <em>Loading...</em>;
                break;
            case "LOADED":

                // let game = this.setGame();
                let game = modelInstance1.setGame(this.state.answers[0], this.state.countries);

                let answerName = game[0];
                let answerFlag = game[1];
                let options = game[2];

                page =
                    <div id="game1div">
                        <div className="row" id="gameTimer">
                            <div className="col-md-4 col-sm-12"></div>
                            <div className="col-md-4 col-sm-12">
                                <Timer formatValue={(value) => `${(value < 10 ? `${value}` : value)} `}>
                                    <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                    <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                                </Timer>
                            </div>
                            <div className="col-md-4 col-sm-12"></div>
                        </div>

                        <div id="flag" className='row '>
                            <div className='flag'>
                                <img src={answerFlag} className="img-fluid" alt="Responsive image"/>
                            </div>
                        </div>

                        <div id="options" className='row'>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn1" type="button" className="btn btn-info" value={options[0]}
                                        onClick={() => this.handleAnswerClick(options[0])}>{options[0]}</button>
                            </div>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn2" type="button" className="btn btn-info" value={options[1]}
                                        onClick={() => this.handleAnswerClick(options[1])}>{options[1]}</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn3" type="button" className="btn btn-info" value={options[2]}
                                        onClick={() => this.handleAnswerClick(options[2])}>{options[2]}</button>
                            </div>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn4" type="button" className="btn btn-info" value={options[3]}
                                        onClick={() => this.handleAnswerClick(options[3])}>{options[3]}</button>
                            </div>
                        </div>
                    </div>

                break;
            default:
                page = <b>Failed to load data, please try again</b>;
                break;
        }

        return (
            <div className="container main">
                <div className='row returnButtonGame'>
                    <div id="gameExitBtn">
                        <Link to='/'>
                            <button type="button" className="btn btn-danger">Exit</button>
                        </Link>
                    </div>
                </div>
                <div>{page}</div>

            </div>
        )
    }
}

export default NameTheFlagGame;