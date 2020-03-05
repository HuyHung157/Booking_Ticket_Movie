import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import { Link } from "react-router-dom";

class TheatresBranch extends Component {
    handleActiveBranch = (activeBranch) => {
        // console.log(activeBranch)
        this.props.setActiveBranch(activeBranch);
    }
    renderTheatresList = () => {
        const { listBranch, activeBranch, systemTheatresForCustom } = this.props;
        if (listBranch && listBranch.length > 0) {
            return listBranch.map((branch, index) => {
                return (
                    <li
                        key={index}
                    
                        className={
                            index === activeBranch
                                ? "branch__item branch__item--active "
                                : "branch__item"
                        }
                        onClick={() => this.handleActiveBranch(index)}
                    >
                        <img
                            src={`/img/Theatres/${systemTheatresForCustom}_theatres_1.jpg`} 
                            className="branch__img"
                            alt={systemTheatresForCustom}
                        />
                        <div className="branch__detail">
                            <h3 className={`detail__title ${systemTheatresForCustom}`}>{branch.tenCumRap}</h3>
                            <p>{branch.diaChi}</p>
                            <Link to="#" className={`detail__link ${systemTheatresForCustom}`}>[detail]</Link>
                        </div>
                    </li>
                )
            })
        }
    }

    render() {
        // console.log(this.props)
        return (
            <ul className="branch__detail__list">
                {this.renderTheatresList()}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeBranch: state.theatresReducer.activeBranch,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListMovieShowTimeinTheatres: (SystemTheatres = "BHDStar") => {
            dispatch(
                actions.actGetListShowtimeTheatresAPI(SystemTheatres)
            );
        },
        setActiveBranch: activeBranch => {
            dispatch(actions.actSetActiveBranch(activeBranch));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheatresBranch);