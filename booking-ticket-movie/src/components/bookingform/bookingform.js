import React, { Component } from 'react'

export default class Bookingform extends Component {
    render() {
        return (
            <div className="bookingform">
                <div className="selection_group ">
                    {/* Chọn Phim */}
                    <div className="sel form_group_film">
                        <select name="select-profession">
                            <option value disabled>Chọn Phim</option>
                            <option value="matbiec">Mắt Biếc</option>
                            <option value="ccee">Chị Chị Em Em</option>
                            <option value="starwar">Star War</option>
                            <option value="frozen">Frozen II</option>
                        </select>
                    </div>
                    {/* Chọn rạp */}
                    <div className="sel form_group_theatres">
                        <select name="select-superpower">
                            <option value disabled>Chọn Rạp</option>
                            <option>BHD Star Bitexco</option>
                            <option>CGV Aeon Bình Tân</option>
                            <option>CineStar Bình Tân</option>
                            <option>DCine Bến Thành</option>
                            <option>Galaxy - Quang Trung</option>
                            <option>Lotte Cinema Gò Vấp</option>
                        </select>
                    </div>
                    {/* Chọn Ngày */}
                    <div className="sel form_group_date">
                        <select name="select-superpower">
                            <option value disabled>Chọn Ngày</option>
                            <option>01/01/2020</option>
                            <option>02/01/2020</option>
                            <option>03/01/2020</option>
                            <option>04/01/2020</option>
                            <option>05/01/2020</option>
                            <option>06/01/2020</option>
                        </select>
                    </div>
                    {/* Chọn Suất Chiếu */}
                    <div className="sel form_group_session">
                        <select name="select-superpower">
                            <option value disabled>Chọn Suất Chiếu</option>
                            <option>09h00</option>
                            <option>11h00</option>
                            <option>13h00</option>
                            <option>15h00</option>
                            <option>17h00</option>
                            <option>19h00</option>
                        </select>
                    </div>
                    {/* Đặt vé */}
                    <button className="btn_bookfilm btn btn-success">Đặt Vé</button>
                </div>
            </div>

        )
    }
}
