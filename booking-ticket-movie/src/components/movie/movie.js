import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-responsive-modal';

export default class Movie extends Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  render() {
    // console.log(this.props); 
    let { movie } = this.props;
    const { open } = this.state;
    return (
      <div className="card">
        <a className="overplay" href="/" onClick={this.onOpenModal}>
          <img className="card_img_top" src={movie.hinhAnh} alt="abc" />
          <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
        </a>
        <div className="card_body">
          <Link className="card_title" to={`/detail-movie/${movie.maPhim}`}>{movie.tenPhim}</Link>
          <div className="btn_group">
            <Link
              className="btn btn-success card_btn_detail"
              to={`/detail-movie/${movie.maPhim}`}
            >
              Detail
            </Link>
          </div>
        </div>
        <Modal
          open={open} 
          onClose={this.onCloseModal} 
          center
        >
          <div className="modal__content">
          <h1 className="modal__title">Phim: {movie.tenPhim} </h1>
          <button className="btn_close_modal" onClick={this.onCloseModal}> <i class="fa fa-times" ></i> </button>
          <iframe class="modal__trailer" title="Trailer" src={movie.trailer}/>
          </div>
        </Modal>
      </div>
    );
  }
}
