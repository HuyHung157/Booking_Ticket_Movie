import React, { Component } from "react";
import Movie from "../../movie/movie";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

class TheatresLogo extends Component {

    componentDidMount() {
        this.props.getLogoTheatres();
    }

    renderHTML = () => {
        return this.props.listLogoTheatres.map((theatresLogo, index) => {
            return <Movie key={index} movie={theatresLogo} />;
        });
    };

    render() {
        let { listLogoTheatres } = this.props;
        return (
            <div className="theatres_brandhub_logo ">{
                listLogoTheatres.map((theatres, index) => {
                    return (
                        <div key={index} className="theatres__logo">
                            <img className="logo_item" src={theatres.logo} />
                        </div>)
                })
            }</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listLogoTheatres: state.theatresReducer.listLogoTheatres
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLogoTheatres: () => {
            dispatch(actions.actGetListLogoTheatresAPI());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheatresLogo);
