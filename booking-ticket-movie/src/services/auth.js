import Axios from 'axios';
import * as API from './config';

class AuthServices {
    AuthSignIn(user) {
        return Axios({
            method: "POST",
            url:
                `${API.urlAPI}/QuanLyNguoiDung/DangNhap`,
            data: user
        })

    }
    AuthSignUp(user) {
        return Axios({
            method: "POST",
            url:
                `${API.urlAPI}/QuanLyNguoiDung/DangKy`,
            data: user
        })

    }
}
export default AuthServices;