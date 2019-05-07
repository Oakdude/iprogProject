import * as firebase from 'firebase';

import store from './store';

/**
 * ACTION CREATORS
 */
export function initialiseDatabase(scores) {
    return {type: 'INITILISE_DATABASE', scores};
}


export function updateContinent(continent) {
    store.dispatch({
        type: 'UPDATE_CONTINENT',
        continent
    })
}


export function getScoresThunk() {
    const database = firebase.database();
    return dispatch => {
        const scores = [];
        database.ref('/').orderByChild('time').limitToFirst(10).once('value', snap => {
            snap.forEach(data => {
                let score = data.val();
                scores.push(score)
            })
        })
            .then(() => dispatch(initialiseDatabase(scores)))
    }
}


