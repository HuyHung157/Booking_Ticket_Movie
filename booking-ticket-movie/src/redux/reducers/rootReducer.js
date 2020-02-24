import {combineReducers} from "redux";
import movieReducer from '../reducers/movieReducer';
import theatresReducer from '../reducers/theatresReducer';

const rootReducer = combineReducers ({
    movieReducer, //movieReducer: movieReducer
    theatresReducer
})

export default rootReducer