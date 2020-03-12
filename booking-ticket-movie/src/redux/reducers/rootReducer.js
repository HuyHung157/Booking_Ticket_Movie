import {combineReducers} from "redux";
import movieReducer from '../reducers/movieReducer';
import theatresReducer from '../reducers/theatresReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers ({
    movieReducer, //movieReducer: movieReducer
    theatresReducer,
    authReducer,
})

export default rootReducer