// import React from 'react'
import Home from './pages/home/home';
import Login from './pages/home/login';
import DetailMovie from './pages/home/deatail-movie';
import Booking from './pages/home/booking-tickets';
import PageNotFound from './pages/page-not-found';

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/login",
        exact: false,
        component: Login
    },
    {
        path: "/booking-tickets",
        exact: false,
        component: Booking
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
