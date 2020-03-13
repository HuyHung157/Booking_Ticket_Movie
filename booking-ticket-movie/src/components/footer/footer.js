import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__padding">
                <div className="row footer__content">
                    <div className="col-lg-4 footer__about">
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="/">FAQ</a>
                            </li>
                            <li className="about__item"><a href="/">FAQ</a></li>
                            <li className="about__item"><a href="/">Thỏa thuận sử dụng</a></li> 
                            <li className="about__item"><a href="/">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 footer__partner">
                        <p className="partner__titile">Đối tác: </p>
                        <ul className="partner__list">
                            <li className="partner__item"><a href="https://www.bhdstar.vn"><img src="./img/Theatres/logo/bhd-star-cineplex.png" alt="img_partner"/></a></li>
                            <li className="partner__item"><a href="https://www.cgv.vn"><img src="./img/Theatres/logo/cgv.png" alt="img_partner"/></a></li>
                            <li className="partner__item"><a href="https://cinestar.com.vn"><img src="./img/Theatres/logo/cinestar.png" alt="img_partner"/></a></li>
                            <li className="partner__item"><a href="https://www.galaxycine.vn"><img src="./img/Theatres/logo/galaxy-cinema.png" alt="img_partner"/></a></li>
                            <li className="partner__item"><a href="http://www.lottecinemavn.com"><img src="./img/Theatres/logo/lotte-cinema.png" alt="img_partner"/></a></li>
                            <li className="partner__item"><a href="https://www.megagscinemas.vn"><img src="./img/Theatres/logo/megags.png" alt="img_partner"/></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 footer__social">
                    <ul className="social__list">
                            <li className="social__item"><a href="/">
                            <i className="fab fa-apple"></i>
                                </a>
                                </li>
                            <li className="social__item"><a href="/"><i className="fab fa-android"></i></a></li>
                            <li className="social__item"><a href="/"><i className="fab fa-facebook"></i></a></li>
                            <li className="social__item"><a href="/"><i className="fab fa-twitter"></i></a></li>
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
