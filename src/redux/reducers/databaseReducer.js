import * as firebase from 'firebase';


export default function databaseReducer (state = [], action){
    switch (action.type) {
        case 'INITILISE_DATABASE':
            return action.scores;
        default:
            return state;
    }
}