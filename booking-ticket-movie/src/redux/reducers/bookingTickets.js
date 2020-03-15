import * as ActionTypes from "./../contants/ActionTypes";

let initialState = {
  listSeat: [],
  listTicket: []
};

const bookingTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_SEAT_BY_CODE_SHOWTIME:
      state.listSeat = action.listSeat;
      return { ...state };
    case ActionTypes.SELECT_SEAT:
      const { seat } = action;
      const { listTicket } = state;
      let _listTicket = [];
      if (!listTicket.find(ve => ve.maGhe === seat.maGhe)) {
        if (!seat.daDat) {
          _listTicket = [
            ...listTicket,
            {
              maGhe: seat.maGhe,
              giaVe: seat.giaVe,
              tenGhe: seat.tenGhe
            }
          ];
        }
      } else {
        listTicket.forEach((ve, index) => {
          if (ve.maGhe === seat.maGhe) {
            listTicket.splice(index, 1);
            _listTicket = [...listTicket];
          }
        });
      }

      state.listTicket = _listTicket;

      return { ...state };
    case ActionTypes.BOOK_LIST_SEAT:
      return { ...state, listTicket: [] };
    case ActionTypes.RESET_LIST_TICKET:
      return { ...state, listTicket: [] };
    default:
      return { ...state };
  }
};

export default bookingTicketsReducer;
