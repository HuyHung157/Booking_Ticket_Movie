import * as ActionTypes from "../contants/ActionTypes";
import Axios from "axios";

export const actGetListMovieCommingAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP15&soTrang=1&soPhanTuTrenTrang=8"
    })
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
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP15&soTrang=2&soPhanTuTrenTrang=8"
    })
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
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP15"
    })
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
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
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
