import React, { Component } from 'react';
import { actGetDetailMovie } from '../../../redux/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Loader from 'react-gif-loader';

class DetailMovie extends Component {

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
        return (
            <div className="container">
            {/* <Loader
                loading={true}
                imageSrc="./"
                // imageStyle={imageStyle}
                overlayBackground="rgba(0,0,0,0.5)"
            /> */}
            
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={movie.hinhAnh} alt='hinhs' />
                    </div>
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