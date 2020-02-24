import * as ActionType from "../contants/ActionTypes";

let initialState = {
  listMovie: [],
  listMovieComming: [],
  listMovieShowing: [],
  movie: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    //Lấy DS tất cả các phim
    case ActionType.GET_LIST_MOVIES:
      state.listMovie = action.listMovie;
      return { ...state };
      //Lấy DS phim đang chiếu
    case ActionType.GET_LIST_MOVIES_SHOWING:
      state.listMovieShowing = action.listMovieShowing;
      return { ...state };
      //Lấy DS phim sắp chiếu
    case ActionType.GET_LIST_MOVIES_COMMING:
      state.listMovieComming = action.listMovieComming;
      return { ...state };
      // Lấy chi tiết của 1 PHIM 
    case ActionType.GET_DETAIL_MOVIE:
      state.movie = action.movie;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
