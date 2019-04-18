import React, {Component} from 'react'
import "../css/style.css"
import "../css/placeTheFlag.css"
import MapsTest from '../continentMaps/mapsTest'
import {Link} from "react-router-dom"
import FetchACountryFlag from './FetchACountryFlag'
import Timer from "react-compound-timer"
import Map from "../continentMaps/mapAfrica"
class PlaceTheFlagGame extends Component {
    constructor(props) {
        super(props);
    
        // we put on state the properties we want to use and modify in the component
        this.state = {
            score: 0,
            count: 0,
            state: "LOADING",
            continent: this.props.match.params.continent
        };

      }
      getRandomArrayElement(arr){
        //Minimum value is set to 0 because array indexes start at 0.
        var min = 0;
        //Get the maximum value my getting the size of the
        //array and subtracting by 1.
        var max = (arr.length - 1);
        //Get a random integer between the min and max value.
        var randIndex = Math.floor(Math.random() * (max - min)) + min;
        //Return random value.
        return [arr[randIndex], randIndex];
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

      fetchCountries() {
        console.log("chosen continent: ", this.state.continent);
        if(this.state.continent == "World"){
            var url = "https://restcountries.eu/rest/v2/all"
        } else {
        var url = "https://restcountries.eu/rest/v2/region/" + this.state.continent;
        }
        fetch(url)
            .then(this.processResponse)
            .then(data => {
                let list = [];
                for (let country of data){
                    list.push([country.name, country.flag])
                }
                return list;
            })
          .then(countries => {
            let all = countries;
            console.log(countries.length);
            console.log(countries);
            let answers = [];
            while(answers.length < 10){
                let country = this.getRandomArrayElement(countries);
                if (answers.includes(country[0])){
                    continue;
                } else {
                    answers.push(country[0]);
                    countries.splice(country[1], 1);
                
                }
                
            }
            console.log("answers: ", answers);
              this.setState({
                  status: "LOADED",
                  countries: countries,
                  answers: answers
              });
          }).catch((error) => {
            console.log("error", error);
            this.setState({
              status: "ERROR"
            });
          });
          
      }

      handleAnswerClick(userAnswer){
          console.log("user answer: ", userAnswer);
          let newScore = this.state.score;
          let newCount = this.state.count + 1;
          let newArray = this.state.answers;

          let correct = newArray[0][0]
          console.log("[0]", correct)
        
        if(userAnswer === correct){
            console.log("correct!")
            newScore += 1;
        };
        console.log("user score: ", newScore, "count : ", newCount);
        
        //console.log(Timer.Seconds);
        console.log(document.getElementsByClassName(Timer.Minutes));
        if(newCount == 10){
            sessionStorage.setItem("score", newScore);
            //console.log()
            this.props.history.push('/EndScreen');
            
        } else{
            newArray.splice(0,1);

            this.setState({
                score: newScore,
                count: newCount,
                answers: newArray
            });}
    }

    processResponse(response) {
        if (response.ok) {
            return response.json();
        }
        console.log(response);
        throw response;
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

                
                let answer = this.state.answers[0];
                console.log("answer:", answer)

                let answerName = answer[0];
                let answerFlag = answer[1];
                


                page=

                <div>
                    
                        <div id="flag2" className='row '>
                            <div className='flag2'>

                                <img src={answerFlag} className="img-fluid" alt="Responsive image" />
                            </div>
                        </div>


                        <div>
                            
                            <Map />
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
                    <div className="col-md-3">
                    <Link to='/'>
                        <button type="button" className="btn btn-danger">Exit</button>
                    </Link>
                    </div>
                    {/*<div className='title col-md-6'><h3>Name the flag: {this.state.continent}!</h3></div>
                    <div className="col-md-3"></div>*/}
                </div>
                
                
                <div>{page}</div>
                
            </div>
    )
}
}


export default PlaceTheFlagGame;
