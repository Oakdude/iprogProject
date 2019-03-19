import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import GuessTheFlag from './components/guessTheFlag/GuessTheFlag'
import GuessTheFlagGame from './components/guessTheFlag/GuessTheFlagGame'
import Home from './components/home/Home'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/GuessTheFlag" render={()=><GuessTheFlag/>} />
              <Route path="/GuessTheFlagGame" render={()=><GuessTheFlagGame/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
