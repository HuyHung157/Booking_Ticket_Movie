import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import BookingTickets from "./booking-tickets";

const mapStateToProps = (state) => {
    return {
      listSeat: state.bookingTicketsReducer.listSeat,
    //   listTicket: state.bookingTicketsReducer.listTicket
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getListSeatByCodeShowtime: codeShowtime => {
        dispatch(actions.actGetListSeatByCodeShowtimeAPI(codeShowtime));
      },
      resetListTicket: () => {
        dispatch(actions.actResetListTicket());
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(BookingTickets);