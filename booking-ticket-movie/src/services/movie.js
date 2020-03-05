import Axios from 'axios';
import * as API from './config';

class MovieService {
    listMovie(){
        return Axios({
            method: "GET",
            url: `${API.urlAPI}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        })
        
    }
    listMovieShowing() {
        return Axios({
            method: "GET",
            url:
            `${API.urlAPI}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=8`
          })
    };
    listMovieComming() {
        return Axios({
            method: "GET",
            url:
            `${API.urlAPI}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=2&soPhanTuTrenTrang=8`    
        })
    };
    detailMovie(id){
        return Axios({
            method: "GET",
            url: `${API.urlAPI}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
          })
    }
    
}
export default MovieService;