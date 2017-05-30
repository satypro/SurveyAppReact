import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Home extends Component {

  render() {
    const { errorMessage, user, onSubmitUpdate } = this.props

    return (
          user
          &&
          <div className ="container"> 
          <div  style={{width: '40%' }}>
            
                <div className="form-group">
                <label >Name:</label>
                <input type="text" className="form-control" ref="name" placeholder="Enter Name" defaultValue = {user.name} />
                </div>
              
                <div className="form-group">
                <label >Email:</label>
                <input type="email" className="form-control" ref="email" placeholder="Enter Email" value = {user.email} />
                </div>

                <div className="form-group">
                <label >Mobile:</label>
                <input type="text" className="form-control" ref="mobile" placeholder="Enter Mobile" defaultValue = {user.mobile} />
                </div>

                <div className="form-group">
                <label >AddressLine1:</label>
                <input type="text" className="form-control" ref="addressline1" placeholder="Enter AddressLine1" defaultValue = {user.addressLine1} />
                </div>

                <div className="form-group">
                <label >AddressLine2:</label>
                <input type="text" className="form-control" ref="addressline2" placeholder="Enter AddressLine2" defaultValue = {user.addressLine2} />
                </div>

                <div className="form-group">
                <label >Country:</label>
                <input type="text" className="form-control" ref="country" placeholder="Enter Country" defaultValue = {user.country} />
                </div>

                <div className="form-group">
                <label >City:</label>
                <input type="text" className="form-control" ref="city" placeholder="Enter City" defaultValue = {user.city} />
                </div>

                <div className="form-group">
                <label >State:</label>
                <input type="text" className="form-control" ref="state" placeholder="Enter State" defaultValue = {user.state} />
                </div>

                <div className="form-group">
                <label >ZipCode:</label>
                <input type="text" className="form-control" ref="zipcode" placeholder="Enter ZipCode" defaultValue = {user.zipCode} />
                </div>

                <div className="form-group">
                <label >Telephone:</label>
                <input type="text" className="form-control" ref="telephone" placeholder="Enter Telephone" defaultValue = {user.telephone} />
                </div>

                <div className="form-group">
                <label >DOB:</label>
                <input type="text" className="form-control" ref="dob" placeholder="Enter DOB" defaultValue = {user.dob} />
                </div>

                <div className="form-group">
                 <button onClick= {(event) => this.handleClick(event)} className="btn btn-lg btn-primary pull-left">Submit</button>
                </div>
            </div>
            
            </div>
    )
  }

   handleClick(event) {
     
    const userupdate = { 
      name: this.refs.name.value.trim(),
      email: this.refs.email.value.trim(), 
      mobile: this.refs.mobile.value.trim(),
      addressline1: this.refs.addressline1.value.trim(),
      addressline2: this.refs.addressline2.value.trim(),
      country: this.refs.country.value.trim(),
      city: this.refs.city.value.trim(),
      state: this.refs.state.value.trim(),
      zipcode: this.refs.zipcode.value.trim(),
      telephone: this.refs.telephone.value.trim(),
      dob: this.refs.dob.value.trim(), 
      }
    this.props.onSubmitUpdate(userupdate)
  }
}

Home.propTypes = {
  onSubmitUpdate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  user : PropTypes.object
}