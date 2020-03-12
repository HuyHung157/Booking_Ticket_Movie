import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
    <div className="pageNotFound">
      <Link class="logo" to="/">
      <i class="logo_home fa fa-home"></i>
        </Link>
      <h1 className="pageNotFound__number">404</h1>
      <h2 className="pageNotFound__text">Page Not Found</h2>
    </div>
    )
  }
}
