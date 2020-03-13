import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as action from './../../../../redux/actions'
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const signInUserSchema = Yup.object().shape({
    userName: Yup.string()
        .required('Vui lòng nhập tài khoản'),
    password: Yup.string()
        .min(6, 'Mật khẩu tối thiếu 6 kí tự')
        .required('Vui lòng nhập mật khẩu'),
})

class SignIn extends Component {
    handleSubmit = (value) => {
        // event.preventDefault();
        // console.log(value);
        const user = {
            taiKhoan: value.userName,
            matKhau: value.password
        };
        // console.log(user);
        this.props.signInUser(user, this.props.history);
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
                validationSchema={signInUserSchema}
                onSubmit={this.handleSubmit}
                render={formikProps => (
                    <div className="page__login">
                        <Form className=" form_login">
                        <Link className="logo_home" to="/" ><i class="fa fa-home"></i></Link>
                            <img className="login_img" src="./../img/favicon.png" alt="img_logo" />
                            <div className="login__heading">
                                <h1 className="login__headingText">Đăng nhập</h1>
                                <p className="login__headingSubtext">
                                    Để tiếp tục với <Link to="/" className="login__headingSubtext_brand">H2Cinebox</Link>
                                </p>
                            </div>
                            <Field 
                            // className="input__userName_login" 
                            className={'input__userName_login form-control' + (formikProps.errors.userName && formikProps.touched.userName ? ' is-invalid' : '')}
                            type="text" 
                            name="userName" 
                            placeholder="Tài khoản" 
                            onChange={formikProps.handleChange} 
                            />
                            <ErrorMessage name="userName" component="span" className="invalid-feedback error " />
                            <Field 
                            // className="input__password_login" 
                            className={'input__password_login form-control' + (formikProps.errors.password && formikProps.touched.password ? ' is-invalid' : '')}
                            type="password" 
                            name="password" 
                            placeholder="Mật khẩu" 
                            onChange={formikProps.handleChange} 
                            />
                            <ErrorMessage name="password" component="span" className="invalid-feedback error " />
                            <button className="btn__submit_login" type="submit">Sign in</button>
                            <Link className="link__create_account" to="/sign-up">Create new account</Link>
                        </Form>
                    </div>
                )}
            />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (user, history) => {
            dispatch(action.actSignInAPI(user, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);