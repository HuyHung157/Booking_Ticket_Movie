import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../redux/actions";

 class ListSeat extends Component {

    handleClickSeat = seat => {
        const { selectSeat } = this.props;
        // console.log(seat.tenGhe)
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
        const { listSeats, listTicket } = this.props;
        // console.log(this.props);   
        let reslut = [];
        let tam = [];
        let dem = 0;
        const Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        if (listSeats && listSeats.length > 0 && listTicket) {
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
        return (
            <section className="bookSeat">
                <div className="bookSeat__wrapper">
                    <h2>VUI LÒNG CHỌN GHẾ</h2>
                    <div className="bookSeat__select">
                    
                        <div className="bookSeat__screen">
                            <div className="screen"></div>
                            <div className="text">Màn hình</div>
                        </div>
                        <table className="bookSeat__table">
                            <tbody>{this.renderListSeat()}</tbody>
                        </table>
                    </div>
                    <div className="bookSeat__guide">
                        <div className="bookSeat__guide_items">
                        <div className="bookSeat__guide_item">
                            <p>
                                <span className="bookSeat__box bookSeat__available" />
                                <span className="bookSeat__text">Có thể chọn</span>
                            </p>
                        </div>
                        <div className="bookSeat__guide_item">
                            <p>
                                <span className="bookSeat__box bookSeat__available--vip" />
                                <span className="bookSeat__text">Có thể chọn (VIP)</span>
                            </p>
                        </div>
                        <div className="bookSeat__guide_item">
                            <p>
                                <span className="bookSeat__box bookSeat__selected" />
                                <span className="bookSeat__text">Ghế đã bán</span>
                            </p>
                        </div>
                        <div className="bookSeat__guide_item">
                            <p>
                                <span className="bookSeat__box bookSeat__yourSeat" />
                                <span className="bookSeat__text">Ghế đang chọn</span>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTicket: state.bookingTicketsReducer.listTicket
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSeat: seat => {
            dispatch(actions.actSelectSeat(seat));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSeat);