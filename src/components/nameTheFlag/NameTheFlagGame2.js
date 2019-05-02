import React, {Component} from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import { builtinModules } from 'module';
import Timer from "react-compound-timer"
;
import {modelInstance} from "../../model/gameModel";
import CountryApi from "../../apis";


class NameTheFlagGame2 extends Component {
    constructor(props) {
        super(props);
        console.log("got to constructor");

        // we put on state the properties we want to use and modify in the component
        this.state = {
            startTime: null,
            endTime: null,
            score: 0,
            count: 0,
            state: "LOADING",
            // continent: this.props.match.params.continent,
            results: [],
            correctOptions: [],
            incorrectOptions: []

        };

    }


    fetchCountries() {
        console.log("Fetching from component ");
        //Get ekki notað promise þar sem get countries skilar ekki promise
        let tempArray = [];
        // let tempArray = modelInstance.getCountries();



        Promise.all([
           modelInstance.getCountries()
        ]).then(data => {
            console.log(data);
            tempArray = data[0];
            console.log(data[0]);
        }).catch(() => {
            console.log("error");
        });


        // console.log("TEMP " + tempArray.length);
        // console.log(tempArray[0]);
        // console.log(tempArray[1]);


        //liklega eitthvað vandamál bara mmeð að copy-a yfir
        //verð að passa mutation
        // let correctOptions1 = modelInstance.getCorrectOptions();
        // console.log("her " + correctOptions1);
        // console.log(correctOptions1);
        // console.log(correctOptions1.length);
        // console.log(correctOptions1);


        //alveg möguleiki á að við séum farin út úr aðferðinni áður en við
        //setjum state, en held samt ekki þar em length uppfærist þar "rétt"


        // this.setState(prevState => ({
        //     correctOptions: [...prevState.correctOptions, correctOptions1]
        // }))

        // this.setState({
        //     correctOptions: this.state.correctOptions.concat([correctOptions1])
        // })



        //kannski setja þetta í byrjun appsins?
        // modelInstance.getCountries();
        // const correctOptions = modelInstance.getCorrectOptions();
        // const incorrectOptions = modelInstance.getIncorrectOptions();
        // this.setState({...this.state,
        //         correctOptions: modelInstance.getCorrectOptions(),
        //         incorrectOptions: modelInstance.getIncorrectOptions(),
        //         score: modelInstance.getScore()
        //     }
        // )


    }


    getTime() {
        let end = Date.now();
        let time = -(this.state.startTime-end)/1000;
        console.log(time);
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;
        return minutes.toString().padStart(2, "0") + ":" + Math.round(seconds).toString().padStart(2, "0");
    }

    handleAnswerClick(userAnswer){


        //this.writeUserData("nameTheFlag", "europe", "Rekky", "10", "05:11");


        // console.log("user answer: ", userAnswer);
        // let newScore = this.state.score;
        // let newCount = this.state.count + 1;
        // let newArray = this.state.answers;
        // let results = this.state.results;
        // let correct = newArray[0][0]
        //
        //
        // if(userAnswer === correct){
        //     console.log("correct!")
        //     newScore += 1;
        //     let a = [newArray[0], true];
        //     results.push(a);
        // } else {
        //     let a = [newArray[0], false];
        //     results.push(a);
        // };
        // console.log("user score: ", newScore, "count : ", newCount);
        //
        // //console.log(Timer.Seconds);
        //
        // if(newCount == 10){
        //     let time = this.getTime();
        //     let continent = this.state.continent;
        //     console.log(time);
        //     sessionStorage.setItem("score", newScore);
        //     sessionStorage.setItem("time", time);
        //     sessionStorage.setItem("continent", continent);
        //     sessionStorage.setItem("results", JSON.stringify(results))
        //
        //     //console.log()
        //
        //     this.props.history.push('/EndScreen');
        //
        // } else{
        //     newArray.splice(0,1);
        //
        //     this.setState({
        //         score: newScore,
        //         count: newCount,
        //         answers: newArray,
        //         results: results
        //     });}
    }

