import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NameTheFlag from './components/nameTheFlag/NameTheFlag'
import NameTheFlagGame from './components/nameTheFlag/NameTheFlagGame'

import NameTheFlagGame3 from './components/nameTheFlag/NameTheFlagGame3'

import PlaceTheFlag from './components/placeTheFlag/PlaceTheFlagNew'
import PlaceTheFlag2 from './components/placeTheFlag/PlaceTheFlag'

import PlaceTheFlagGame from './components/placeTheFlag/PlaceTheFlagGame'
import Home from './components/home/Home'
import UserScore from './components/Scores/UserScore'
import EndScreen from './components/EndScreen/EndScreen'
import Scoreboard from './components/Scores/Scoreboard'
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
              <Route path="/NameTheFlagGame/:continent" render = {(props) => <NameTheFlagGame3 {...props} />} />
              {/*<Route path="/NameTheFlagGame3/:continent" render = {(props) => <NameTheFlagGame3 {...props} />} />*/}

              <Route path="/PlaceTheFlag" render={()=><PlaceTheFlag/>} />
              <Route path="/PlaceTheFlag2" render={()=><PlaceTheFlag2/>} />

              <Route path="/PlaceTheFlagGame/:continent" render={(props) => <PlaceTheFlagGame {...props}/>} />
              <Route path="/UserScore" render={()=><Scoreboard/>} />
              <Route path="/EndScreen" render={(props)=><EndScreen {...props}/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
