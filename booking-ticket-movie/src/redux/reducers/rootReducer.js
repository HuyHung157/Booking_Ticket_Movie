import {combineReducers} from "redux";
import movieReducer from '../reducers/movieReducer';
import theatresReducer from '../reducers/theatresReducer';
import authReducer from '../reducers/authReducer';
import bookingTicketsReducer from '../reducers/bookingTickets'

const rootReducer = combineReducers ({
    movieReducer, //movieReducer: movieReducer
    theatresReducer,
    authReducer,
    bookingTicketsReducer,
})

export default rootReducer