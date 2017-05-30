import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Campaign extends Component {

  render() {
    const { errorMessage, campaign, onSubmitCampaign, onGetSurveys } = this.props

    return (
            campaign
            &&
            <div className ="container">
           
            <div action="#" style={{width: '40%' }}>
                
                <div className="form-group">
                <label >Campaign Name:</label>
                <input type="text" className="form-control" ref="name" placeholder="Enter Campaign Name" defaultValue={campaign.campaignName} />
                </div>
    
                <div className="form-group">
                <label >Description:</label>
                <input type="text" className="form-control" ref="description" placeholder="Description" defaultValue = {campaign.description}/>
                </div>
                <div className="form-group">
                 <button onClick= {(event) => this.handleGetSurveysClick(campaign.campaignId, event)} className="btn btn-lg btn-primary pull-left">Get Surveys</button>
                </div>

                <div className="form-group">
                 <button onClick= {(event) => this.handleClick(campaign.campaignId, event)} className="btn btn-lg btn-primary pull-left">Update</button>
                </div>

            </div>
            </div>
    )
  }

   handleClick(campaignId, event) {

    const name = this.refs.name
    const description = this.refs.description
    const request = { campaignId:campaignId, campaignName: name.value, description: description.value }
    this.props.onSubmitCampaign(request)
  }

  handleGetSurveysClick(campaignId, event) {
    this.props.onGetSurveys(campaignId)
  }
}

Campaign.propTypes = {
  onSubmitCampaign: PropTypes.func.isRequired,
  onGetSurveys: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  campaign : PropTypes.object
}