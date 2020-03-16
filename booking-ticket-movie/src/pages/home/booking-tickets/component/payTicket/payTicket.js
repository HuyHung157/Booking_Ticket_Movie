import React, { Component } from 'react';
// import * as actions from "../../../../../redux/actions";
// import { connect } from "react-redux";

export default class PayTicket extends Component {

    handleClickBookNow = () => {
        const { bookListSeat, infoMovie, listTicket } = this.props;
        const user = JSON.parse(localStorage.getItem("User"));

        if (user) {
            const data = {
                maLichChieu: infoMovie.maLichChieu,
                danhSachVe: listTicket,
                taiKhoanNguoiDung: user.taiKhoan
            };
            if (!(listTicket.length > 0)) {
                alert("Bạn vui lòng chọn ghế !");
            } else {
                bookListSeat(data, this.props.history);
            }
        } else {
            alert("Bạn cần phải đăng nhập trước khi mua vé !");
            this.props.history.push("/sign-in");
        }
    };

    renderListseat = () => {
        const { listTicket } = this.props;
        if (listTicket && listTicket.length > 0) {
            return listTicket.map((seat, index) => {
                return (
                    <div key={index} className="bill__info__item">
                        {/* {seat.tenGhe} */}
                        <p>{this.renderAlphabetYourSeat(seat.tenGhe)}</p>
                        <p>{this.renderNumberYourSeat(seat.tenGhe)}</p>
                    </div>

                );
            });
        }
    };

    renderNumberYourSeat = (tenGhe) => {
        let yourSeat = parseInt(tenGhe % 16);
        if (yourSeat === 0) {
            return yourSeat = 16;
        } else {
            return yourSeat
        }
    }

    renderAlphabetYourSeat = (tenGhe) => {
        let yourSeat = parseInt(tenGhe);
        let tam = 0;
        let result;
        for (var i = 10; i > 0; i--) {
            tam = (i * 16);
            tam %= yourSeat;
            if (tam < 16) {
                result = i;
            }
        }
        switch (result) {
            case 1:
                return "A";
            case 2:
                return "B";
            case 3:
                return "C";
            case 4:
                return "D";
            case 5:
                return "E";
            case 6:
                return "F";
            case 7:
                return "G";
            case 8:
                return "H";
            case 9:
                return "I";
            case 10:
                return "J";
            default:
                return "..."
        }

    }

    renderPrice = () => {
        let result = 0;
        this.props.listTicket.forEach(ticket => {
            result += ticket.giaVe;
        });
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    };

    render() {
        const { listTicket } = this.props;
        return (
            <>
                <div className="bill">
                    <div className="bill__wrapper">
                        <div className="bill__list-seat">
                            <div className="bill__info">
                                <p className="bill__info__seat">
                                    Tổng số ghế đã chọn:
                                </p>
                                <p className="bill__info__seat__selected">
                                    {listTicket.length}
                                </p>
                                <div className="bill__info__list">
                                    <p className="bill__info__list_title">
                                        Ghế được lựa chọn:
                                    </p>
                                    <div className="bill__info__list_seat">
                                        {this.renderListseat()}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bill__total__price">
                            <p className="bill__total__price_title"> Tổng tiền : </p>
                            <div>
                                <p className="bill__total__price_number">{this.renderPrice()}</p><p className="VND">VNĐ</p>
                            </div>
                        </div>
                    </div>
                    <div className="bill__submit">
                        {/* <button onClick={this.handleClickBookNow}>Book Now</button> */}
                        <a href="#" class="fancy-button pop-onhover bg-gradient3" onClick={this.handleClickBookNow}><span>Đặt Vé</span></a>
                    </div>
                </div>
            </>
        );

    }
}
// const mapStateToProps = state => {
//     return {
//         listTicket: state.bookingTicketsReducer.listTicket
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         bookListSeat: (data, history) => {
//             dispatch(actions.actBookListSeatAPI(data, history));
//         }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PayTicket);