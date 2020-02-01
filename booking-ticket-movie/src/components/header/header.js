import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg " style={{ margin: '24px 0' }}>
                    {/* Logo-Brand */}
                    <div className="navbar_brand col-lg-2">
                        <a href="#"><img src="./../img/h2-brand-logo.png" alt="brand-logo" /></a>
                    </div>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navb">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Menu */}
                    <div className="collapse navbar_menu navbar-collapse col-lg-8" id="navb">
                        <ul className="navbar-nav ">
                            <li className="nav_item">
                                <a className="nav_link" href="#">TRANG CHỦ</a>
                            </li>
                            <li className="nav_item">
                                <a className="nav_link" href="#showtime">LỊCH CHIẾU</a>
                            </li>
                            <li className="nav_item">
                                <a className="nav_link" href="#theatres">CỤM RẠP</a>
                            </li>
                        </ul>
                    </div>
                    {/* Login */}
                    <div className="nav_login col-lg-2">
                        <i className="fa fa-user" />
                        <a href="login.html"> ĐĂNG NHẬP</a>
                    </div>
                </nav>
            </div >
        )
    }
}
