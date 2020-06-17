import React, { Component } from "react";
import DetailMovieSelected from "./component/detailMovieSelected/detailMovieSelected";
import ListSeat from "./component/listSeat";
import PayTicket from "./component/payTicket";
import { Link } from "react-router-dom";

export default class BookingTickets extends Component {
    componentDidMount() {
        // console.log(this.props.match.params)
        const codeShowtime = this.props.match.params.maLichChieu;
        this.props.getListSeatByCodeShowtime(codeShowtime);
        this.props.resetListTicket();
    }
    render() {
        const { thongTinPhim, danhSachGhe } = this.props.listSeat;
        // const { listTicket } = this.props;
        return (
            <>
                <div className="row bookingTickets">
                <Link className="logo__home" to="/" ><i className="fa fa-home"></i></Link>
                    <div className="col-9 listSeat">
                        <ListSeat
                            // listTicket={listTicket}
                            listSeats={danhSachGhe}
                            infoMovie={thongTinPhim}
                        />
                    </div>
                    <div className="col-3 detailMovieAndPayment">
                        <div className="detailMovieSelected">
                            <DetailMovieSelected
                                infoMovie={thongTinPhim}
                            />
                        </div>
                        <div className="PaymentTicket">
                            <PayTicket
                                infoMovie={thongTinPhim}
                                {...this.props}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
