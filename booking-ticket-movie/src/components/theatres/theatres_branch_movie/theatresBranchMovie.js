import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../redux/actions";

class TheatresBranchMovie extends Component {
    componentDidMount() {
        this.props.getAllListMovie();
    }

    handleClick = date => {
        const { setDateForFillter } = this.props;
        setDateForFillter(date);
      };
      renderListDate() {
        const { date } = this.props;
        const listDay = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
        const listMonth = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9", "Tháng 10","Tháng 11","Tháng 12"];
        const dateByMs = 86400000; // 1 ngày đổi sang Micro giây
        // đúng
        // const dateStart = Date.now();
        // test
        const dateStart = Date.parse("01/01/2019");
        let listDate = [];
        for (let i = 0; i < 7; i++) {
          listDate = [...listDate, dateStart + dateByMs * i];
        }
        // console.log(listDate[0]);
        return listDate.map((dater, index) => (
          <li
            className={ new Date(date).getDate() === new Date(dater).getDate() ? "tlist-date__item tlist-date__item--active" : "tlist-date__item" }
            key={index}
            onClick={() => this.handleClick(dater)}
          >
            <p className="tlist-date__item--day">{listDay[new Date(dater).getDay()]}</p>
            <p className="tlist-date__item--month-date">{`${new Date(dater).getDate()}, ${listMonth[new Date(dater).getMonth()]}`}</p>
          </li>
        ));
      }

    renderShowTimeByMovie = (listShowTime, tenPhim) => {
        // process render  
        const { date } = this.props;
        if (listShowTime && listShowTime.length > 0) {
            return listShowTime.filter((showtime, index) => {
                const datem = new Date(date).getDate();
                const dater = new Date(showtime.ngayChieuGioChieu).getDate();
                // const yearf = new Date(date).getFullYear();
                // const yearm = new Date(showtime.ngayChieuGioChieu).getFullYear();
                // const monthm = new Date(date).getMonth();
                // const monthr = new Date(showtime.ngayChieuGioChieu).getMonth();
                return datem === dater;
            }).map((showtime, index) => {
                console.log(showtime)
                if(showtime){
                    return (
                        <Link
                            className="tlfilm__time"
                            to={`/checkout/${tenPhim}/${showtime.maLichChieu}`}
                            key={index}
                        >
                            {/* 3 Option: 1 là hh:mm:ss, 2 là hh:mm, 3 là hh:mm SA/CH */}
                            {/* {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString()} */}
                            {/* {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})} */}
                            {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/([AP]M)$/,function(match) {return (match==="AM")?"SA":"CH";})}
                        </Link>
                    );
                }else{
                    return (
                        <div className="lisfilm__info_wrong">
                            <h3>Hiện chi nhánh này đã hết suất chiếu trong ngày hôm nay</h3>
                            <img className="icon_wrong" src="/img/sad_icon.png" alt="sad" />
                            <p>Xin lỗi vì những bất tiện này</p>
                            <p>Quý khách có thể đến chi nhánh khác để có thể đặt</p>
                        </div>
                    );
                }
                
            });
        }
    };

    renderListMovie() {
        let { listMovie, listBranch, activeBranch, allListMovie } = this.props;
        let exactly = false;
        if (listBranch && listBranch.length > 0) {
            if (listMovie && listMovie.length > 0) {
                if (allListMovie && allListMovie.length > 0) {
                    for (let i = 0; i < listMovie.length; i++) {
                        if (listBranch[activeBranch].maCumRap === listMovie[i].maCumRap) {
                            let listShowTimeRender = listMovie[i].danhSachPhim;
                            return listShowTimeRender.map((movie, index) => {
                                for (let j = 0; j < allListMovie.length; j++) {
                                    if (allListMovie[j].tenPhim === movie.tenPhim) {
                                        return (
                                            exactly = true,
                                            // console.log(exactly),
                                            <li className="listfilm__item_right" key={index}>
                                                <img className="listfilm__img" src={allListMovie[j].hinhAnh} alt="image_movie" />
                                                <div className="lisfilm__info_right">
                                                    <h3 className="lisfilm__infor_title">{movie.tenPhim}</h3>
                                                    <p className="lisfilm__infor_reward">Đánh giá: </p>
                                                    <p className="reward">{allListMovie[j].danhGia} <i className="icon_star fa fa-star"></i></p>
                                                    <div className="listfilm__showtime_right">
                                                        {this.renderShowTimeByMovie(movie.lstLichChieuTheoPhim, movie.tenPhim)}
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }
                                }
                            });
                        }
                        else {
                            exactly = false
                            // console.log("Đáp án else: "+exactly)
                        }
                    }
                    if (exactly === false) {
                        return (
                            <div className="lisfilm__info_wrong">
                                <h3>Hiện chi nhánh này đã hết suất chiếu trong ngày hôm nay</h3>
                                <img className="icon_wrong" src="/img/sad_icon.png" alt="sad" />
                                <p>Xin lỗi vì những bất tiện này</p>
                                <p>Quý khách có thể đến chi nhánh khác để có thể đặt</p>
                            </div>
                        );
                    }
                }
            }
        }
    }


    // 

    render() {
        return (
            <>
                <ul className="tlist-date">{this.renderListDate()}</ul>
                <ul className="film__list">
                    {this.renderListMovie()}
                </ul>
            </>
        )

    }
}

const mapStateToProps = state => {
    return {
        activeListMovie: state.theatresReducer.activeListMovie,
        activeBranch: state.theatresReducer.activeBranch,
        listBranch: state.theatresReducer.listBranchTheatres,
        allListMovie: state.movieReducer.listMovie,
        date: state.theatresReducer.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllListMovie() {
            dispatch(actions.actGetListMovieAPI());
        },
        setDateForFillter: date => {
            dispatch(actions.actSetDate(date));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheatresBranchMovie);