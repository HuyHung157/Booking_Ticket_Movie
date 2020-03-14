import * as ActionType from "../contants/ActionTypes";

let initialState = {
  listSystemTheatres: [],
  listBranchTheatres: [],
  listShowtimeAndInfoTheatres: [],
  allListMovie: [],
  activeLogo: 0,
  activeBranch: 0,
  activeListMovie: 0,
  systemTheatresForCustom: "BHDStar",
  activeDate: "2019-01-01",
  date: Date.parse("01/01/2019"),
  exactly: false,
};

const theatresReducer = (state = initialState, action) => {
  switch (action.type) {
    //Lấy DS tất cả các LOGO rạp
    case ActionType.GET_LIST_SYSTEM_THEATRES:
      state.listSystemTheatres = action.listSystemTheatres;
      return { ...state };
    //Lấy DS chi nhánh
    case ActionType.GET_DETAIL_BRANCH_THEATRES:
      state.listBranchTheatres = action.listBranchTheatres;
      return { ...state };
    case ActionType.SET_ACTIVE_LOGO:
      state.activeLogo = action.activeLogo;
      return { ...state };
    case ActionType.SET_ACTIVE_BRANCH:
      state.activeBranch = action.activeBranch;
      return { ...state };
    case ActionType.SET_ACTIVE_LISTMOVIE:
      state.activeListMovie = action.activeListMovie;
      return { ...state };
      case ActionType.GET_SYSTEM_THEATRES:
      state.systemTheatresForCustom = action.systemTheatresForCustom;
      return { ...state };
      case ActionType.GET_LIST_SHOWTIME_THEATRES:
      state.listShowtimeAndInfoTheatres = action.listShowtimeAndInfoTheatres[0];
      return { ...state };
      case ActionType.SET_DATE:
        state.date = parseInt(action.date);
        return { ...state };
        case ActionType.SET_ACTIVE_FOR_DATE:
          state.activeDate = action.activeDate;
          return { ...state };
          case ActionType.GET_EXACTLY:
          state.exactly = action.exactly;
          return { ...state };
    default:
      return { ...state };
  }
};

export default theatresReducer;
