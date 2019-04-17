import React, {Component} from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import Options from './Options'


class NameTheFlagGame extends Component {
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
                    return;
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

      handleAnswerClick(index, answer, options){
          let newCount = this.state.count + 1;
        if(options[index] = answer){
                let newScore = this.state.score + 1
            this.setState({
                score: newScore,
                count: newCount
            });
        } else {
            this.setState({
                count: newCount
            });
        }
      }

        processResponse(response) {
            if (response.ok) {
                return response.json();
            }
            console.log(response);
            throw response;
            }

            componentDidMount() {

                this.fetchCountries();
    
              }
            
        
      render() {
        let page = null;
        switch (this.state.status) {
            case "LOADING":
              page = <em>Loading...</em>;
              break;
            case "LOADED":

                console.log("before pop", this.state.answers);
                let answer = this.state.answers.pop();
                console.log("after pop", this.state.answers)

                let answerName = answer[0];
                let answerFlag = answer[1];
                let options= [];
                while (options.length < 3){
                    let a = this.getRandomArrayElement(this.state.countries);
                    a = a[0][0];
                    if(options.includes(a)){
                        return;
                    } else {
                    options.push(a)
                    }
                }
                options.push(answer[0]);
                console.log("options before shuffle: ", options);
                options = this.shuffle(options);
                console.log("options after shuffle: ", options);


                page = 
                <div id="game1div"> 
                    <div id="flag" className='row '>
                        <div className='flag'>
                            <img src={answerFlag} className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>
                

                    <div id="options" className='row'>

                        <div className='col-md-6 col-sm-6 options'>
                            
                                <button id="btn1" type="button" className="btn btn-info" onClick={this.handleAnswerClick(0, answer, options)}>{options[0]}</button>
                           
                        </div>
                        <div className='col-md-6 col-sm-6 options'>
                            <button id="btn2" type="button" className="btn btn-info" onClick={this.handleAnswerClick(1, answer, options)}>{options[1]}</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 options'>
                            <button id="btn3" type="button" className="btn btn-info" onClick={this.handleAnswerClick(2, answer, options)}>{options[2]}</button>
                        </div>
                        <div className='col-md-6 col-sm-6 options'>
                            <button id="btn4" type="button" className="btn btn-info" onClick={this.handleAnswerClick(3, answer, options)}>{options[3]}</button>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="10"
                        aria-valuemin="10" aria-valuemax="100">
                        1/10
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
                
                <div className='row returnButton'>
                    <div className="col-md-3">
                    <Link to='/'>
                        <button type="button" className="btn btn-danger">Exit Game</button>
                    </Link>
                    </div>
                    <div className='title col-md-6'><h3>Name the flag: {this.state.continent}!</h3></div>
                    <div className="col-md-3"></div>
                </div>
                
                
                <div>{page}</div>
                
            </div>
        )
    }
}
export default NameTheFlagGame;