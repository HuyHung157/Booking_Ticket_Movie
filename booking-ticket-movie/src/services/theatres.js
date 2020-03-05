import Axios from 'axios';
import * as API from './config';

class TheatresServices {
    ListSystemTheatres(){
        return Axios({
            method: "GET",
            url:
                `${API.urlAPI}/QuanLyRap/LayThongTinHeThongRap`
        })
        
    }
    DetailTheatres(SystemTheatres){
        return Axios({
            method: "GET",
            url: `${API.urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${SystemTheatres}`
          })
    }
    ListShowtimeAndInfo(SystemTheatres){
        return Axios({
            method: "GET",
            url: `${API.urlAPI}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${SystemTheatres}&maNhom=GP01`    
          })
    }
}
export default TheatresServices;