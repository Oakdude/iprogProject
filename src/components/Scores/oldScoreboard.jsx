import React, {Component} from 'react'
import "../css/style.css"
import "../css/scoreBoard.css"
import {Link} from "react-router-dom";
//import fire from '../../fbConfig/fbConfig.js' 
import * as firebase from 'firebase';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    
        // we put on state the properties we want to use and modify in the component
        this.state = {
            state: "LOADING",
            scores: [],
            region: this.props.region
        };

      }

    componentDidMount() {
        console.log("mount");
        console.log(this.props.region);
        
        this.getScoresFromDatabase('nameTheFlag', this.props.region)

    }
  
    componentWillReceiveProps(newProps) {
  
      this.getScoresFromDatabase('nameTheFlag', newProps.region);
    }

    getScoresFromDatabase(game, region) {
        const database = firebase.database();
        let gameRef = database.ref().child(game);
        let regionRef = gameRef.child(region);
        let scores = [];
        regionRef.on('child_added', function(snapshot) {

          scores.push(snapshot.val());
        });

        this.setState({
            status: "LOADED",
            scoresToShow: scores
        });
    }

    writeUserData(game, region, name, time) {
        const database = firebase.database();
        let ref = database.ref().child(game).child(region);
        ref.push().set({
          name: name,
          time: time,
        });

        
      }


    //writeUserData("nameTheFlag", "europe", "vlad-p", "20:24");



      render() {
        let tbody = null;
        switch (this.state.status) {
            case "LOADING":
              tbody = <div className='container loader'></div>;
              break;
            case "LOADED":
                //this.writeUserData('nameTheFlag', 'world', '', '23:32')
                let scores = this.state.scoresToShow;
                console.log("in render: ", scores);
                

                tbody = scores.map(object => (
                  
                <React.Fragment>

                  <tr key = "1">
                      <th key="5" scope="col">#</th>
                      <th key="2" scope="col">{object.name}</th>
                      <th key="3" scope="col">10/10</th>
                      <th key="4" scope="col">{object.time}</th>
                  </tr>
                </React.Fragment>
                
                ));


              
              break;
            default:
              tbody = <tr><th>Failed to load data, please try again</th></tr>;
              break;
          }
        
        return (

            <React.Fragment>

              <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th key="1" scope="col">#</th>
                    <th key="2" scope="col">Name</th>
                    <th key="3" scope="col">Score</th>
                    <th key="4" scope="col">Time</th>
                </tr>
                </thead>
                <tbody>
                  {tbody}
                </tbody>
                
              </table>
                
                
            </React.Fragment>

        )
    }
}
export default Scoreboard;