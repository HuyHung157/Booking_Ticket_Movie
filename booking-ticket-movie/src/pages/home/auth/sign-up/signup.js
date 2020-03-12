import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as action from './../../../../redux/actions'
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const signUpUserSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Vui lòng nhập họ của bạn'),
    lastName: Yup.string()
        .required('Vui lòng nhập tên của bạn'),
    phoneNumber: Yup.string()
        .min(9, 'Số điện thoại chưa đúng')
        .required('Vui lòng nhập số điện thoại của bạn'),
    email: Yup.string()
        .email('Email không đúng định dạng')
        .required('Vui lòng nhập email của bạn'),
    userName: Yup.string()
        .required('Vui lòng nhập tài khoản'),
    password: Yup.string()
        .min(6, 'Mật khẩu tối thiếu 6 kí tự')
        .required('Vui lòng nhập mật khẩu'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp')
        .required('Vui lòng xác nhận mật khẩu')

})

class SignUp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         taiKhoan: "",
    //         matKhau: "",
    //         email: "",
    //         soDt: "",
    //         hoTen: "",
    //     }
    // }
    // handleOnChange = (e) => {
    //     let { name, value } = e.target;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleSubmit = (value) => {
        // event.preventDefault();
        // console.log(value);
        const user = {
            taiKhoan: value.userName,
            matKhau: value.password,
            email: value.email,
            soDt: value.phoneNumber,
            hoTen: `${value.firstName} ${value.lastName}`,
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
        };
        // console.log(user);
        this.props.signUpUser(user, this.props.history);
    }



    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    userName: '',
                    phoneNumber: '',

                }}
                validationSchema={signUpUserSchema}
                onSubmit={this.handleSubmit}
                render={formikProps => (
                    <div className="page__signup">
                        <img className="signup_img" src="./../img/favicon.png" alt="img_logo" />
                        <div className="signup__heading">
                            <h1 className="signup__headingText">Đăng ký</h1>
                            <p className="signup__headingSubtext">
                                Để tiếp tục với <Link to="/" className="signup__headingSubtext_brand">H2Cinebox</Link>
                            </p>
                        </div>
                        <Form className="row form_signup" >
                            <Field
                                className="col-6 input__firstName_signup"
                                // className={'col-6 input__firstName_signup form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}
                                type="text"
                                name="firstName"
                                placeholder="Họ"
                                onChange={formikProps.handleChange}
                            />
                            <Field
                                className="col-6 input__lastName_signup"
                                // className={'col-6 input__lastName_signup form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')}
                                type="text"
                                name="lastName"
                                placeholder="Tên"
                                onChange={formikProps.handleChange}
                            />
                            <div className="w-100 row">
                                <ErrorMessage name="firstName" component="span" className="invalid-feedback error col-6" />
                                <ErrorMessage name="lastName" component="span" className="invalid-feedback error col-6" />
                            </div>
                            <Field
                                className="col-6 input__phoneNumber_signup"
                                // className={'col-6 input__phoneNumber_signup form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')}
                                type="number"
                                name="phoneNumber"
                                placeholder="Số điện thoại"
                                onChange={formikProps.handleChange}
                            />
                            <Field
                                className="col-6 input__password_signup"
                                // className={'col-6 input__email_signup form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={formikProps.handleChange}
                            />
                            <div className="w-100 row">
                                <ErrorMessage name="phoneNumber" component="span" className="invalid-feedback error col-6" />
                                <ErrorMessage name="email" component="span" className="invalid-feedback error col-6" />
                            </div>
                            <Field
                                // className={'col-12 input__user_signup form-control' + (errors.userName && touched.userName ? ' is-invalid' : '')}
                                className="col-12 input__user_signup"
                                type="text"
                                name="userName"
                                placeholder="Tài khoản"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="userName" component="span" className="invalid-feedback error col-12" />
                            <Field
                                className="col-6 input__password_signup"
                                // className={'col-6 input__password_signup form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                                type="password"
                                name="password"
                                placeholder="Mật khẩu"
                                onChange={formikProps.handleChange}
                            />

                            <Field
                                className="col-6 input__password_signup"
                                // className={'col-6 input__confirmPassword_signup form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}
                                type="password"
                                name="confirmPassword"
                                placeholder="Xác nhận mật khẩu" s
                            />
                            <div className="w-100 row">
                                <ErrorMessage name="password" component="span" className="invalid-feedback error col-6" />
                                <ErrorMessage name="confirmPassword" component="span" className="invalid-feedback error col-6" />
                            </div>

                            <button
                                className="btn__submit_signup"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </Form>
                    </div>
                )}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (user, history) => {
            dispatch(action.actSignUpAPI(user, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(SignUp);