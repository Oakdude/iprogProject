import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import * as firebase from 'firebase';
import store from "./redux/store";
// import initialiseDatabase from "./redux/actions";

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "flagmaster3000.firebaseapp.com",
    databaseURL: "https://flagmaster3000.firebaseio.com",
    projectId: "flagmaster3000",
    storageBucket: "flagmaster3000.appspot.com",
    messagingSenderId: "33300595381"
  };
 firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));


// store.dispatch(initialiseDatabase());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
