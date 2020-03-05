import * as ActionTypes from "../contants/ActionTypes";
import {movieService, theatresServices} from "../../services";
// import Axios from "axios";

export const actGetListMovieCommingAPI = () => {
  return dispatch => {
      movieService.listMovieComming()
      .then(result => {
        dispatch({
          type: ActionTypes.GET_LIST_MOVIES_COMMING,
          listMovieComming: result.data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListMovieShowingAPI = () => {
  return dispatch => {
      movieService.listMovieShowing()
      .then(result => {
        dispatch({
          type: ActionTypes.GET_LIST_MOVIES_SHOWING,
          listMovieShowing: result.data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListMovieAPI = () => {
  return dispatch => {
    movieService.listMovie()
      .then(result => {
        dispatch({
          type: ActionTypes.GET_LIST_MOVIES,
          listMovie: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetDetailMovie = (id) => {
  return dispatch => {
    movieService.detailMovie(id)
    .then(result => {
      dispatch({
        type: ActionTypes.GET_DETAIL_MOVIE,
        movie: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export const actGetListSystemTheatresAPI = () => {
  return dispatch => {
    theatresServices.ListSystemTheatres()
      .then(result => {
        dispatch({
          type: ActionTypes.GET_LIST_SYSTEM_THEATRES,
          listSystemTheatres: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListDetailsTheatresAPI = (SystemTheatres) => {
  return dispatch => {
    theatresServices.DetailTheatres(SystemTheatres)
    .then(result => {
      dispatch({
        type: ActionTypes.GET_DETAIL_BRANCH_THEATRES,
        listBranchTheatres: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export const actSetActiveLogo = activeLogo => {
  return {
    type: ActionTypes.SET_ACTIVE_LOGO,
    activeLogo
  } 
}

export const actSetActiveBranch = activeBranch => {
  return {
    type: ActionTypes.SET_ACTIVE_BRANCH,
    activeBranch
  } 
}

export const actSetActiveListMovie = activeListMovie => {
  return {
    type: ActionTypes.SET_ACTIVE_LISTMOVIE,
    activeListMovie
  } 
}

export const actGetSystemTheatresForCustom = systemTheatresForCustom => {
  return {
    type: ActionTypes.GET_SYSTEM_THEATRES,
    systemTheatresForCustom
  } 
}

// ListShowtime and Infor SystemTheatres
export const actGetListShowtimeTheatresAPI = (SystemTheatres) => {
  return dispatch => {
    theatresServices.ListShowtimeAndInfo(SystemTheatres)
    .then(result => {
      dispatch({
        type: ActionTypes.GET_LIST_SHOWTIME_THEATRES,
        listShowtimeAndInfoTheatres: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
}
//SetDate
export const actSetDate = date => {
  return {
    type: ActionTypes.SET_ACTIVE_LISTMOVIE,
    date
  } 
}
export const actsetActiveDate = activeDate => {
  return {
    type: ActionTypes.SET_ACTIVE_FOR_DATE,
    activeDate
  };
};


// export const actLoginAdmin = (user, history) => {
//   return dispatch => {
//     Axios({
//       method: "POST",
//       url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
//       data:user
//     })
//       .then(result => {
//           console.log(result.data);
//           if(result.data.maLoaiNguoiDung === "QuanTri"){
//             localStorage.setItem("UserAdmin", JSON.stringify(result.data));
//             alert("Login Success");
//             history.push("/dashboard");
//           }else{
//             alert("K co quyen truy cap vao he thong");
//           }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
