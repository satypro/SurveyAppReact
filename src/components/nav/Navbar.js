import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Login from '../auth/Login'
import NavActions from './NavActions'

import { getBasicReport } from '../../actions/ReportsActions'
import { loginUser, logoutUser, getUser } from '../../actions/UserActions'
import { getCampaignList } from '../../actions/CampaignActions'

export default class Navbar extends Component {

  render() {
    const {Reducer, dispatch } = this.props

    return (
      <div>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Voice Survey</a>
          <div className='navbar-form'>
            {
            <NavActions  
              onReportClick ={() => dispatch(getBasicReport())}
              onCampaignClick ={() => dispatch(getCampaignList())} 
              onLogoutClick={() => dispatch(logoutUser())} 
              onProfileClick={()=> dispatch(getUser())}
              isAuthenticated = {Reducer.isAuthenticated} />
            }
          </div>
        </div>
      </nav>
      <div className="container">
      <div>
      {!Reducer.isAuthenticated &&
              <Login
                errorMessage={Reducer.errorMessage}
                onLoginClick={ creds => dispatch(loginUser(creds)) }
              />
      }
      </div>
      </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  Reducer: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}
