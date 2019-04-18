import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"
import "../css/placeTheFlag.css"
import logo from "../navbar/images/logo-white.png"
import nameitflag from "../images/nameflagimg.jpg"
import placeitflag from "../images/placeflagimg.jpg"
import * as firebase from 'firebase';
import clap from "../images/clapping.gif"

class EndScreen extends Component {
  constructor(props) {
      super(props);
  
      // we put on state the properties we want to use and modify in the component
      this.state = {
          continent: sessionStorage.getItem("continent"),
          score: sessionStorage.getItem("score"),
          time: sessionStorage.getItem("time"),
          username: ""
      };

    }


    writeUserData(game, region, name, score, time) {
      const database = firebase.database();
      let ref = database.ref().child(game).child(region);
      ref.push().set({
        name: name,
        score: score,
        time: time
      });
    }

    handleChange = event => {
      this.setState({ username: event.target.value });
      console.log("user: ", this.state.username);
    };

   handleSubmit = event => {
     if(this.state.username != ""){
      let score = this.state.score + "/10";
     this.writeUserData("nameTheFlag", this.state.continent, this.state.username, score, this.state.time);
     };
     
   }
    
  render() {

    
  
    return (
      <React.Fragment>


            <div className="container main">
            <div className="col-sm-12 col-md-12 col-lg-12">

                
            
                  <div id="game2div">
                  <div className='row returnButton'>
                      <div className="col-md-3">
                          <Link to='/'>
                          <button type="button" className="btn btn-danger">Exit</button>
                          </Link>
                      </div>
                      </div>
                      <div id="TestieHelp2"><h1>Game Complete!</h1></div>
                <div id="TestieHelp2">
                  
                  <h1>Score: {this.state.score}/10</h1><h1>Time: {this.state.time}</h1>
                  <br/>
                  <h3>Save your score and check the scoreboard for the top 10 scores!</h3>
                  <form>
                          
                          <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                          />
                  </form>
                  <br/>
                  <Link to='/'>
                  <button id="submitScore" type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()} >Submit</button>
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
