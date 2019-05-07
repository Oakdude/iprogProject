import {combineReducers} from "redux/es/redux";
import databaseReducer from './databaseReducer';
import continentReducer from './continentReducer';


export default combineReducers({
    databaseReducer,
    continentReducer
});