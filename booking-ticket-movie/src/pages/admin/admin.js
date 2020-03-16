import React, { Component } from 'react'
import Account from './Account/account'
import Movie from './Movie/movie'
import Theatres from './Theatres/theatres'

export default class Admin extends Component {
    render() {
        return (
            <div className="admin__page">
                <div className="admin__content">
                    <h1 className="admin__welcome">Chào Quản Trị</h1>
                    <Account />
                    <Movie />
                    <Theatres />
                </div>
            </div>
        )
    }
}
