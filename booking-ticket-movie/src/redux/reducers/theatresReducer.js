import * as ActionType from "../contants/ActionTypes";

let initialState = {
  listLogoTheatres: [],
  listBranchTheatres: [],
  listMovieTheatres: [],
  theatres: {},
};

const theatresReducer = (state = initialState, action) => {
  switch (action.type) {
    //Lấy DS tất cả các phim
    case ActionType.GET_LIST_LOGO_THEATRES:
      state.listLogoTheatres = action.listLogoTheatres;
      return { ...state };
      //Lấy DS phim đang chiếu
    // case ActionType.GET_LIST_MOVIES_SHOWING:
    //   state.listMovieShowing = action.listMovieShowing;
    //   return { ...state };
      
    default:
      return { ...state };
  }
};

export default theatresReducer;
