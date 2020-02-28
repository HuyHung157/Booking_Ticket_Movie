import React, { Component } from "react";
import SlickSlider from "react-slick";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <SlickSlider ref={c => (this.slider = c)} {...settings}>
          <div className="slider__item">
            <a className="overplay" href="/" onClick={this.onOpenModal}>
              <img className="card_img_top" alt="slider" src="http://movie0706.cybersoft.edu.vn/hinhanh/4444444444_gp03.jpg" />
              <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
            </a>
          </div>
          <div className="slider__item">
            <a className="overplay" href="/" onClick={this.onOpenModal}>
              <img className="card_img_top" alt="slider" src="http://movie0706.cybersoft.edu.vn/hinhanh/test003_gp11.jpg" />
              <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
            </a>
          </div>
          <div className="slider__item">
            <a className="overplay" href="/" onClick={this.onOpenModal}>
              <img className="card_img_top" alt="slider" src="http://movie0706.cybersoft.edu.vn/hinhanh/avenger-infinity-war_gp10.jpg" />
              <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
            </a>
          </div>
          <div className="slider__item">
            <a className="overplay" href="/" onClick={this.onOpenModal}>
              <img className="card_img_top" alt="slider" src="http://movie0706.cybersoft.edu.vn/hinhanh/avengers-endgame_gp15.jpg" />
              <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
            </a>
          </div><div className="slider__item">
            <a className="overplay" href="/" onClick={this.onOpenModal}>
              <img className="card_img_top" alt="slider" src="http://movie0706.cybersoft.edu.vn/hinhanh/chuyen-ngay-xua-o-hollywood_gp10.jpg" />
              <div className="btn_trailer"> <i className="fa fa-play-circle"></i> </div>
            </a>
          </div>
        </SlickSlider>
        <div className="slider__control" style={{ textAlign: "center" }}>
          <button className="btn_pre_slide arrow_btn" onClick={this.previous}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="btn_next_slide arrow_btn" onClick={this.next}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}