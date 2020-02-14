import React, { Component } from 'react'
import Header from './../../components/header/header';
import Carousel from '../../components/Slider/slider';
import Bookingform from './../../components/bookingform/bookingform';
import Showtime from './../../components/showtime/showtime';
import Theatres from './../../components/theatres/theatres';
import Footer from './../../components/footer/footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="slider_bookingform">
                    <Carousel />
                    <Bookingform />
                </div>
                <Showtime />
                <Theatres />
                <Footer />
            </div>
        )
    }
}
