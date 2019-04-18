import React, {Component} from 'react'
import "../css/style.css"
import "../css/placeTheFlag.css"
import {Link} from "react-router-dom";




class FetchACountryFlag extends Component {
    constructor(props) {
        super(props);

        // we put on state the properties we want to use and modify in the component
        this.state = {
            state: "LOADING",



        };

      }
time(){
      var sec = 0;
      function pad ( val ) { return val > 9 ? val : "0" + val; }
      setInterval( function(){
          document.getElementById("seconds").innerHTML=pad(++sec%60);
          document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
      }, 1000);

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

            var url = "https://restcountries.eu/rest/v2/all"



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

              this.setState({
                  status: "LOADED",
                  countries: countries,
                  answers: answers,

              });
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

                page =
                <div>


                    <div id="flag2" className='row '>
                        <div className='flag'>

                            <img src={countryFlag} className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>




                </div>





              break;
            default:
              page = <b>Failed to load data, please try again</b>;
              break;
          }


        return (

                <div>{page}</div>
        )
    }
}
export default FetchACountryFlag;
