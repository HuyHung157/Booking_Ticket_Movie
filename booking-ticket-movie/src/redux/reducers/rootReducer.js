import {combineReducers} from "redux";
import movieReducer from '../reducers/movieReducer';
import theatresReducer from '../reducers/theatresReducer';
import theatresDMReducer from '../reducers/theatresDMReducer'
import authReducer from '../reducers/authReducer';
import bookingTicketsReducer from '../reducers/bookingTickets'

const rootReducer = combineReducers ({
    movieReducer, //movieReducer: movieReducer
    theatresReducer,
    theatresDMReducer,
    authReducer,
    bookingTicketsReducer,
})

export default rootReducer