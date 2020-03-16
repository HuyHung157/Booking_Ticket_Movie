import * as ActionTypes from "../contants/ActionTypes";
import { movieService, theatresServices, authServices, bookingTicketsServices } from "../../services";
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

export const actGetExactly = exactly => {
  return {
    type: ActionTypes.GET_EXACTLY,
    exactly
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
    type: ActionTypes.SET_DATE,
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


//Login
export const actSignInAPI = (user, history) => {
  return dispatch => {
    authServices.AuthSignIn(user)
      .then(result => {
        // console.log(result.data);
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("User", JSON.stringify(result.data));
          alert("Đăng nhập thành công");
          history.push("/dashboard");
          dispatch({
            type: ActionTypes.SIGN_IN,
            infoUser: result.data
          })
        } else if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("User", JSON.stringify(result.data));
          alert("Đăng nhập thành công");
          history.push("/");
          dispatch({
            type: ActionTypes.SIGN_IN,
            infoUser: result.data
          })
        } else {
          alert("Tài khoản hoặc mật khẩu không đúng!");
        }
      })
      .catch(err => {
        alert("Tài khoản hoặc mật khẩu không đúng!");
        console.log(err);
      });
  };
};
//SignUp
export const actSignUpAPI = (user, history) => {
  return dispatch => {
    authServices.AuthSignUp(user)
      .then(result => {
        alert("Đăng ký thành công");
        history.push("/sign-in");
        dispatch({
          type: ActionTypes.SIGN_IN,
          infoUser: result.data
        });
      })
      .catch(err => {
        alert("Đăng ký không thành công");
        console.log(err);
      });
  };
};
// SignOut
export const actSignOut = () => {
  return {
    type: ActionTypes.SIGN_OUT
  };
};

// Booking-Tickets
export const actGetListSeatByCodeShowtimeAPI = codeShowtime => {
  return dispatch => {
    bookingTicketsServices.ListSeat(codeShowtime)
      .then(result => {
        dispatch({
          type: ActionTypes.GET_LIST_SEAT_BY_CODE_SHOWTIME,
          listSeat: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actBookListSeatAPI = (data, history) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return dispatch => {
    bookingTicketsServices.Booking(data)
    .then(result => {
      history.push(`/account/${user.taiKhoan}`);
      alert("Đặt vé thành công", result);
      dispatch({
        type: ActionTypes.BOOK_LIST_SEAT
      });
    })
    .catch(err => {
      console.log(err);
    });
  };
};

export const actSelectSeat = seat => {
  return {
    type: ActionTypes.SELECT_SEAT,
    seat
  };
};
export const actResetListTicket = () => {
  return {
    type: ActionTypes.RESET_LIST_TICKET
  };
};

// Page DetailMovie
export const actSetDateForDetailMovie = date => {
  return {
    type: ActionTypes.SET_DATE_FOR_DETAIL_MOVIE,
    date
  };
};
export const actsetActiveDMLogo = numberActiveDMLogo => {
  return {
    type: ActionTypes.SET_ACTIVE_FOR_DMLOGO,
    numberActiveDMLogo
  };
};