import React, { Component } from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import * as action from '../../redux/actions';
import { connect } from "react-redux";
class Header extends Component {

    scrollToSection(id) {
        switch (id) {
            case "theatres":
                var theatres = document.getElementById("theatres");
                theatres.scrollIntoView();
                break;
            case "showtime":
                var showtime = document.getElementById("showtime");
                showtime.scrollIntoView();
                break;
            default:
                break;
        } // Top
    }
    handleSignOut = () => {
        this.props.signOutUser();
        // console.log("abc")
    }
    render() {
        const { infoUser } = this.props;
        return (
            <div>
                <div className="padding_header"></div>
                <div className="header">
                    <nav className="navbar navbar-expand-lg " style={{ margin: '24px 0' }}>
                        {/* Logo-Brand */}
                        <div className="navbar_brand col-lg-3 col-md-11 col-9">
                            <Link to="/"><img src="./../img/h2-brand-logo.png" alt="brand-logo" /></Link>
                        </div>
                        <button className="navbar-toggler navbar-toggler-right nav_toggle col-md-1 col-3" type="button" data-toggle="collapse" data-target="#navb">
                            <span className="navbar-toggler-icon" >
                                <i className="fa fa-bars"></i>
                            </span>
                        </button>
                        {/* Menu */}
                        <div className="collapse navbar_menu navbar-collapse col-lg-9" id="navb">
                            <ul className="navbar-nav ">
                                <li className="nav_item">
                                    <p className="nav_link" onClick={() => this.scrollToSection("showtime")} >LỊCH CHIẾU</p>
                                </li>
                                <li className="nav_item">
                                    <p className="nav_link" onClick={() => this.scrollToSection("theatres")}>CỤM RẠP</p>
                                </li>
                                {/* Login */}
                                {infoUser ? (
                                    <li className="nav_item header__login--auth">
                                        <div className="header__login--wrapper">
                                            <img
                                                className="header__avatar"
                                                src="./img/boss.png"
                                                alt=""
                                            />
                                            <p className="header__user">Hi, {infoUser.hoTen}</p>
                                        </div>
                                        <ul className="header__user-menu">
                                            <li>
                                                <Link
                                                    className="nav-link"
                                                    to={`/account/${infoUser.taiKhoan}`}
                                                >
                                                    My Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.handleSignOut}
                                                    className="nav-link"
                                                    to="/sign-in"
                                                >
                                                    Sign Out
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                ) : (
                                        <>
                                            <li className="nav_login nav_item">
                                                <i className="fa fa-user" />
                                                <Link to="/sign-in"> ĐĂNG NHẬP</Link>
                                            </li>
                                        </>
                                    )}

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        infoUser: state.authReducer.infoUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: () => {
            dispatch(action.actSignOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);