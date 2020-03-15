// import React from 'react'
import Home from './pages/home/home';
import DetailMovie from './pages/home/detail-movie/detail-movie';
import PageNotFound from './pages/page-not-found';
import SignIn from './pages/home/auth/sign-in/signin';
import Signup from './pages/home/auth/sign-up/signup';
import BookingTicket from './pages/home/booking-tickets';

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/sign-in",
        exact: false,
        component: SignIn
    },
    {
        path: "/sign-up",
        exact: false,
        component: Signup
    },
    {
        path: "/checkout/:tenPhim/:maLichChieu",
        exact: false,
        component: BookingTicket
    },
    {
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie
      },
    {
        path: "",
        exact: false,
        component: PageNotFound
    }
];

export {routesHome};
