import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NameTheFlag from './components/nameTheFlag/NameTheFlag'
import Home from './components/home/Home'
import EndScreen from './components/EndScreen/EndScreen'
import Scoreboard from './components/Scores/Scoreboard'
import NameTheFlagGame from './components/nameTheFlag/NameTheFlagGame'

//redux stuff
import initialiseDatabase from "./redux/actions";
import store from './redux/store';
import {Provider} from 'react-redux'



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/NameTheFlag" render={() => <NameTheFlag/>}/>
                            <Route path="/NameTheFlagGame/:continent"
                                   render={(props) => <NameTheFlagGame {...props} />}/>
                            <Route path="/UserScore" render={() => <Scoreboard/>}/>
                            <Route path="/EndScreen" render={(props) => <EndScreen {...props}/>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
