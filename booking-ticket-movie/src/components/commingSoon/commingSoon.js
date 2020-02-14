import React, { Component } from "react";
import Movie from "../movie/movie";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as actions from "../../redux/actions";

class CommingSoon extends Component {

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

  componentDidMount() {
    this.props.getListMovies();
  }

  renderHTML = () => {
    console.log(this.props);
    return this.props.listMovie.map((movie, index) => {
      return <Movie key={index} movie={movie} />;
    });
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="commingSoon" id="commingSoon">
        <Slider ref={c => (this.slider = c)} {...settings}>{
          this.renderHTML()
        }</Slider>
        {/* Custom Button Next/Pre  */}
        <div className="slider_commingSoon_control" style={{ textAlign: "center" }}>
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

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovieComming
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListMovies: () => {
      dispatch(actions.actGetListMovieCommingAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommingSoon);
