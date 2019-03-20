import React, {Component} from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import {Link} from "react-router-dom";
import Flags from './Flags'
import Options from './Options'


class NameTheFlagGame extends Component {
    constructor(props) {
        super(props);
    
        // we put on state the properties we want to use and modify in the component
        this.state = {
            continent: this.props.match.params.continent
        };

      }

      fetchFlags() {
        var url = "https://restcountries.eu/rest/v2/region/" + this.state.continent;
        fetch(url)
            .then(this.processResponse)
            .then(data => {
                for (let country of data){
                    console.log(country.name, country.flag)
                }
            })
        }

        processResponse(response) {
            if (response.ok) {
                return response.json();
            }
            console.log(response);
            throw response;
            }
        
      render() {
        this.fetchFlags();
        return (
            <div className="container main">
                <div className='title'><h3>{this.state.continent}</h3></div>
                <div className='row returnButton'>
                    <Link to='/'>
                        <button type="button" className="btn btn-primary">Back</button>
                    </Link>
                    <Link to='/'>
                        <button type="button" className="btn btn-primary">Start Again</button>
                    </Link>
                </div>
                <Flags />
                <Options/>
            </div>
        )
    }
}
export default NameTheFlagGame;