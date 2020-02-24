import * as ActionTypes from "../contants/ActionTypes";
import {movieService, theatresServices} from "../../services";
import Axios from "axios";

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

export const actGetListLogoTheatresAPI = () => {
  return dispatch => {
    theatresServices.ListLogoTheatres()
      .then(result => {
        console.log(result);
        dispatch({
          type: ActionTypes.GET_LIST_LOGO_THEATRES,
          listLogoTheatres: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actLoginAdmin = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data:user
    })
      .then(result => {
          console.log(result.data);
          if(result.data.maLoaiNguoiDung === "QuanTri"){
            localStorage.setItem("UserAdmin", JSON.stringify(result.data));
            alert("Login Success");
            history.push("/dashboard");
          }else{
            alert("K co quyen truy cap vao he thong");
          }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
