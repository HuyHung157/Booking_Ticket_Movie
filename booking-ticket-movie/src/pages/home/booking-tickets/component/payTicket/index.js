import * as actions from "../../../../../redux/actions";
import { connect } from "react-redux";

import PayTicket from "./payTicket";

const mapStateToProps = state => {
    return {
      listTicket: state.bookingTicketsReducer.listTicket
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      bookListSeat: (data, history) => {
        dispatch(actions.actBookListSeatAPI(data, history));
      }
    };
  };
  
 export default connect(mapStateToProps, mapDispatchToProps)(PayTicket);