import React, { Component } from 'react';
import * as actions from '../../../redux/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as action from '../../../redux/actions';
import Modal from 'react-responsive-modal';
// import Theatres from '../../../components/theatres/theatres';
import Footer from '../../../components/footer/footer';
import DetailMovieTheatres from './detailMovie-Theatres/detailMovie-Theatres';


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
        // const codeMovie = this.props.match.params.id;
        console.log(id)
        this.props.getListShowtimesAndInfoByCodeMovie(id);
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
        // const { heThongRapChieu } = this.props.listShowtimesAndInfo;
        console.log(this.props);
        let { movie } = this.props;
        const { open } = this.state;
        return (
            <div className="detailMovie">
                {/* <Loader/> */}
                <Link className="logo_home" to="/" ><i className="fa fa-home"></i></Link>
                <div className="detailMovie__content">
                    <div className="row detailMovie__header">
                        <div className="col-5 header__banner">
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
                                <button className="btn_close_modal" onClick={this.onCloseModal}> <i className="fa fa-times" ></i> </button>
                                <iframe className="modal__trailer" title="Trailer" src={movie.trailer} />
                            </div>
                        </Modal>
                        <div className="col-7 header__detail" >
                            <table className="table">
                                <tbody>
                                    <tr className="row row__title">
                                        <td className="col-3 table__title " >Tên phim</td>
                                        <td className="col-9 table__content table__titleMovie"><h3><div className="theatres__title">
                                            {movie.tenPhim}
                                        </div></h3></td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-3 table__title table__detailTitle">Mô tả</td>
                                        <td className="col-9 table__content table__detailContent"><h3>{movie.moTa}</h3></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="theatres__detailMovie">
                        <div className="theatres__title">
                            <h2>
                                Danh Sách Rạp Chiếu Phim {movie.tenPhim}
                            </h2>
                        </div>
                        <div className="theatres__content">
                            {/* <Theatres /> */}
                            <DetailMovieTheatres />
                        </div>
                    </div>
                    {/* <div className="row detailMovie__table">
                        <div className="col-sm-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Tên Cụm Rạp</th>
                                        <th>Tên Chi Nhánh Rạp</th>
                                        <th>Giờ Chiếu</th>
                                        <th>Ngày Chiếu</th>
                                        <th>Đặt Vé</th>
                                    </tr>
                                </thead>
                                <tbody>{this.renderTable()}</tbody>
                            </table>
                        </div>
                    </div> */}
                    <Footer />
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
            dispatch(actions.actGetDetailMovie(id));
        },
        getListShowtimesAndInfoByCodeMovie: codeMovie => {
            dispatch(actions.actGetListShowtimeTheatresAPI(codeMovie));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);