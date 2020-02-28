import React, { Component } from 'react';
import { connect } from "react-redux";
// import * as actions from "../../../redux/actions";

class TheatresBranchMovie extends Component {

    render() {
        return (
            <div className="">
                <ul className="abc">Hello World</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheatresBranchMovie);