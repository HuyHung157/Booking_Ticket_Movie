import React, { Component } from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
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
                                    <a className="nav_link" href="#showtime">LỊCH CHIẾU</a>
                                </li>
                                <li className="nav_item">
                                    <a className="nav_link" href="#theatres">CỤM RẠP</a>
                                </li>
                                {/* Login */}
                                <li className="nav_login nav_item">
                                    <i className="fa fa-user" />
                                    <Link to="/login"> ĐĂNG NHẬP</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
