import React, {Component} from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import Timer from "react-compound-timer"

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

      handleAnswerClick(userAnswer){
          console.log("user answer: ", userAnswer);
          let newScore = this.state.score;
          let newCount = this.state.count + 1;
          let newArray = this.state.answers;
          newArray.splice(0,1);

        if(userAnswer == this.state.answers[0]){
            newScore += 1;
        };
        console.log("user score: ", newScore, "count : ", newCount);
        if(newCount == 10){
            sessionStorage.setItem("score", newScore);
            //console.log()
            this.props.history.push('/EndScreen');
            
        } else{
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

                this.fetchCountries();
    
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
                        return;
                    } else {
                    options.push(a)
                    }
                }
                options.push(answerName);
                options = this.shuffle(options);
                
                page = 
                <div id="game1div"> 

                <div id="gameTimer">

                <Timer formatValue={(value) => `${(value < 10 ? `${value}` : value)} `}>

                <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} />

                </Timer></div>
                
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

                    <h5 className='subtitle'>1/10</h5>
                    
                </div>

                


              break;
            default:
              page = <b>Failed to load data, please try again</b>;
              break;
          }
        

        return (
            <div className="container main">
                
                
                <div>{page}</div>

                < div className="row exit">
                    <Link to='/'>
                        <button type="button" className="btn btn-danger">Exit Game </button>
                    </Link>
                </div>
                
            </div>
        )
    }
}
export default NameTheFlagGame;