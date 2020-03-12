import React, { Component } from 'react';
import { actGetDetailMovie } from '../../../redux/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
// import Loader from '../../loader/loader';


class DetailMovie extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        //this.props.match.params.id là đương dẫn url lấy detail movie
        this.props.getDetailMovie(id);
    }

    renderTable = () => {
        if (this.props.movie.lichChieu) {
            return this.props.movie.lichChieu.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>
                            <Link className="btn btn-info" to="">
                                Booking
                            </Link>
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        let { movie } = this.props;
        const { open } = this.state;
        return (
            <div className="container">
                {/* <Loader/> */}

                <div className="row">
                    <div className="col-sm-6">
                        <a className="overplay" href="/" onClick={this.onOpenModal}>
                            <img className="card_img_top" src={movie.hinhAnh} alt="abc" />
                            <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
                        </a>
                    </div>
                    <Modal
                        open={open}
                        onClose={this.onCloseModal}
                        center
                    >
                        <div className="modal__content">
                            <h1 className="modal__title">Phim: {movie.tenPhim} </h1>
                            <button className="btn_close_modal" onClick={this.onCloseModal}> <i class="fa fa-times" ></i> </button>
                            <iframe class="modal__trailer" title="Trailer" src={movie.trailer} />
                        </div>
                    </Modal>
                    <div className="col-sm-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Tên Phim</td>
                                    <td><h3>{movie.tenPhim}</h3></td>
                                </tr>
                                <tr>
                                    <td>Mô tả</td>
                                    <td><h3>{movie.moTa}</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Ten Cum Rap</th>
                                    <th>Ten Rap</th>
                                    <th>Gio Chieu</th>
                                    <th>Ngay Chieu</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderTable()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieReducer.movie
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovie: id => {
            dispatch(actGetDetailMovie(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);