    handleClick(){
        console.log("OMG GOT CLLICKED");
        // let score = this.state.score;
        // console.log(score);
    }


    componentDidMount() {
        console.log("mounted");
        this.fetchCountries();
        modelInstance.addObserver(this);
    }

    componentWillUnmount() {
        modelInstance.removeObserver(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState(nextProps);
    }

    update(code) {
        this.setState({correctOptions: modelInstance.getIncorrectOptions()})
    }


    render() {
        let page = null;
        switch (this.state.status) {
            case "LOADING":
                page = <em>Loading...</em>;
                break;
            case "LOADED":


                let answer = this.state.answers[0];
                console.log("answer:", answer)

                let answerName = answer[0];
                let answerFlag = answer[1];
                let options= [];
                while (options.length < 3){
                    let a = this.getRandomArrayElement(this.state.countries);
                    a = a[0][0];
                    if(options.includes(a)){
                        continue;
                    } else {
                        options.push(a)
                    }
                }
                options.push(answerName);
                options = this.shuffle(options);

                page =
                    <div id="game1div">



                        <div className="row" id="gameTimer">
                            <div className="col-md-4 col-sm-12"></div>
                            <div className="col-md-4 col-sm-12">
                                <Timer formatValue={(value) => `${(value < 10 ? `${value}` : value)} `}>

                                    <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                                    <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} />

                                </Timer>
                            </div>
                            <div className="col-md-4 col-sm-12"></div>
                        </div>

                        <div id="flag" className='row '>
                            <div className='flag'>
                                <img src={answerFlag} className="img-fluid" alt="Responsive image" />
                            </div>
                        </div>


                        <div id="options" className='row'>

                            <div className='col-md-6 col-sm-6 options'>

                                <button id="btn1" type="button" className="btn btn-info" value={options[0]} onClick={() => this.handleAnswerClick(options[0])}>{options[0]}</button>

                            </div>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn2" type="button" className="btn btn-info" value={options[1]} onClick={() => this.handleAnswerClick(options[1])}>{options[1]}</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn3" type="button" className="btn btn-info" value={options[2]} onClick={() => this.handleAnswerClick(options[2])}>{options[2]}</button>
                            </div>
                            <div className='col-md-6 col-sm-6 options'>
                                <button id="btn4" type="button" className="btn btn-info" value={options[3]} onClick={() => this.handleAnswerClick(options[3])}>{options[3]}</button>
                            </div>
                        </div>

                    </div>





                break;
            default:
                page = <b>Failed to load data, please try again</b>;
                break;
        }

        var style = {
            border: '2px solid white',
            color:'white'
        };

      ;
        return (

            <div className="container main">

                <div className='row returnButtonGame'>
                    <div id="gameExitBtn">
                        <Link to='/'>
                            <button type="button" className="btn btn-danger">Exit</button>
                        </Link>
                    </div>
                    <div
                        style={style}
                        onClick={this.handleClick}
                    >
                        TEST DRASL
                        {this.state.score}

                    </div>
                    <ul>
                        {this.state.correctOptions.length}
                        {/*{console.log(this.state.correctOptions)}*/}
                        {/*{console.log(this.state.correctOptions[0])}*/}
                        {this.state.correctOptions.map((country) => {
                            // return <li
                            //     // er ekki að mappa rétt?
                            //
                            //     //þarf mað?
                            //     key={country.name}>{country[0].name}
                            // </li>
                        })}
                    </ul>
                    {/*<div className='title col-md-6'><h3>Name the flag: {this.state.continent}!</h3></div>
                    <div className="col-md-3"></div>*/}
                </div>

                {/*loadar leiknum*/}
                <div>{page}</div>

            </div>
        )
    }
}
export default NameTheFlagGame2;