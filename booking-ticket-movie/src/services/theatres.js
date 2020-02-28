import Axios from 'axios';

class TheatresServices {
    ListSystemTheatres(){
        return Axios({
            method: "GET",
            url:
                "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
        
    }
    DetailTheatres(SystemTheatres){
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${SystemTheatres}&maNhom=GP15`
          })
    }
}
export default TheatresServices;