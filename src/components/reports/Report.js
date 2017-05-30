import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Report extends Component {

  render() {
    const { errorMessage, report } = this.props

    return (
      <div className ="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Number of call</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
                {
                  report.map((row, index) => (
                  <tr key={index}>
                    <th scope='row'>{row.id}</th>
                    <td>{row.numberofcalls}</td>
                    <td>{row.status}</td>
                  </tr>
                  ))
                }
          </tbody>
      </table>
      </div>
    )
  }
}

Report.propTypes = {
  errorMessage: PropTypes.string,
  report : PropTypes.array
}