import React, { Component } from 'react';
import { connect } from "react-redux";

class Footer extends Component {
    // componentDidMount(){
    //     this.props.getListLogo();
    // }
    customURL(id) {

    }
    renderLink = (id) => {
        switch (id.maHeThongRap) {
            case "BHDStar":
                return (
                    <>
                        <a href="https://www.bhdstar.vn">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                )
            case "CGV":
                return (
                    <>
                        <a href="https://www.cgv.vn">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                )               
            case "CineStar":
                return (
                    <>
                        <a href="https://cinestar.com.vn">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                )
            case "Galaxy":
                return (
                    <>
                        <a href="https://www.galaxycine.vn">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                )
            case "LotteCinima":
                return (
                    <>
                        <a href="http://www.lottecinemavn.com">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                )
            case "MegaGS":
                return (
                    <>
                        <a href="https://www.megagscinemas.vn">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                )
            default:
                return (
                    <>
                        <a href="/">
                            <img
                                className="img_logo"
                                src={id.logo}
                                alt={id.logo}
                            />
                        </a>
                    </>
                );
        }
    }

    renderListLogo = () => {
        return this.props.listLogo.map((theatresLogo, index) => {
            return (
                <li className="partner__item" key={index}>
                    {this.renderLink(theatresLogo)}
                </li>
            )
        });
    };
    render() {
        return (
            <div className="footer">
                <div className="footer__padding">
                    <div className="row footer__content">
                        <div className="col-lg-3 footer__about">
                            <p className="about__titile">H2</p>
                            <ul className="about__list">
                                <li className="about__item"><a href="/">FAQ</a></li>
                                <li className="about__item"><a href="/">Thỏa thuận sử dụng</a></li>
                                <li className="about__item"><a href="/">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 footer__partner">
                            <p className="partner__titile">Đối tác</p>
                            <ul className="partner__list">
                                {this.renderListLogo()}
                            </ul>
                        </div>
                        <div className="col-lg-3 footer__social">
                            <p className="social__titile">App/Mobile</p>
                            <ul className="social__list">
                                <li className="social__item">
                                    <a href="/">
                                        <i className="fab fa-apple"></i>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="/">
                                        <i className="fab fa-android"></i>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="/">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="/">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        © Copyright 2020 <a href="/"> <p className="footer__brand">H2</p><p className="footer__brand_2">CineBox</p></a> . All rights reserved.
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listLogo: state.theatresReducer.listSystemTheatres,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);