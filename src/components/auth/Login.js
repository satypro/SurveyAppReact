import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props

    return (
  <div id="loginModal" className="modal" role="dialog">
    <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Login</h4>
      </div>
      <div className="modal-body">
        <div className ="form-signin">
        <input type='text' ref='username' className="form-control"  placeholder='Username' />
        <input type='password' ref='password' className="form-control"  placeholder='Password' />
        <button onClick={(event) => this.handleClick(event)} className="btn btn-lg btn-primary btn-block">
          SignIn
        </button>

        {errorMessage &&
          <p >{errorMessage}</p>
        }
      </div>
      </div>
    </div>
  </div>
</div>
    )
  }

  handleClick(event) {
    //event.preventDefault();
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}