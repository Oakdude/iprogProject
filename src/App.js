import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NameTheFlag from './components/nameTheFlag/NameTheFlag'
import NameTheFlagGame from './components/nameTheFlag/NameTheFlagGame'
import PlaceTheFlag from './components/placeTheFlag/PlaceTheFlag'
import Home from './components/home/Home'
import UserScore from './components/Scores/UserScore'
import EndScreen from './components/EndScreen/EndScreen'


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
              <Route path="/UserScore" render={()=><UserScore/>} />
              <Route path="/EndScreen" render={()=><EndScreen/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
