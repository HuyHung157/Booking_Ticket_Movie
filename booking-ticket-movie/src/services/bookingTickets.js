import Axios from 'axios';
import * as API from './config';

const user = JSON.parse(localStorage.getItem("User"));
console.log(user)
class BookingTicketsServices {

    Booking(data) {
        return Axios({
            method: "POST",
            url: `${API.urlAPI}/QuanLyDatVe/DatVe`,
            data,
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
    };
    ListSeat(codeShowtime) {
        return Axios({
            method: "GET",
            url: `${API.urlAPI}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${codeShowtime}`,
        })
    }

}
export default BookingTicketsServices;