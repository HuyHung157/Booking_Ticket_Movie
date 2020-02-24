import Axios from 'axios';

class TheatresServices {
    ListLogoTheatres(){
        return Axios({
            method: "GET",
            url:
                "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
        
    }
    ListBranchTheatres(){
        return Axios({
            method: "GET",
            url:
                "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
        
    }
    ListMovieTheatres(){
        return Axios({
            method: "GET",
            url:
                "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
        
    }
}
export default TheatresServices;