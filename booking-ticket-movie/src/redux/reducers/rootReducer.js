import {combineReducers} from "redux";
import movieReducer from '../reducers/movieReducer';

const rootReducer = combineReducers ({
    movieReducer //movieReducer: movieReducer
})

export default rootReducer