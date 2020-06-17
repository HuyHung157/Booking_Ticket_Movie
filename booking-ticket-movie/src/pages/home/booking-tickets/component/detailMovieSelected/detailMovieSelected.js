import React, { Component } from 'react';

export default class DetailMovieSelected extends Component {

  renderInfo = () => {
    const { infoMovie } = this.props;
    if (infoMovie) {
      return (
        <div className="movie__wrapper">
          <div className="movie__img">
            <img src={infoMovie.hinhAnh} alt="" />
          </div>
          <div className="movie__info">
            <p className="movie__item "><span className="movie__name">{infoMovie.tenPhim}</span></p>
            <p className="movie__item">
              <i className="showTime fas fa-calendar-alt pr-10" />
              {/* <p className="movie__caption">Suất chiếu: </p> */}
              {`${infoMovie.ngayChieu} , ${infoMovie.gioChieu}`}
            </p>
            <p className="movie__item">
              <i className="address fas fa-map-marker-alt pr-10" />
              {/* <p className="movie__caption">Địa chỉ: </p> */}
              {infoMovie.diaChi}
            </p>
            <p className="movie__item">
              <i className="theatresSystem fas fa-film pr-10" />
              {/* <p className="movie__caption">Chi nhánh: </p>  */}
              {infoMovie.tenCumRap}
            </p>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="detailMovieSelected__content">{this.renderInfo()}</div>
    );
  }
}
