// import React from 'react'
import Home from './pages/home/home';
import DetailMovie from './pages/home/detail-movie/detail-movie';
// import PageNotFound from './pages/page-not-found';
import SignIn from './pages/home/auth/sign-in/signin';
import Signup from './pages/home/auth/sign-up/signup';
import BookingTicket from './pages/home/booking-tickets';

import Admin from './pages/admin/admin';
import Account from './pages/admin/Account/account';
import Movie from './pages/admin/Movie/movie';
import Theatres from './pages/admin/Theatres/theatres';

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
    // {
    //     path: "/dashboard",
    //     exact: false,
    //     component: Admin
    // },
    // {
    //     path: "",
    //     exact: false,
    //     component: PageNotFound
    // }

];

const routesAdmin = [
    {
        path: "/dashboard",
        exact: false,
        component: Admin
    },
    {
        path: "/admin/account",
        exact: false,
        component: Account
    },
    {
        path: "/admin/movie",
        exact: false,
        component: Movie
    },
    {
        path: "/admin/theatres",
        exact: false,
        component: Theatres
    },
  ];

export { routesHome, routesAdmin };
