import Axios from 'axios';

class MovieService {
    listMovie(){
        return Axios({
            method: "GET",
            url:
                "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP15"
        })
        
    }
    listMovieShowing() {
        return Axios({
            method: "GET",
            url:
              "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP15&soTrang=2&soPhanTuTrenTrang=8"
          })
    };
    listMovieComming() {
        return Axios({
            method: "GET",
            url:
                "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP15&soTrang=1&soPhanTuTrenTrang=8"
        })
    };
    detailMovie(id){
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
          })
    }
    
}
export default MovieService;