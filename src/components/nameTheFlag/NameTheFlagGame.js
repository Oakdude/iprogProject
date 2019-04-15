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

              this.setState({status: "LOADED", countries: countries, answers: answers});
          }).catch((error) => {
            console.log("error", error);
            this.setState({
              status: "ERROR"
            });
          });

      }

      fetchdata() { //unused function
        console.log(this.state.continent);
        if(this.state.continent == "world"){
            var url = "https://restcountries.eu/rest/v2/all"
        }else {
        var url = "https://restcountries.eu/rest/v2/region/" + this.state.continent;
        }
        fetch(url)
            .then(this.processResponse)
            .then(data => {
                let list = [];
                for (let country of data){
                    list.append([country.name, country.flag])
                }
                return list;
            })
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


                let country = this.state.answers.pop();
                let countryName = country[0];
                let countryFlag = country[1];
                let wrong= [];
                while (wrong.length < 3){
                    let a = this.getRandomArrayElement(this.state.countries);
                    a = a[0][0];
                    if(wrong.includes(a)){
                        return;
                    } else {
                    wrong.push(a)
                    }
                }
                console.log(wrong);

                page =
                <div id="game1div">
                <div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="10"
                    aria-valuemin="10" aria-valuemax="100">
                    1/10
                    </div>
                </div>

                    <div id="flag" className='row '>
                        <div className='flag'>
                            <img src={countryFlag} className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>


                    <div id="options" className='row'>

                        <div className='col-md-6 col-sm-6 options'>

                                <button id="btn1" type="button" className="btn btn-info">{wrong[0]}</button>

                        </div>
                        <div className='col-md-6 col-sm-6 options'>
                            <button id="btn2" type="button" className="btn btn-info">{wrong[1]}</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 options'>


                            <button id="btn3" type="button" className="btn btn-info">{countryName}</button>

                        </div>
                        <div className='col-md-6 col-sm-6 options'>
                            <button id="btn4" type="button" className="btn btn-info">{wrong[2]}</button>
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
                    <Link to='/NameTheFlag'>
                        <button type="button" className="btn btn-danger">Return</button>
                    </Link>
                    </div>
                </div>


                <div>{page}</div>

            </div>
        );
    }
}
export default NameTheFlagGame;
