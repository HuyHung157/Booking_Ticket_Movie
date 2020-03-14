import React, { Component } from "react";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

class BookingTicket extends Component {

    componentDidMount() {
        const codeShowtime = this.props.match.params.maLichChieu;
        // console.log(codeShowtime)
        this.props.getListSeatByCodeShowtime(codeShowtime);
        this.props.resetListTicket();
    }

    handleClickSeat = seat => {
        const { selectSeat } = this.props;
        console.log(seat.tenGhe)
        selectSeat(seat);
    };

    renderNameSeat = (item) => {
        let nameSeat = parseInt(item.tenGhe);
        // console.log(nameSeat % 16);
        nameSeat %= 16;
        if(nameSeat === 0){
            return nameSeat = 16;
        }
        return nameSeat
    }

    renderListSeat = () => {
        const { listTicket } = this.props;
        const listSeats = this.props.listSeat.danhSachGhe;
        console.log(this.props.listSeat);
        let reslut = [];
        let tam = [];
        let dem = 0;
        const Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        if (listSeats && listSeats.length > 0) {
            listSeats.map((seat, index) => {
                tam = [...tam, seat];
                dem++;
                if (dem >= 16) {
                    dem = 0;
                    reslut = [...reslut, tam];
                    tam = [];
                }
            });
            return reslut.map((seat, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div className="bookSeat__select--col">{Alphabet[index]}</div>
                        </td>
                        <td>
                            <div className="bookSeat__select--space"></div>
                        </td>
                        {seat.map((item, index) => {
                            let classNameSeat = "";
                            if (item.loaiGhe === "Vip") {
                                classNameSeat = `bookSeat__select--vip ${classNameSeat} `;
                            }
                            if (item.daDat) {
                                classNameSeat = `bookSeat__select--selected ${classNameSeat} `;
                            }
                            if (listTicket.find(ve => ve.maGhe === item.maGhe)) {
                                classNameSeat = `bookSeat__select--yourSeat ${classNameSeat} `;
                            }
                            return (
                                <>
                                    {index === 2 || index === 14 ? (
                                        <>
                                            <td>
                                                <div className="bookSeat__select--space"></div>
                                            </td>
                                        </>
                                    ) : null}
                                    <td key={index}>
                                        <div
                                            className={classNameSeat}
                                            onClick={() => this.handleClickSeat(item)}
                                        >
                                            {/* {item.tenGhe} */}
                                            
                                            {this.renderNameSeat(item)}
                                        </div>
                                    </td>
                                </>
                            );
                        })}
                    </tr>
                );
            });
        }
    };

    render() {
        // const Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        return (
            <section className="bookSeat">
                <div className="bookSeat__wrapper">
                    <h2>SELECT SEAT</h2>
                    <div className="bookSeat__guide">
                        <div className="bookSeat__guide--item">
                            <p>
                                <span className="bookSeat__available" />
                                <span className="bookSeat__text">Available</span>
                            </p>
                        </div>
                        <div className="bookSeat__guide--item">
                            <p>
                                <span className="bookSeat__available--vip" />
                                <span className="bookSeat__text">Available Vip</span>
                            </p>
                        </div>
                        <div className="bookSeat__guide--item">
                            <p>
                                <span className="bookSeat__selected" />
                                <span className="bookSeat__text">Selected</span>
                            </p>
                        </div>
                        <div className="bookSeat__guide--item">
                            <p>
                                <span className="bookSeat__yourSeat" />
                                <span className="bookSeat__text">Your Seat</span>
                            </p>
                        </div>
                    </div>
                    <div className="bookSeat__select">
                        {/* <div className="bookSeat__select__col__group">
                            <div className="bookSeat__select__col" >
                                {Alphabet.map((rowItem, index) => {
                                    <p>
                                        {rowItem[index]}
                                    </p>
                                })}
                            </div>
                        </div> */}
                        <div className="bookSeat__screen">
                            <img
                                src="https://www.q-tickets.com/content/NewDesign/images/screen.jpg"
                                alt="screen"
                            />
                        </div>
                        <table className="bookSeat__table">
                            <tbody>{this.renderListSeat()}</tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        listTicket: state.bookingTicketsReducer.listTicket,
        listSeat: state.bookingTicketsReducer.listSeat,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectSeat: seat => {
            dispatch(actions.actSelectSeat(seat));
        },
        getListSeatByCodeShowtime: codeShowtime => {
            dispatch(actions.actGetListSeatByCodeShowtimeAPI(codeShowtime));
        },
        resetListTicket: () => {
            dispatch(actions.actResetListTicket());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket);