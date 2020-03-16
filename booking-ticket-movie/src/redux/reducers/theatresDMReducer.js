import * as ActionTypes from "./../contants/ActionTypes";

let initialState = {
  listShowtimesAndInfo: {},
  numberActiveDMLogo: 0
};

const theatresDMReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_SHOWTIMES_BY_CODE_MOVIE:
      state.listShowtimesAndInfo = action.listShowtimesAndInfo;
      return { ...state };
    case ActionTypes.SET_ACTIVE_FOR_DMLOGO:
      state.numberActiveDMLogo = action.numberActiveDMLogo;
      return { ...state };
    default:
      return { ...state };
  }
};

export default theatresDMReducer;
