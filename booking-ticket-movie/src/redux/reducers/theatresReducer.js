import * as ActionType from "../contants/ActionTypes";

let initialState = {
  listSystemTheatres: [],
  listBranchTheatres: [],
  activeLogo: 0,
  activeBranch: 0,
  activeListMovie: 0,
  systemTheatresForCustom: "BHDStar",
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
    default:
      return { ...state };
  }
};

export default theatresReducer;
