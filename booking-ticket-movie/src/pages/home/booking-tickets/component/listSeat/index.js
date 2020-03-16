import { connect } from "react-redux";
import * as actions from "../../../../../redux/actions";

import ListSeat from "./listSeat";

const mapStateToProps = (state) => {
    return {
        listTicket: state.bookingTicketsReducer.listTicket
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSeat: seat => {
            dispatch(actions.actSelectSeat(seat));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSeat);