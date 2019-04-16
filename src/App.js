import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NameTheFlag from './components/nameTheFlag/NameTheFlag'
import NameTheFlagGame from './components/nameTheFlag/NameTheFlagGame'
import PlaceTheFlag from './components/placeTheFlag/PlaceTheFlag'
import Home from './components/home/Home'
import Scoreboard from './components/Scores/Scoreboard'
import UserScore from './components/Scores/UserScore'
//import fire from './fbConfig/fbConfig.js'
import * as firebase from 'firebase';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/NameTheFlag" render={()=><NameTheFlag/>} />
              <Route path="/NameTheFlagGame/:continent" render = {(props) => <NameTheFlagGame {...props} />} />
              <Route path="/PlaceTheFlag" render={()=><PlaceTheFlag/>} />
              <Route path="/UserScore" render={()=><Scoreboard/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
