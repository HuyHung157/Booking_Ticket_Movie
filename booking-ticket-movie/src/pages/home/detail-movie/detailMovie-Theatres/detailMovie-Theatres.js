import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../../redux/actions";

// material
class DetailMovieTheatres extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickLogo = setActiveDMLogo => {
    this.props.setActiveDMLogo(setActiveDMLogo);
  };

  renderListSystemTheater = () => {
    const { systemTheatres, numberActiveDMLogo } = this.props;
    if (systemTheatres && systemTheatres.length > 0) {
      return systemTheatres.map((systemTheatres, index) => {
        return (
          <img
            src={systemTheatres.logo}
            alt={systemTheatres.logo}
            className={
              numberActiveDMLogo === index
                ? "dmShowtime__logo dmShowtime__logo--active "
                : "dmShowtime__logo"
            }
            key={index}
            onClick={() => {
              this.handleClickLogo(index);
            }}
          />
        );
      });
    }
  };

  handleClickDate = date => {
    this.props.setActiveDate(date);
    this.props.setDateForDetailMovie(date);
  };

  renderListDate = () => {
    const { date } = this.props;
    const listDay = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const listMonth = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    const dateByMs = 86400000; // 1 ngày đổi sang Micro giây
    // const dateStart = Date.now();
    const dateStart = Date.parse("1/1/2019");
    let listDate = [];
    for (let i = 0; i < 7; i++) {
      listDate = [...listDate, dateStart + dateByMs * i];
    }
    return listDate.map((dater, index) => (
      <li
        className={
          new Date(date).getDate() === new Date(dater).getDate()
            ? "dmlist-date__item dmlist-date__item--active"
            : "dmlist-date__item"
        }
        key={index}
        onClick={() => this.handleClickDate(dater)}
      >
        <p className="dmlist-date__item--month-date">{`${
          listMonth[new Date(dater).getMonth()]
        }  ${new Date(dater).getDate()}`}</p>
        <p className="dmlist-date__item--day">
          {listDay[new Date(dater).getDay()]}
        </p>
      </li>
    ));
  };

  renderListTheaterAndShowtime = (listShowTime, tenPhim) => {
    const { systemTheatres, numberActiveDMLogo, numberActiveDate, date} = this.props;
    if (systemTheatres && systemTheatres.length > 0) {
      const listTheaterAndShowtime =
        systemTheatres[numberActiveDMLogo].cumRapChieu;
      if (listTheaterAndShowtime && listTheaterAndShowtime.length > 0) {
        const { lichChieuPhim, ...theater } = listTheaterAndShowtime[0];
        if (lichChieuPhim && lichChieuPhim.length > 0) {
          return (
            <div className="dmShowtime__item">
              <h2 className="dmShowtime__title">{theater.tenCumRap}</h2>
              <div className="dmShowtime__showtime">
                {lichChieuPhim.filter(showtime => {
                    const datem = new Date(date).getDate();
                    const dater = new Date(showtime.ngayChieuGioChieu).getDate();
                    // const yearf = new Date(date).getFullYear();
                    // const yearm = new Date(showtime.ngayChieuGioChieu).getFullYear();
                    // const monthm = new Date(date).getMonth();
                    // const monthr = new Date(showtime.ngayChieuGioChieu).getMonth();
                    return datem === dater;
                  }).map((showtime, index) => {
                    return (
                      <Link
                        to={`/checkout/${tenPhim}/${showtime.maLichChieu}`}
                        key={index}
                        className="dmShowtime__time"
                      >
                        {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }).replace(/([AP]M)$/, function (match) { return (match === "AM") ? "Sa" : "Ch"; })}
                      </Link>
                    );
                  })}
              </div>
            </div>
          );
        }
      }
    }
  };

  render() {
    return (
      <section className="dmshowtime">
        <div className="dmshowtime__wrapper">
          <div className="dmShowtime__systemTheater">
            <h2>System Theater</h2>
            {this.renderListSystemTheater()}
          </div>
          <div className="dmShowtime__date">
            <h2>Date</h2>
            <ul className="dmlist-date">{this.renderListDate()}</ul>
          </div>
          <div className="dmShowtime__theaterAndShowtime">
            {this.renderListTheaterAndShowtime()}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
    return {
      numberActiveDMLogo: state.theatresDMReducer.numberActiveDMLogo,
      numberActiveDate: state.theatresReducer.activeDate,
      date: state.theatresReducer.date
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setActiveDMLogo: numberActiveDMLogo => {
        dispatch(actions.actsetActiveDMLogo(numberActiveDMLogo));
      },
      setActiveDate: numberActiveDate => {
        dispatch(actions.actsetActiveDate(numberActiveDate));
      },
      setDateForDetailMovie: date => {
        dispatch(actions.actSetDateForDetailMovie(date));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DetailMovieTheatres);