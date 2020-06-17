import React, { Component } from 'react'
import Header from './../../components/header/header';
import Carousel from '../../components/slider/slider';
// import BookingForm from '../../components/bookingForm/bookingForm';
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
                    {/* <BookingForm /> */}
                </div>
                <Showtime />
                <Theatres />
                <Footer />
            </div>
        )
    }
}
