import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

class TheatresLogo extends Component {

    handleOnClickLogo = (activeLogo, SystemBranch) => {
        const { setActiveLogo, setActiveBranch, getDetailsTheatres, getListShowTimeMoviesAndInfor, getSystemTheatresForCustom} = this.props;
        setActiveLogo(activeLogo);
        setActiveBranch(0);
        getDetailsTheatres(SystemBranch);
        getListShowTimeMoviesAndInfor(SystemBranch);
        getSystemTheatresForCustom(SystemBranch);
    }


    renderListLogo = () => {
        return this.props.listLogo.map((theatresLogo, index) => {
            return (
                <li className="logo__item" key={index}>
                    <img
                        onClick={() => this.handleOnClickLogo(index, theatresLogo.maHeThongRap)}
                        className={
                            index === this.props.activeLogo
                                ? "logo__img logo__img--active"
                                : "logo__img"
                        }
                        src={theatresLogo.logo}
                        alt={theatresLogo.logo}
                    />
                </li>
            )
        });
    };

    render() {
        // console.log(this.props)
        return (
            <div className="theatres_brandhub_logo ">{
                <ul className="logo__list">
                    {this.renderListLogo()}
                </ul>
            }</div>

        )
    }
}

const mapStateToProps = state => {
    return {
        listLogoTheatres: state.theatresReducer.listSystemTheatres,
        activeLogo: state.theatresReducer.activeLogo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setActiveBranch: activeBranch => {
            dispatch(actions.actSetActiveBranch(activeBranch));
        },
        setActiveLogo: (activeLogo) => {
            dispatch(actions.actSetActiveLogo(activeLogo));
        },
        getDetailsTheatres: (SystemTheatres = "BHDStar") => {
            dispatch(
                actions.actGetListDetailsTheatresAPI(SystemTheatres)
            );
        },
        getListShowTimeMoviesAndInfor: (SystemTheatres = "BHDStar") => {
            dispatch(
                actions.actGetListShowtimeTheatresAPI(SystemTheatres)
            );
        },
        getSystemTheatresForCustom: (systemTheatresForCustom= "BHDStar") => {
            dispatch(actions.actGetSystemTheatresForCustom(systemTheatresForCustom));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheatresLogo);
