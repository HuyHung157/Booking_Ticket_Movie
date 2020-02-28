import React, { Component } from 'react'
import TheatresLogo from './theatres_logo/theatresLogo'
import TheatresBranch from './theatres_branch/theatresBranch'
import TheatresBranchMovie from './theatres_branch_movie/theatresBranchMovie'

import { connect } from "react-redux"; 
import * as action from '../../redux/actions'

class Theatres extends Component {
  componentDidMount(){
    this.props.getListLogo();
    this.props.getDetailsTheatresAndListShowTimeMovies();
  }
  render() {
    let{listSystemTheatres, listBranchTheatres, systemTheatresForCustom } = this.props;
    return (
      <div className="theatres" id="theatres">
        <div className="theatres__padding" >
          <div className="theatres__content" >
            <div className="theatres__header">
              <TheatresLogo listLogo={listSystemTheatres}/>
            </div>
            <div className="theatres__wrapper">
              <div className="theatres__branch">
                <TheatresBranch 
                listBranch={listBranchTheatres}
                systemTheatresForCustom = {systemTheatresForCustom}
                />
              </div>
              <div className="theatres__listmovie">
                <TheatresBranchMovie listMovie={listBranchTheatres}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    listSystemTheatres: state.theatresReducer.listSystemTheatres,
    listBranchTheatres: state.theatresReducer.listBranchTheatres,
    systemTheatresForCustom: state.theatresReducer.systemTheatresForCustom,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getListLogo: ()=>{
      dispatch(action.actGetListSystemTheatresAPI());
    },
    // Gọi dữ liệu hệ thống rạp ban đầu là BHDStar luôn
    getDetailsTheatresAndListShowTimeMovies: (SystemTheatres="BHDStar")=>{
      dispatch(action.actGetListDetailsTheatresAPI(SystemTheatres));
    },
    getSystemTheatresForCustom: (systemTheatresForCustom= "BHDStar") => {
      dispatch(action.actGetSystemTheatresForCustom(systemTheatresForCustom));
  },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Theatres); 