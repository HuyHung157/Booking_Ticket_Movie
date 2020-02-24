import React, { Component } from 'react'
import TheatresLogo from './theatres_logo/theatresLogo'
import TheatresBranch from './theatres_branch/theatresBranch'
import TheatresBranchMovie from './theatres_branch_movie/theatresBranchMovie'

export default class Theatres extends Component {
  render() {
    return (
      <div className="theatres" id="theaatres">
        <div className="theatres__padding" >
          <div className="theatres__content" >
              <TheatresLogo/>
              <TheatresBranch/>
              <TheatresBranchMovie/>
          </div>
        </div>
      </div>
    )
  }
}
