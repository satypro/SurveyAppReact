import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class SurveyCreate extends Component {

  render() {
    const { errorMessage, user, onSurveyCreate, campaignId } = this.props

    return (
          user
          &&
          <div className ="container"> 
          <div  style={{width: '40%' }}>
            
                 <div className="form-group">
                <label >Survey Name:</label>
                <input type="text" className="form-control" ref="name" placeholder="Enter Survey Name" />
                </div>
    
                <div className="form-group">
                <label >Description:</label>
                <input type="text" className="form-control" ref="description" placeholder="Description" />
                </div>

                <div className="form-group">
                <label >Audiences:</label>
                <input type="text" className="form-control" ref="audiences" placeholder="Audiences" />
                </div>

                <div className="form-group">
                <label >Questions:</label>
                <input type="text" className="form-control" ref="questions" placeholder="questions" />
                </div>

                <div className="form-group">
                 <button onClick= {(event) => this.handleClick(campaignId, event)} className="btn btn-lg btn-primary pull-left">Create</button>
                </div>
            </div>
            
            </div>
    )
  }

   handleClick(campaignId, event) {
    const surveyCreateRequest = { 
      campaignId: campaignId,
      surveyName: this.refs.surveyName.value.trim(),
      audiences: this.refs.audiences.value.trim(),
      questions: this.refs.questions.value.trim()
    }
    this.props.onSurveyCreate(surveyCreateRequest);
  }
}

SurveyCreate.propTypes = {
  onSurveyCreate: PropTypes.func.isRequired,
  campaignId: PropTypes.string,
  errorMessage: PropTypes.string,
  user : PropTypes.object
}