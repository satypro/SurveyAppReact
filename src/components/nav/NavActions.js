import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class NavActions extends Component {

  render() {
    const { onReportClick, onCampaignClick, onLogoutClick,onProfileClick, isAuthenticated } = this.props

    return (
            <div >
                 {isAuthenticated &&
                 <div>
                 <button onClick={() => onLogoutClick()} className="btn btn-primary pull-right" style={{"marginLeft":"5px"}}>Logout</button>
                 <button onClick= {() => onReportClick()} className="btn btn-primary pull-right" style={{"marginLeft":"5px"}}>Report</button>
                 <button onClick= {() => onCampaignClick()} className="btn btn-primary pull-right" style={{"marginLeft":"5px"}}>Campaign</button>
                 <button onClick= {() => onProfileClick()} className="btn btn-primary pull-right" style={{"marginLeft":"5px"}}>Profile</button>
                 </div>
                 }
                 {
                  !isAuthenticated &&
                 <button type="button" className="btn btn-info pull-right" style={{"marginLeft":"5px"}} data-toggle="modal" data-target="#loginModal">Login</button>
                 }
            </div>

    )
  }
}

NavActions.propTypes = {
  onReportClick: PropTypes.func.isRequired,
  onCampaignClick : PropTypes.func.isRequired,
  onLogoutClick : PropTypes.func.isRequired,
  onProfileClick: PropTypes.func.isRequired,
  isAuthenticated : PropTypes.boolean
}