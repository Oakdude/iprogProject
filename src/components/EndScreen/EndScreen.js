import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "../css/style.css"
import {modelInstance} from "../../model/gameModel";

class EndScreen extends Component {
    constructor(props) {
        super(props);

        // we put on state the properties we want to use and modify in the component
        this.state = {
            continent: modelInstance.getFinalContinent(),
            score: modelInstance.getFinalScore(),
            time: modelInstance.getFinalTime(),
            results: JSON.parse(sessionStorage.getItem("results")),
            username: ""
        };
    }


    handleChange = event => {
        this.setState({username: event.target.value});
    };

    handleSubmit = event => {
        if (this.state.username !== "" && this.state.score === "10") {
            modelInstance.writeUserData("nameTheFlag", this.state.continent, this.state.username, this.state.score, this.state.time);
        }
    };


    renderTable = () => {
        return this.state.results.map(result => {
            let resColor = "";
            if (result[1]) {
                resColor = "#01D51A";
            } else {
                resColor = "#FE2427";
            }

            const imgStyle = {
                width: "40px",
                height: "auto",
                "box-shadow": "2px 2px 2px black"
            };
            const tdStyle = {
                color: resColor

            };
            const tableStyle = {
                margin: "10px",
                "margin-left": "110px",
                "text-shadow": "2px 2px 2px black"
            };
            return (
                <font size="5">
                    <table style={tableStyle}>
                        <tr>
                            <td style={tdStyle}><img style={imgStyle} src={result[0][1]}/> {result[0][0]}</td>
                        </tr>
                    </table>
                </font>
            )
        })
    };

    render() {
        return (
            <React.Fragment>
                <div className="container main">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div id="endscreen">
                            <div className='row'>

                                <div className="col-md-6 endscreen"><h1>Game Complete!</h1></div>
                                <div className="col-md-6 endscreen"><h1>Score: {this.state.score}/10</h1>
                                    <h1>Time: {this.state.time}</h1></div>
                            </div>

                            <div id="TestieHelp2">
                                <div>{this.renderTable()}</div>
                                <br/>
                                <h3>Save your score and check the scoreboard for the top 10 scores!</h3>
                                <form id="endscreenForm">

                                    <input
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </form>
                                <br/>
                                <Link to='/'>
                                    <button id="submitScore" type="submit" className="btn btn-primary"
                                            onClick={() => this.handleSubmit()}>Submit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EndScreen;
